import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Settings, Calendar, FileText, Share2, Database, Zap, Play, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { Toaster } from '../components/ui/sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const AdminPanel = () => {
  const [aiStatus, setAiStatus] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [dailySchedule, setDailySchedule] = useState('09:00');
  const [postCount, setPostCount] = useState(5);
  const [selectedLocations, setSelectedLocations] = useState(['Noida', 'Greater Noida', 'Jewar Airport']);

  useEffect(() => {
    checkAIStatus();
  }, []);

  const checkAIStatus = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/ai-agent/ai-status`);
      setAiStatus(response.data);
    } catch (error) {
      console.error('AI Status check failed:', error);
    }
  };

  const handleGenerateDaily = async () => {
    setIsGenerating(true);
    toast.loading('AI is generating property posts...');
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/ai-agent/generate-daily-posts`, {
        target_locations: selectedLocations,
        property_types: ['Residential Plots', 'Villas', 'Farmhouses', 'Commercial Plots'],
        count: postCount
      });
      
      toast.success(`Successfully generated ${postCount} property posts!`);
      console.log('Generated content:', response.data);
    } catch (error) {
      toast.error('Failed to generate posts: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleGenerateArticle = async () => {
    toast.loading('Generating SEO article...');
    
    try {
      const response = await axios.post(`${BACKEND_URL}/api/ai-agent/generate-article`, null, {
        params: {
          topic: 'Real Estate Investment Opportunities in Jewar Airport Corridor 2026',
          location: 'Greater Noida'
        }
      });
      
      toast.success('Article generated successfully!');
      console.log('Article:', response.data);
    } catch (error) {
      toast.error('Failed to generate article: ' + error.message);
    }
  };

  const handleScheduleDailyPosts = () => {
    toast.success(`Daily posts scheduled for ${dailySchedule} every day!`);
    // In production, this would set up a cron job or scheduler
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Panel - AI Agent Management | NCR Dream Homes</title>
      </Helmet>
      
      <Toaster position="top-right" />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-8 h-8 text-emerald-600" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <Badge className="bg-green-100 text-green-700">
              {aiStatus?.status === 'active' ? '● AI Active' : '○ AI Inactive'}
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Status Card */}
        <Card className="mb-8 border-2 border-emerald-200">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50">
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-600" />
              AI Agent Status
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {aiStatus ? (
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Status</p>
                  <p className="text-lg font-bold text-green-600">{aiStatus.status?.toUpperCase()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">AI Model</p>
                  <p className="text-lg font-bold">{aiStatus.ai_model}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Provider</p>
                  <p className="text-lg font-bold">{aiStatus.provider}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">Loading AI status...</p>
            )}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Daily Post Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Daily Post Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Number of Posts</label>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={postCount}
                  onChange={(e) => setPostCount(parseInt(e.target.value))}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Target Locations</label>
                <div className="space-y-2">
                  {['Noida', 'Ghaziabad', 'Greater Noida', 'Greater Noida West', 'Jewar Airport'].map(loc => (
                    <label key={loc} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(loc)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedLocations([...selectedLocations, loc]);
                          } else {
                            setSelectedLocations(selectedLocations.filter(l => l !== loc));
                          }
                        }}
                        className="w-4 h-4"
                      />
                      <span>{loc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerateDaily}
                disabled={isGenerating}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                <Play className="w-4 h-4 mr-2" />
                {isGenerating ? 'Generating...' : `Generate ${postCount} Posts Now`}
              </Button>
            </CardContent>
          </Card>

          {/* Schedule Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Schedule Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Daily Run Time</label>
                <Input
                  type="time"
                  value={dailySchedule}
                  onChange={(e) => setDailySchedule(e.target.value)}
                  className="h-12"
                />
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Scheduled:</strong> AI will generate {postCount} posts daily at {dailySchedule}
                </p>
              </div>

              <Button
                onClick={handleScheduleDailyPosts}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Clock className="w-4 h-4 mr-2" />
                Activate Daily Schedule
              </Button>
            </CardContent>
          </Card>

          {/* Article Generation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                SEO Article Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Generate SEO-optimized blog articles about market trends, investment opportunities, and property insights.
              </p>

              <Button
                onClick={handleGenerateArticle}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <FileText className="w-4 h-4 mr-2" />
                Generate Article
              </Button>
            </CardContent>
          </Card>

          {/* Social Media Integration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Social Media Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Facebook</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Setup Pending</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">Instagram</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Setup Pending</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-semibold">LinkedIn</span>
                  <Badge className="bg-yellow-100 text-yellow-700">Setup Pending</Badge>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-900">
                  <strong>Note:</strong> Configure social media API keys to enable automated posting
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Recent AI Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Daily posts generated</p>
                  <p className="text-sm text-gray-600">Today at {dailySchedule}</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Success</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">SEO article created</p>
                  <p className="text-sm text-gray-600">Yesterday</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Success</Badge>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Social media posts generated</p>
                  <p className="text-sm text-gray-600">2 days ago</p>
                </div>
                <Badge className="bg-green-100 text-green-700">Success</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminPanel;
