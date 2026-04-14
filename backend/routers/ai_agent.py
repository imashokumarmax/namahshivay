"""
AI Agent for automated daily property posts
Generates SEO-optimized content for properties, social media, and articles
"""

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
import os
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage
import uuid

load_dotenv()

router = APIRouter(prefix="/api/ai-agent", tags=["AI Agent"])

# AI Content Generation Models
class PropertyGenerationRequest(BaseModel):
    location: str
    property_type: str
    area: Optional[str] = None
    price_range: Optional[str] = None

class GeneratedProperty(BaseModel):
    id: str
    title: str
    description: str
    seo_title: str
    seo_description: str
    keywords: List[str]
    social_media_caption: str
    article_content: str
    generated_at: datetime

class DailyPostRequest(BaseModel):
    target_locations: List[str]
    property_types: List[str]
    count: int = 5

# Initialize AI Chat
def get_ai_chat():
    api_key = os.environ.get('EMERGENT_LLM_KEY')
    if not api_key:
        raise ValueError("EMERGENT_LLM_KEY not found in environment")
    
    chat = LlmChat(
        api_key=api_key,
        session_id=f"property-gen-{datetime.now().strftime('%Y%m%d')}",
        system_message="""You are an expert real estate content generator for NCR Dream Homes, 
        a premium property consultancy in Delhi NCR. Your task is to create highly SEO-optimized, 
        customer-searchable content for properties in Noida, Ghaziabad, Greater Noida, 
        Greater Noida West, and Jewar Airport areas.
        
        Focus on:
        - YEIDA approved plots
        - Jewar Airport proximity
        - Yamuna Expressway properties
        - Investment potential and ROI
        - High-quality, engaging descriptions
        - SEO keywords for Google search
        - Social media-friendly captions
        
        Always include location-specific details, pricing context, and call-to-action."""
    ).with_model("openai", "gpt-5.2")
    
    return chat

@router.post("/generate-property", response_model=GeneratedProperty)
async def generate_property_content(request: PropertyGenerationRequest):
    """
    Generate complete property listing with SEO content
    """
    try:
        chat = get_ai_chat()
        
        prompt = f"""Generate a comprehensive property listing for:
        
        Location: {request.location}
        Property Type: {request.property_type}
        Area: {request.area or 'Not specified'}
        Price Range: {request.price_range or 'Market rate'}
        
        Provide the following in JSON format:
        {{
            "title": "SEO-optimized property title (60-70 chars)",
            "description": "Detailed property description (200-300 words) highlighting features, location benefits, investment potential",
            "seo_title": "Google search optimized title (50-60 chars)",
            "seo_description": "Meta description for SEO (150-160 chars)",
            "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
            "social_media_caption": "Instagram/Facebook caption with emojis (100-150 chars)",
            "article_content": "Blog article about this property type in this location (400-500 words)"
        }}
        
        Focus on:
        - Jewar Airport proximity if relevant
        - YEIDA approval if Greater Noida/Greater Noida West
        - Metro connectivity
        - Investment ROI
        - Modern amenities
        - Call NCR Dream Homes at 8287873037"""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        # Parse AI response (assuming JSON response)
        import json
        try:
            content = json.loads(response)
        except:
            # Fallback if not JSON
            content = {
                "title": f"Premium {request.property_type} in {request.location}",
                "description": response[:300],
                "seo_title": f"{request.property_type} for Sale in {request.location}",
                "seo_description": response[:160],
                "keywords": [request.location.lower(), request.property_type.lower()],
                "social_media_caption": f"🏡 New {request.property_type} in {request.location}! 📞 8287873037",
                "article_content": response
            }
        
        return GeneratedProperty(
            id=str(uuid.uuid4()),
            generated_at=datetime.utcnow(),
            **content
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI generation failed: {str(e)}")

@router.post("/generate-daily-posts")
async def generate_daily_posts(request: DailyPostRequest):
    """
    Generate multiple property posts for daily publishing
    """
    try:
        chat = get_ai_chat()
        
        prompt = f"""Generate {request.count} unique property listings for NCR Dream Homes.
        
        Target Locations: {', '.join(request.target_locations)}
        Property Types: {', '.join(request.property_types)}
        
        For each property, provide:
        1. Title (SEO-optimized, 60-70 chars)
        2. Short description (100 words)
        3. Price range estimation
        4. Key features (5 points)
        5. Social media caption
        6. Top 5 SEO keywords
        
        Make each listing unique, focusing on different areas within each location.
        Include Jewar Airport proximity, YEIDA approval, investment potential.
        
        Return as JSON array."""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        return {
            "status": "success",
            "count": request.count,
            "generated_at": datetime.utcnow(),
            "content": response
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Daily posts generation failed: {str(e)}")

@router.post("/generate-article")
async def generate_article(topic: str, location: str):
    """
    Generate SEO-optimized article/blog content
    """
    try:
        chat = get_ai_chat()
        
        prompt = f"""Write a comprehensive SEO-optimized article about:
        
        Topic: {topic}
        Location Focus: {location}
        
        Requirements:
        - 800-1000 words
        - Include H2 and H3 headings
        - SEO keywords naturally integrated
        - Market trends and data
        - Investment insights
        - Call-to-action to NCR Dream Homes (8287873037)
        - Focus on Jewar Airport, YEIDA plots, Yamuna Expressway
        
        Make it informative, engaging, and Google-search friendly."""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        return {
            "status": "success",
            "topic": topic,
            "location": location,
            "article": response,
            "generated_at": datetime.utcnow()
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Article generation failed: {str(e)}")

@router.post("/generate-social-media")
async def generate_social_media_content(
    property_title: str,
    property_type: str,
    location: str,
    price: str
):
    """
    Generate social media posts for Facebook, Instagram, LinkedIn
    """
    try:
        chat = get_ai_chat()
        
        prompt = f"""Create engaging social media posts for:
        
        Property: {property_title}
        Type: {property_type}
        Location: {location}
        Price: {price}
        
        Generate:
        1. Facebook post (150-200 chars, professional tone)
        2. Instagram caption (100-150 chars, with 5 relevant hashtags and emojis)
        3. LinkedIn post (200-250 chars, professional, investment-focused)
        4. Twitter/X post (280 chars max, attention-grabbing)
        
        Include:
        - Call NCR Dream Homes at 8287873037
        - Website: ncr-dreamhomes.com
        - Urgency/scarcity elements
        - Value proposition
        
        Return as JSON with keys: facebook, instagram, linkedin, twitter"""
        
        user_message = UserMessage(text=prompt)
        response = await chat.send_message(user_message)
        
        return {
            "status": "success",
            "property": property_title,
            "social_content": response,
            "generated_at": datetime.utcnow()
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Social media generation failed: {str(e)}")

@router.get("/ai-status")
async def ai_agent_status():
    """
    Check AI agent status and configuration
    """
    try:
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        return {
            "status": "active",
            "ai_model": "GPT-5.2",
            "provider": "OpenAI via Emergent",
            "key_configured": bool(api_key),
            "features": [
                "Property listing generation",
                "Daily automated posts",
                "SEO article creation",
                "Social media content",
                "Multi-platform posting"
            ]
        }
    except Exception as e:
        return {
            "status": "error",
            "error": str(e)
        }
