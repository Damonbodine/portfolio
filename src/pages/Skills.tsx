import { useState } from 'react';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'database' | 'tools' | 'leadership' | 'business';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  projects?: string[];
  experience?: string;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const skills: Skill[] = [
    // Frontend Technologies
    { name: 'React.js', category: 'frontend', level: 'expert', projects: ['WordWise AI'], experience: 'AI Engineer at Gauntlet AI' },
    { name: 'Next.js', category: 'frontend', level: 'expert', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'JavaScript', category: 'frontend', level: 'expert', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'HTML', category: 'frontend', level: 'expert' },
    { name: 'Cascading Style Sheets (CSS)', category: 'frontend', level: 'expert' },
    { name: 'Vercel', category: 'frontend', level: 'advanced', projects: ['WordWise AI'] },

    // Backend Technologies
    { name: 'Node.js', category: 'backend', level: 'expert', projects: ['Budget Royale'], experience: 'AI Engineer at Gauntlet AI' },
    { name: 'Python (Programming Language)', category: 'backend', level: 'expert', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'C (Programming Language)', category: 'backend', level: 'intermediate' },
    { name: 'PHP', category: 'backend', level: 'advanced' },
    { name: 'SQL', category: 'database', level: 'intermediate' },

    // Mobile Development
    { name: 'React Native', category: 'mobile', level: 'expert', projects: ['SnapConnect'] },
    { name: 'Expo go', category: 'mobile', level: 'advanced', projects: ['SnapConnect'] },
    { name: 'Xcode', category: 'mobile', level: 'intermediate', experience: 'AI Engineer at Gauntlet AI' },

    // AI & Machine Learning
    { name: 'Artificial Intelligence (AI)', category: 'ai', level: 'expert', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'LangChain', category: 'ai', level: 'expert', projects: ['LifeOps'] },
    { name: 'Retrieval-Augmented Generation (RAG)', category: 'ai', level: 'expert', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'Computer Vision', category: 'ai', level: 'advanced', projects: ['SnapConnect'], experience: 'AI Engineer at Gauntlet AI' },
    { name: 'Prompt Engineering', category: 'ai', level: 'expert' },
    { name: 'ChatGPT', category: 'ai', level: 'expert' },

    // Cloud & Infrastructure
    { name: 'Firebase', category: 'database', level: 'advanced', experience: 'AI Engineer at Gauntlet AI' },
    { name: 'Google Cloud Platform (GCP)', category: 'tools', level: 'advanced', projects: ['LifeOps'] },

    // Game Development
    { name: 'Phaser', category: 'frontend', level: 'advanced', projects: ['Budget Royale'] },

    // Project Management Tools
    { name: 'Jira', category: 'tools', level: 'intermediate' },
    { name: 'Asana', category: 'tools', level: 'intermediate' },

    // Leadership & Business Skills
    { name: 'Project Management', category: 'leadership', level: 'expert' },
    { name: 'Team Leadership', category: 'leadership', level: 'expert' },
    { name: 'Strategy', category: 'leadership', level: 'expert' },
    { name: 'Leadership', category: 'leadership', level: 'expert' },
    { name: 'Management', category: 'leadership', level: 'expert' },
    { name: 'Team Management', category: 'leadership', level: 'expert' },
    { name: 'Team Building', category: 'leadership', level: 'expert' },
    { name: 'Project Planning', category: 'leadership', level: 'expert' },
    { name: 'Program Management', category: 'leadership', level: 'expert' },

    // Business Skills
    { name: 'Business Strategy', category: 'business', level: 'expert' },
    { name: 'Business Development', category: 'business', level: 'expert' },
    { name: 'Sales Management', category: 'business', level: 'expert' },
    { name: 'Account Management', category: 'business', level: 'expert' },
    { name: 'Cold Calling', category: 'business', level: 'expert' },
    { name: 'Sales Pipeline Management', category: 'business', level: 'expert' },
    { name: 'CRM Software', category: 'business', level: 'expert' },
    { name: 'Sales Operations', category: 'business', level: 'expert' },
    { name: 'MEDDIC Sales Methodology', category: 'business', level: 'expert' },
    { name: 'Negotiation', category: 'business', level: 'expert' },
    { name: 'Contract Negotiation', category: 'business', level: 'expert' },
    { name: 'Communication', category: 'business', level: 'expert' },
    { name: 'Marketing Strategy', category: 'business', level: 'expert' },
    { name: 'Time Management', category: 'business', level: 'expert' },
    { name: 'Analytical Skills', category: 'business', level: 'expert' },
    { name: 'Direct Sales', category: 'business', level: 'expert' },
    { name: 'Social Media', category: 'business', level: 'expert' },
    { name: 'Marketing', category: 'business', level: 'expert' },
    { name: 'Customer Acquisition', category: 'business', level: 'expert' }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: '🔧' },
    { id: 'ai', name: 'AI & ML', icon: '🤖' },
    { id: 'frontend', name: 'Frontend', icon: '💻' },
    { id: 'backend', name: 'Backend', icon: '⚡' },
    { id: 'mobile', name: 'Mobile', icon: '📱' },
    { id: 'database', name: 'Database', icon: '🗄️' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
    { id: 'leadership', name: 'Leadership', icon: '👑' },
    { id: 'business', name: 'Business', icon: '💼' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'beginner': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and leadership capabilities 
            across AI engineering, full-stack development, and business operations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {selectedCategory === 'all' ? 'All Skills' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {skill.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
                
                {skill.experience && (
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Experience:</span> {skill.experience}
                  </p>
                )}
                
                {skill.projects && skill.projects.length > 0 && (
                  <div className="mb-2">
                    <p className="text-sm font-medium text-gray-700 mb-1">Projects:</p>
                    <div className="flex flex-wrap gap-1">
                      {skill.projects.map((project, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    skill.category === 'ai' ? 'bg-purple-100 text-purple-800' :
                    skill.category === 'frontend' ? 'bg-green-100 text-green-800' :
                    skill.category === 'backend' ? 'bg-orange-100 text-orange-800' :
                    skill.category === 'mobile' ? 'bg-pink-100 text-pink-800' :
                    skill.category === 'database' ? 'bg-indigo-100 text-indigo-800' :
                    skill.category === 'tools' ? 'bg-gray-100 text-gray-800' :
                    skill.category === 'leadership' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {categories.find(c => c.id === skill.category)?.icon} {categories.find(c => c.id === skill.category)?.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;