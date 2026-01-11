import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { ArrowLeft, Plus, Trash2, Save } from 'lucide-react';
import { portfolioData as initialData } from '../mock';
import { useToast } from '../hooks/use-toast';

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [portfolioData, setPortfolioData] = useState(initialData);
  const [activeSection, setActiveSection] = useState('profile');

  const handleSave = () => {
    // Mock save - will be replaced with actual API call
    toast({
      title: "Success",
      description: "Your changes have been saved.",
    });
  };

  const updateProfile = (field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "",
      description: "",
      githubUrl: "",
      liveUrl: "",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      technologies: []
    };
    setPortfolioData(prev => ({
      ...prev,
      projects: [...prev.projects, newProject]
    }));
  };

  const updateProject = (id, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.map(p => 
        p.id === id ? { ...p, [field]: value } : p
      )
    }));
  };

  const deleteProject = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addCredlyBadge = () => {
    const newBadge = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      imageUrl: "",
      credlyUrl: "",
      earnedDate: new Date().toISOString().split('T')[0]
    };
    setPortfolioData(prev => ({
      ...prev,
      credlyBadges: [...prev.credlyBadges, newBadge]
    }));
  };

  const updateCredlyBadge = (id, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      credlyBadges: prev.credlyBadges.map(b => 
        b.id === id ? { ...b, [field]: value } : b
      )
    }));
  };

  const deleteCredlyBadge = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      credlyBadges: prev.credlyBadges.filter(b => b.id !== id)
    }));
  };

  const addOtherBadge = () => {
    const newBadge = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      imageUrl: "",
      badgeUrl: "",
      earnedDate: new Date().toISOString().split('T')[0]
    };
    setPortfolioData(prev => ({
      ...prev,
      otherBadges: [...prev.otherBadges, newBadge]
    }));
  };

  const updateOtherBadge = (id, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      otherBadges: prev.otherBadges.map(b => 
        b.id === id ? { ...b, [field]: value } : b
      )
    }));
  };

  const deleteOtherBadge = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      otherBadges: prev.otherBadges.filter(b => b.id !== id)
    }));
  };

  const addMediumPost = () => {
    const newPost = {
      id: Date.now().toString(),
      title: "",
      excerpt: "",
      url: "",
      publishedDate: new Date().toISOString().split('T')[0],
      readTime: "",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    };
    setPortfolioData(prev => ({
      ...prev,
      mediumPosts: [...prev.mediumPosts, newPost]
    }));
  };

  const updateMediumPost = (id, field, value) => {
    setPortfolioData(prev => ({
      ...prev,
      mediumPosts: prev.mediumPosts.map(p => 
        p.id === id ? { ...p, [field]: value } : p
      )
    }));
  };

  const deleteMediumPost = (id) => {
    setPortfolioData(prev => ({
      ...prev,
      mediumPosts: prev.mediumPosts.filter(p => p.id !== id)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate('/')} variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">Edit Portfolio</h1>
            </div>
            <Button onClick={handleSave} className="gap-2 bg-gray-900 hover:bg-gray-800">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {['profile', 'projects', 'credly', 'badges', 'blog'].map((section) => (
                    <Button
                      key={section}
                      variant={activeSection === section ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Profile Section */}
            {activeSection === 'profile' && (
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your personal information and social links</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={portfolioData.profile.name}
                      onChange={(e) => updateProfile('name', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={portfolioData.profile.title}
                      onChange={(e) => updateProfile('title', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      value={portfolioData.profile.bio}
                      onChange={(e) => updateProfile('bio', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={portfolioData.profile.email}
                      onChange={(e) => updateProfile('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="github">GitHub URL</Label>
                    <Input
                      id="github"
                      value={portfolioData.profile.github}
                      onChange={(e) => updateProfile('github', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn URL</Label>
                    <Input
                      id="linkedin"
                      value={portfolioData.profile.linkedin}
                      onChange={(e) => updateProfile('linkedin', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="medium">Medium URL</Label>
                    <Input
                      id="medium"
                      value={portfolioData.profile.medium}
                      onChange={(e) => updateProfile('medium', e.target.value)}
                    />
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                  <Button onClick={addProject} className="gap-2 bg-gray-900 hover:bg-gray-800">
                    <Plus className="w-4 h-4" />
                    Add Project
                  </Button>
                </div>
                {portfolioData.projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Edit Project</CardTitle>
                        <Button
                          onClick={() => deleteProject(project.id)}
                          variant="destructive"
                          size="sm"
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Title</Label>
                        <Input
                          value={project.title}
                          onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea
                          rows={3}
                          value={project.description}
                          onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>GitHub URL</Label>
                        <Input
                          value={project.githubUrl}
                          onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Live URL (optional)</Label>
                        <Input
                          value={project.liveUrl}
                          onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Image URL</Label>
                        <Input
                          value={project.image}
                          onChange={(e) => updateProject(project.id, 'image', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Technologies (comma-separated)</Label>
                        <Input
                          value={project.technologies.join(', ')}
                          onChange={(e) => updateProject(project.id, 'technologies', e.target.value.split(',').map(t => t.trim()))}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Credly Badges Section */}
            {activeSection === 'credly' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Credly Certifications</h2>
                  <Button onClick={addCredlyBadge} className="gap-2 bg-gray-900 hover:bg-gray-800">
                    <Plus className="w-4 h-4" />
                    Add Badge
                  </Button>
                </div>
                {portfolioData.credlyBadges.map((badge) => (
                  <Card key={badge.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Edit Badge</CardTitle>
                        <Button
                          onClick={() => deleteCredlyBadge(badge.id)}
                          variant="destructive"
                          size="sm"
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Badge Name</Label>
                        <Input
                          value={badge.name}
                          onChange={(e) => updateCredlyBadge(badge.id, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Issuer</Label>
                        <Input
                          value={badge.issuer}
                          onChange={(e) => updateCredlyBadge(badge.id, 'issuer', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Badge Image URL</Label>
                        <Input
                          value={badge.imageUrl}
                          onChange={(e) => updateCredlyBadge(badge.id, 'imageUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Credly URL</Label>
                        <Input
                          value={badge.credlyUrl}
                          onChange={(e) => updateCredlyBadge(badge.id, 'credlyUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Earned Date</Label>
                        <Input
                          type="date"
                          value={badge.earnedDate}
                          onChange={(e) => updateCredlyBadge(badge.id, 'earnedDate', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Other Badges Section */}
            {activeSection === 'badges' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Other Badges & Achievements</h2>
                  <Button onClick={addOtherBadge} className="gap-2 bg-gray-900 hover:bg-gray-800">
                    <Plus className="w-4 h-4" />
                    Add Badge
                  </Button>
                </div>
                {portfolioData.otherBadges.map((badge) => (
                  <Card key={badge.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Edit Badge</CardTitle>
                        <Button
                          onClick={() => deleteOtherBadge(badge.id)}
                          variant="destructive"
                          size="sm"
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Badge Name</Label>
                        <Input
                          value={badge.name}
                          onChange={(e) => updateOtherBadge(badge.id, 'name', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Issuer</Label>
                        <Input
                          value={badge.issuer}
                          onChange={(e) => updateOtherBadge(badge.id, 'issuer', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Badge Image URL</Label>
                        <Input
                          value={badge.imageUrl}
                          onChange={(e) => updateOtherBadge(badge.id, 'imageUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Badge URL</Label>
                        <Input
                          value={badge.badgeUrl}
                          onChange={(e) => updateOtherBadge(badge.id, 'badgeUrl', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Earned Date</Label>
                        <Input
                          type="date"
                          value={badge.earnedDate}
                          onChange={(e) => updateOtherBadge(badge.id, 'earnedDate', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Medium Posts Section */}
            {activeSection === 'blog' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Medium Articles</h2>
                  <Button onClick={addMediumPost} className="gap-2 bg-gray-900 hover:bg-gray-800">
                    <Plus className="w-4 h-4" />
                    Add Article
                  </Button>
                </div>
                {portfolioData.mediumPosts.map((post) => (
                  <Card key={post.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>Edit Article</CardTitle>
                        <Button
                          onClick={() => deleteMediumPost(post.id)}
                          variant="destructive"
                          size="sm"
                          className="gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <Label>Title</Label>
                        <Input
                          value={post.title}
                          onChange={(e) => updateMediumPost(post.id, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Excerpt</Label>
                        <Textarea
                          rows={3}
                          value={post.excerpt}
                          onChange={(e) => updateMediumPost(post.id, 'excerpt', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Article URL</Label>
                        <Input
                          value={post.url}
                          onChange={(e) => updateMediumPost(post.id, 'url', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Published Date</Label>
                        <Input
                          type="date"
                          value={post.publishedDate}
                          onChange={(e) => updateMediumPost(post.id, 'publishedDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Read Time</Label>
                        <Input
                          placeholder="e.g., 5 min read"
                          value={post.readTime}
                          onChange={(e) => updateMediumPost(post.id, 'readTime', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label>Image URL</Label>
                        <Input
                          value={post.image}
                          onChange={(e) => updateMediumPost(post.id, 'image', e.target.value)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;