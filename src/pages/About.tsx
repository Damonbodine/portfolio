const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate software engineer who loves building systems that solve real-world problems. 
                My journey in tech has been driven by curiosity and a desire to create meaningful impact 
                through code.
              </p>
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="text-2xl font-bold text-blue-600">5+</span>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">50+</span>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-blue-600">7</span>
                  <p className="text-gray-600">Gauntlet.ai Projects</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-blue-600 font-medium">Damon Bodine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over the years, I've developed expertise in various technologies and domains, 
              with a special focus on fintech and high-performance systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-600 mb-4">
                Creating responsive and interactive user interfaces with modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Backend Development</h3>
              <p className="text-gray-600 mb-4">
                Building scalable APIs and microservices with robust architecture and performance optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'Redis'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DevOps & Cloud</h3>
              <p className="text-gray-600 mb-4">
                Implementing CI/CD pipelines and managing cloud infrastructure for reliable deployments.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Engineering */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Engineering</h3>
              <p className="text-gray-600 mb-4">
                Designing and implementing data pipelines for real-time processing and analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Apache Kafka', 'Spark', 'TimescaleDB', 'Pandas'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Trading Systems */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trading Systems</h3>
              <p className="text-gray-600 mb-4">
                Developing high-frequency trading systems and risk management platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'Risk Analytics', 'Quantitative Finance'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-red-100 text-red-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Machine Learning */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Applying machine learning algorithms to solve complex financial and business problems.
              </p>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'NumPy', 'Scikit-learn', 'Jupyter'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Journey
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-6 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
                <p className="text-gray-700 leading-relaxed">
                  My fascination with technology started in college at UC Berkeley, where I studied Computer Science. 
                  I was particularly drawn to the intersection of technology and finance, which led me to focus on 
                  quantitative methods and algorithmic trading.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-6 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Early Career</h3>
                <p className="text-gray-700 leading-relaxed">
                  After graduating, I started my career in various startups and tech companies, building web applications 
                  and learning the fundamentals of scalable system design. These experiences taught me the importance of 
                  user-centered design and robust architecture.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-6 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Gauntlet.ai</h3>
                <p className="text-gray-700 leading-relaxed">
                  Joining Gauntlet.ai has been a transformative experience. Here, I've had the opportunity to work on 
                  cutting-edge fintech projects, from real-time risk management systems to high-frequency trading engines. 
                  The complexity and scale of these systems have pushed me to grow as both an engineer and a problem solver.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-6 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Looking Forward</h3>
                <p className="text-gray-700 leading-relaxed">
                  I'm passionate about continuing to push the boundaries of what's possible in fintech and beyond. 
                  I'm always eager to take on new challenges, learn emerging technologies, and contribute to projects 
                  that have real-world impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Hobbies */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Beyond Code
            </h2>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me pursuing these interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Reading</h3>
              <p className="text-gray-600">
                I enjoy reading about technology trends, financial markets, and science fiction novels.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Travel</h3>
              <p className="text-gray-600">
                Exploring different cultures and places helps me gain new perspectives and inspiration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Music</h3>
              <p className="text-gray-600">
                I play guitar and enjoy exploring different genres, from jazz to electronic music.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;