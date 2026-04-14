"""
Backend APIs for property management and contact forms
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime
from motor.motor_asyncio import AsyncIOMotorClient
import os

router = APIRouter(prefix="/api/properties", tags=["Properties"])

# Get database connection
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'ncr_dream_homes')]

# Models
class Property(BaseModel):
    title: str
    description: str
    location: str
    price: str
    area: str
    property_type: str
    category: str
    features: List[str]
    image: Optional[str] = None
    created_at: datetime = datetime.utcnow()

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    message: str
    property_id: Optional[str] = None
    submitted_at: datetime = datetime.utcnow()

@router.post("/")
async def create_property(property: Property):
    """Create a new property listing"""
    try:
        result = await db.properties.insert_one(property.dict())
        return {"id": str(result.inserted_id), "message": "Property created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
async def get_properties(
    location: Optional[str] = None, 
    category: Optional[str] = None,
    skip: int = 0,
    limit: int = 50
):
    """Get properties with optional filters and pagination"""
    try:
        query = {}
        if location:
            query["location"] = {"$regex": location, "$options": "i"}
        if category:
            query["category"] = category
        
        # Field projection - only return essential fields
        projection = {
            "title": 1,
            "description": 1,
            "location": 1,
            "price": 1,
            "area": 1,
            "property_type": 1,
            "category": 1,
            "features": 1,
            "image": 1
        }
        
        properties = await db.properties.find(query, projection).skip(skip).limit(limit).to_list(limit)
        total_count = await db.properties.count_documents(query)
        
        return {
            "count": len(properties),
            "total": total_count,
            "skip": skip,
            "limit": limit,
            "properties": properties
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/contact")
async def submit_contact_form(contact: ContactForm):
    """Submit a contact inquiry"""
    try:
        result = await db.contact_inquiries.insert_one(contact.dict())
        return {"id": str(result.inserted_id), "message": "Contact form submitted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/contact")
async def get_contact_inquiries(skip: int = 0, limit: int = 50):
    """Get contact inquiries with pagination (admin only)"""
    try:
        # Field projection - only essential fields
        projection = {
            "name": 1,
            "email": 1,
            "phone": 1,
            "message": 1,
            "property_id": 1,
            "submitted_at": 1
        }
        
        inquiries = await db.contact_inquiries.find({}, projection).sort("submitted_at", -1).skip(skip).limit(limit).to_list(limit)
        total_count = await db.contact_inquiries.count_documents({})
        
        return {
            "count": len(inquiries),
            "total": total_count,
            "skip": skip,
            "limit": limit,
            "inquiries": inquiries
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
