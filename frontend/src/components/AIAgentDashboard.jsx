import React, { useState } from 'react';
import { Sparkles, TrendingUp, Calendar, Share2, FileText, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { toast } from 'sonner';

export const AIAgentDashboard = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const features = [
    {
      icon: Calendar,
      title: 'Daily Auto Posts',
      description: 'AI generates 5-10 property listings daily',
      status: 'Active'
    },
    {
      icon: FileText,
      title: 'SEO Articles',
      description: 'Automated blog posts about market trends',
      status: 'Active'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Facebook, Instagram, LinkedIn posts',
      status: 'Active'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'AI-powered property insights',
      status: 'Coming Soon'
    }
  ];

  const handleGenerateDaily = async () => {
    setIsGenerating(true);
    toast.loading('AI is generating daily property posts...');
    
    // Simulate AI generation (will be connected to backend)
    setTimeout(() => {
      toast.success('5 new property listings generated successfully!');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">AI-Powered Property Agent</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Automated Daily Property Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI agent generates fresh property listings daily with SEO-optimized content, 
            images, and posts them across all platforms automatically
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 border-purple-200 hover:border-purple-400 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <Badge className={feature.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                  {feature.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Agent Control Panel */}
        <Card className="border-2 border-purple-300 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-xl">
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-6 h-6" />
              AI Agent Control Panel
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">What AI Agent Does Daily:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Generates 5-10 new property listings with titles & descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Creates SEO-optimized content for Google search</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Generates social media posts with hashtags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Selects relevant property images</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Writes blog articles about market trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Posts to Facebook, Instagram, LinkedIn</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Recent AI Activity:</h3>
                <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">5 properties generated today</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">3 blog articles published</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">15 social media posts created</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Next run: Tomorrow 9:00 AM</span>
                  </div>
                </div>

                <Button
                  onClick={handleGenerateDaily}
                  disabled={isGenerating}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  {isGenerating ? 'Generating...' : 'Generate Posts Now'}
                </Button>
              </div>
            </div>

            {/* Note */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> AI Agent uses GPT-5.2 model to generate human-quality content. 
                All posts are automatically optimized for SEO and social media engagement. 
                Backend integration coming soon for full automation!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
