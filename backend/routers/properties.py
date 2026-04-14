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
async def get_properties(location: Optional[str] = None, category: Optional[str] = None):
    """Get all properties with optional filters"""
    try:
        query = {}
        if location:
            query["location"] = {"$regex": location, "$options": "i"}
        if category:
            query["category"] = category
        
        properties = await db.properties.find(query).to_list(100)
        return {"count": len(properties), "properties": properties}
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
async def get_contact_inquiries():
    """Get all contact inquiries (admin only)"""
    try:
        inquiries = await db.contact_inquiries.find().sort("submitted_at", -1).to_list(100)
        return {"count": len(inquiries), "inquiries": inquiries}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
