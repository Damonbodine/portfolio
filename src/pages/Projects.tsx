import { useState } from 'react';
import type { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'WordWise AI',
      description: 'A Grammarly clone with voice coaching, editing, and AI agents',
      longDescription: 'Built a comprehensive writing assistant platform featuring a voice coaching agent and voice editing agent. The application helps users improve their writing through AI-powered suggestions, real-time voice feedback, and interactive coaching sessions. Includes advanced grammar checking, style recommendations, and personalized writing improvement plans.',
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'WebSockets'],
      imageUrl: '/api/placeholder/600/400',
      demoUrl: 'https://x.com/damonbodine/status/1936933655072653771',
      featured: true
    },
    {
      id: '2',
      title: 'SnapConnect',
      description: 'Mobile social network app with computer vision and fitness coaching',
      longDescription: 'Developed a comprehensive mobile application that combines social networking features similar to Snapchat with advanced computer vision technology. Features include a voice-powered fitness coach that provides real-time workout guidance, social sharing capabilities, and a robust social network for connecting with friends and fitness enthusiasts.',
      technologies: ['React Native', 'Computer Vision', 'Voice AI', 'Social Network APIs'],
      imageUrl: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: '3',
      title: 'LifeOps',
      description: 'Personal life operating system with workflow automation',
      longDescription: 'Created a comprehensive personal life management system that helps users build their ideal day through Wangchain workflows integrated with Google Calendar. Features include intelligent friend recommendation based on communication patterns, automated social scheduling based on availability and weekly goals, and comprehensive life optimization tools.',
      technologies: ['Express', 'Electron', 'Google Calendar API', 'Workflow Automation'],
      imageUrl: '/api/placeholder/600/400',
      demoUrl: 'https://x.com/damonbodine/status/1940913440601919847',
      featured: true
    },
    {
      id: '4',
      title: 'AgentPro',
      description: 'Real estate automation platform for agents',
      longDescription: 'Built a comprehensive real estate website designed to help agents save time through intelligent automation. Features include automated client onboarding workflows, AI-powered contract negotiation assistance, and automated inspection report analysis. The platform streamlines common real estate tasks and improves agent productivity.',
      technologies: ['React', 'Node.js', 'AI Automation', 'Document Processing'],
      imageUrl: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: '5',
      title: 'Budget Royale',
      description: 'Financial literacy game with mock trading and educational content',
      longDescription: 'Developed an engaging financial literacy game designed to teach students fundamental financial concepts through interactive gameplay and mock stock trading. Features include 3D game environments, simulated trading experiences, educational articles, and gamified learning modules that make financial education accessible and fun.',
      technologies: ['Phaser 3D', 'React', 'Next.js', 'Trading APIs', 'Educational Content Management'],
      imageUrl: '/api/placeholder/600/400',
      demoUrl: 'https://x.com/damonbodine/status/1947099366809907360',
      featured: false
    },
    {
      id: '6',
      title: 'Legacy Project Week',
      description: 'SuiteCRM reinvention with AI features for attorney offices',
      longDescription: 'Reinvented SuiteCRM, a legacy enterprise codebase with over 2 million lines of code, by building modern AI features specifically designed for small attorney offices. The project involved modernizing existing functionality while adding intelligent automation, document processing, and case management features tailored to legal practices.',
      technologies: ['PHP', 'JavaScript', 'AI Integration', 'Legacy System Modernization', 'Legal Tech'],
      imageUrl: '/api/placeholder/600/400',
      demoUrl: 'https://x.com/damonbodine/status/1949589504580522437',
      featured: false
    },
    {
      id: '7',
      title: 'Renters Mentor',
      description: 'Financial literacy app for rent negotiation with AI coaching',
      longDescription: 'Built a specialized financial literacy application designed to help renters negotiate with their landlords effectively. Features include an intelligent chatbot for guidance, a comprehensive vector database that analyzes rental patterns across the United States based on user location, and a voice coaching agent that helps users practice and simulate negotiation conversations.',
      technologies: ['React', 'Vector Database', 'Chatbot AI', 'Voice Coaching', 'Rental Market Analytics'],
      imageUrl: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  );

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of AI-powered applications I've built, showcasing expertise in 
            full-stack development, voice technology, computer vision, and intelligent automation.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            {allTechnologies.slice(0, 6).map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === tech
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {filter === 'all' && (
        <section className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.slice(0, 2).map(project => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <p className="text-blue-600 font-medium">Click to view details</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {filter === 'all' ? 'All Projects' : `Projects using ${filter}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m-14 0a2 2 0 002 2v2a2 2 0 01-2 2" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-blue-600 font-medium">{selectedProject.title}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Demo
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;