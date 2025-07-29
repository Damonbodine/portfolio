import { useState } from 'react';
import type { Project } from '../types';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'WordWise AI',
      description: 'Make Writing Fun Again - Built in just one week',
      longDescription: 'Built in one week with the mission to make writing fun again. This comprehensive writing assistant platform features voice coaching agents and voice editing capabilities. The application uses WebSockets for real-time communication, voice agents for interactive coaching, and low-latency inference tools for instant AI-powered suggestions. Includes advanced grammar checking, style recommendations, and personalized writing improvement plans with real-time voice feedback.',
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'WebSockets', 'Voice Agents', 'Low Latency Inference'],
      imageUrl: '/wordwiseai.png',
      videoEmbed: '<div style="position: relative; padding-bottom: 65.01809408926417%; height: 0;"><iframe src="https://www.loom.com/embed/38d51d85897f44ddb5009bb2e3961e6f?sid=5d5d2232-f49d-49a2-9e2d-b8a2ac09365b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      demoUrl: 'https://x.com/damonbodine/status/1936933655072653771',
      featured: true
    },
    {
      id: '2',
      title: 'Legacy Project Week',
      description: 'Built with the intention that AI first engineers can add real business value to legacy code bases - Built in just one week',
      longDescription: 'Built in one week with the intention that AI-first engineers can add real business value to legacy codebases. Reinvented SuiteCRM, a legacy enterprise codebase with over 2 million lines of code, by building modern AI features specifically designed for small attorney offices. The project involved modernizing existing functionality while adding intelligent automation, document processing, and case management features tailored to legal practices.',
      technologies: ['PHP', 'JavaScript', 'AI Integration', 'Legacy System Modernization', 'Legal Tech'],
      imageUrl: '/suitecrm.png',
      videoEmbed: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/DjMU2fSUWDM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      demoUrl: 'https://x.com/damonbodine/status/1949589504580522437',
      featured: true
    },
    {
      id: '3',
      title: 'LifeOps',
      description: 'Built on the idea that a person needs a healthy social life to be their best at work - Built in just one week',
      longDescription: 'Built in one week on the foundational idea that a person needs a healthy social life to be their best at work. This comprehensive personal life management system helps users build their ideal day through advanced workflow automation. Built using Langraph workflows and Langchain workflows for intelligent agent orchestration, integrated with Google Calendar. Features include intelligent friend recommendation based on communication patterns, automated social scheduling based on availability and weekly goals, and comprehensive life optimization tools powered by AI workflow engines.',
      technologies: ['Express', 'Electron', 'Google Calendar API', 'Workflow Automation', 'Langraph Workflows', 'Langchain Workflows'],
      imageUrl: '/lifeops.png',
      videoEmbed: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/-xLXYTY4VxQ?si=tSp_4cTJr8bUXZ1N" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      demoUrl: 'https://x.com/damonbodine/status/1940913440601919847',
      featured: true
    },
    {
      id: '4',
      title: 'SnapConnect',
      description: 'Community based fitness platform in the AI era - Built in just one week',
      longDescription: 'Built in one week as a community-based fitness platform for the AI era. This comprehensive mobile application combines social networking features with advanced computer vision and AR technologies. Features include voice agents for fitness coaching, real-time messaging capabilities, AR-powered social interactions, and seamless integration with the Apple Developer Ecosystem. The app provides real-time workout guidance, social sharing capabilities, and a robust social network for connecting with friends and fitness enthusiasts.',
      technologies: ['React Native', 'Computer Vision', 'Voice Agents', 'AR Technologies', 'Real-time Messaging', 'Apple Developer Ecosystem'],
      imageUrl: '/snapconnect.png',
      videoEmbed: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/d1syaTicwgc?si=PoIfNoNyoDUsdQ5u" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      featured: false
    },
    {
      id: '5',
      title: 'Budget Royale',
      description: 'Built with the intention that children should learn financial literacy early - Built in just one week',
      longDescription: 'Built in one week with the intention that children should learn financial literacy early. This engaging financial literacy game teaches students fundamental financial concepts through interactive 3D gameplay and real-time stock trading simulation. Built with Phaser 3D for immersive game environments and integrated with live Stock Trading APIs for authentic market data. Features include 3D game environments, simulated trading experiences with real market data, educational articles, and gamified learning modules that make financial education accessible and fun.',
      technologies: ['Phaser 3D', 'React', 'Next.js', 'Stock Trading APIs', 'Educational Content Management'],
      imageUrl: '/budgetroyale.png',
      videoEmbed: '<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.youtube.com/embed/hPiooiXfuh4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>',
      demoUrl: 'https://x.com/damonbodine/status/1947099366809907360',
      featured: false
    },
    {
      id: '6',
      title: 'Renters Mentor',
      description: 'Built to help tenants more effectively negotiate their rent - Built in just one week',
      longDescription: 'Built in one week to help tenants more effectively negotiate their rent. This specialized financial literacy application is designed to help renters negotiate with their landlords effectively. Features include an intelligent chatbot for guidance, a comprehensive vector database that analyzes rental patterns across the United States based on user location, and a voice coaching agent that helps users practice and simulate negotiation conversations.',
      technologies: ['React', 'Vector Database', 'Chatbot AI', 'Voice Coaching', 'Rental Market Analytics'],
      imageUrl: '/rentersmentor.png',
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
                  <div className="aspect-video overflow-hidden">
                    {project.videoEmbed ? (
                      <div dangerouslySetInnerHTML={{ __html: project.videoEmbed }} />
                    ) : project.gifUrl ? (
                      <img 
                        src={project.gifUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}
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
                <div className="aspect-video overflow-hidden">
                  {project.videoEmbed ? (
                    <div dangerouslySetInnerHTML={{ __html: project.videoEmbed }} />
                  ) : project.gifUrl ? (
                    <img 
                      src={project.gifUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
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
              
              <div className="aspect-video overflow-hidden rounded-lg mb-6">
                {selectedProject.videoEmbed ? (
                  <div dangerouslySetInnerHTML={{ __html: selectedProject.videoEmbed }} />
                ) : selectedProject.gifUrl ? (
                  <img 
                    src={selectedProject.gifUrl} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
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