import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Github, Linkedin, Mail, ExternalLink, Edit, BookOpen } from 'lucide-react';
import { portfolioData } from '../mock';

const Home = () => {
  const navigate = useNavigate();
  const { profile, projects, credlyBadges, otherBadges, mediumPosts } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
            <Button 
              onClick={() => navigate('/dashboard')} 
              variant="outline"
              className="gap-2"
            >
              <Edit className="w-4 h-4" />
              Edit Portfolio
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">{profile.name}</h2>
            <p className="text-2xl text-gray-600 mb-6">{profile.title}</p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{profile.bio}</p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={profile.medium} target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  Medium
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a href={`mailto:${profile.email}`}>
                  <Mail className="w-5 h-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="gap-2 flex-1 bg-gray-900 hover:bg-gray-800" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credly Badges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {credlyBadges.map((badge) => (
              <Card key={badge.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <a href={badge.credlyUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={badge.imageUrl} 
                      alt={badge.name}
                      className="w-32 h-32 mx-auto mb-4 object-contain"
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">{badge.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{badge.issuer}</p>
                    <p className="text-xs text-gray-500">Earned: {badge.earnedDate}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Badges Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Additional Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {otherBadges.map((badge) => (
              <Card key={badge.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <a href={badge.badgeUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={badge.imageUrl} 
                      alt={badge.name}
                      className="w-32 h-32 mx-auto mb-4 object-cover rounded-lg"
                    />
                    <h3 className="font-semibold text-gray-900 mb-2">{badge.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{badge.issuer}</p>
                    <p className="text-xs text-gray-500">Earned: {badge.earnedDate}</p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Medium Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediumPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-gray-900">{post.title}</CardTitle>
                  <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{post.publishedDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button className="w-full gap-2 bg-gray-900 hover:bg-gray-800" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300 mb-4">© 2024 {profile.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <BookOpen className="w-6 h-6" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;