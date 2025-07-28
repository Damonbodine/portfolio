const Resume = () => {
  const handleDownloadPDF = () => {
    // This would be replaced with actual PDF download functionality
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Damon_Bodine_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                <span className="gradient-text">Resume</span>
              </h1>
              <p className="text-xl text-gray-600">
                Software Engineer with expertise in fintech and trading systems
              </p>
            </div>
            <button
              onClick={handleDownloadPDF}
              className="btn-primary flex items-center gap-2 flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            {/* Personal Info */}
            <div className="text-center mb-12 pb-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Damon Bodine</h2>
              <p className="text-lg text-gray-600 mb-4">Senior Software Engineer</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  damon.bodine@example.com
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.83 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                Experienced Software Engineer with 5+ years of expertise in building scalable fintech applications 
                and high-performance trading systems. Proven track record of delivering mission-critical software 
                solutions at Gauntlet.ai, including real-time risk management platforms, automated trading engines, 
                and market data pipelines. Strong background in full-stack development, system architecture, and 
                quantitative finance.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Senior Software Engineer</h4>
                      <p className="text-blue-600 font-medium">Gauntlet.ai</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>San Francisco, CA</p>
                      <p>2021 - Present</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Built real-time risk management dashboard processing 10M+ data points daily</li>
                    <li>• Developed automated trading engine with microsecond latency requirements</li>
                    <li>• Architected scalable market data pipeline handling 1M+ messages per second</li>
                    <li>• Led development of portfolio optimization tool using machine learning algorithms</li>
                    <li>• Implemented compliance monitoring system reducing regulatory review time by 80%</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Full Stack Developer</h4>
                      <p className="text-blue-600 font-medium">TechCorp Solutions</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>San Francisco, CA</p>
                      <p>2019 - 2021</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Developed and maintained web applications serving 100K+ users</li>
                    <li>• Built RESTful APIs and microservices using Node.js and Python</li>
                    <li>• Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>• Collaborated with design team to create responsive user interfaces</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Software Developer</h4>
                      <p className="text-blue-600 font-medium">StartupXYZ</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>San Francisco, CA</p>
                      <p>2018 - 2019</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Built MVP web application using React and Node.js</li>
                    <li>• Implemented user authentication and authorization systems</li>
                    <li>• Optimized database queries improving application performance by 40%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TypeScript', 'Python', 'JavaScript', 'React', 'Node.js', 'Java', 'C++'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Databases & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'AWS', 'Git'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Specialized</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Trading Systems', 'Risk Management', 'Data Pipelines', 'Machine Learning', 'Microservices'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              
              <div className="border-l-4 border-blue-200 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science in Computer Science</h4>
                    <p className="text-blue-600 font-medium">University of California, Berkeley</p>
                  </div>
                  <div className="text-sm text-gray-600 sm:text-right">
                    <p>Berkeley, CA</p>
                    <p>2014 - 2018</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-2">
                  Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, 
                  Machine Learning, Financial Engineering
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">AWS Certified Solutions Architect</p>
                    <p className="text-sm text-gray-600">2023</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Certified Kubernetes Administrator</p>
                    <p className="text-sm text-gray-600">2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;