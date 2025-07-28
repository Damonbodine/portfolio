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
                AI Engineer driven to push the world forward
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
              <p className="text-lg text-gray-600 mb-4">AI Engineer driven to push the world forward</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (347) 581-2058
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  damonbodine@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.83 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Austin, Texas
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
                Proven leader with 19+ years of experience in high-stakes industries, including real estate, 
                financial services, software development, and event production. Deeply focused on delivering 
                consistent results through strategic business development, customer acquisition, and team leadership. 
                Passionate about driving innovation in the tech industry by combining my sales expertise with a 
                solid understanding of technology.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">AI Engineer</h4>
                      <p className="text-blue-600 font-medium">Gauntlet AI</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Austin, Texas</p>
                      <p>June 2025 - Present</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• AI first engineer building applications across web, mobile, and desktop</li>
                    <li>• Participating in fully immersive 80-100 week program reskilling challengers for an AI first future</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Sales Executive</h4>
                      <p className="text-blue-600 font-medium">The Corcoran Group</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>New York City</p>
                      <p>August 2017 - Present</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Closed $75M in revenue across 150+ mid-market deals (avg. $1.2M), consistently exceeding quotas through strategic qualification and high-stakes deal execution</li>
                    <li>• Managed full sales cycles for 150+ clients, driving lead generation, prospecting, and closings with CRM tools to accelerate conversions</li>
                    <li>• Coached junior reps to improve close rates by 20%, delivering targeted training on qualification and pipeline management to elevate team performance</li>
                    <li>• Spearheaded outbound prospecting (cold calls, creative outreach), growing pipeline 25% YoY and capturing market share in high-competition regions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Account Executive</h4>
                      <p className="text-blue-600 font-medium">RealWork</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Austin, Texas</p>
                      <p>March 2025 - May 2025</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Sales Executive</h4>
                      <p className="text-blue-600 font-medium">Compass</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>New York City</p>
                      <p>March 2016 - July 2017</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Drove $45M in mid-market real estate revenue as a key Closer on a top-performing team, targeting high-value clients across Brooklyn, Manhattan, and Queens</li>
                    <li>• Designed data-driven sales training to identify and engage decision-makers, boosting team pipeline efficiency by 15%</li>
                    <li>• Contributed to $45M in team revenue, exceeding quotas through strategic prospecting and deal execution in a competitive market</li>
                    <li>• Mentored 15 agents in outbound sales tactics—cold prospecting, presentations, and follow-ups—lifting team close rates by 10%</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Sales Executive</h4>
                      <p className="text-blue-600 font-medium">Douglas Elliman Real Estate</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>New York</p>
                      <p>March 2014 - March 2016</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Built a pipeline of 500+ decision-makers through consultative sales, driving revenue growth in a diverse, competitive market</li>
                    <li>• Earned Rookie of the Year by surpassing sales targets in first year, demonstrating rapid quota attainment</li>
                    <li>• Leveraged data analytics to identify and engage high-potential leads, accelerating pipeline growth by 20%</li>
                    <li>• Launched a profitable sales operation from scratch, growing revenue through cold prospecting and self-sourced leads</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Vice President of Business Development</h4>
                      <p className="text-blue-600 font-medium">After Dark Presents</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Buffalo, New York</p>
                      <p>August 2008 - January 2014</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Fully produced over 150 live events per year in Buffalo/Rochester/Syracuse markets</li>
                    <li>• Managed teams of venue staff, contract workers, and marketing teams for all events</li>
                    <li>• Created and implemented marketing plans and managed ticket sales funnel end to end</li>
                    <li>• Tripled company revenue during tenure and hired, managed, coached, and evaluated 8 full time staff members</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Founder</h4>
                      <p className="text-blue-600 font-medium">Center Stage Concerts</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Buffalo, New York</p>
                      <p>February 2002 - August 2008</p>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2 mt-4">
                    <li>• Launched and operated LLC focusing on concert production</li>
                    <li>• Solicited and maintained exclusive rights contracts with concert venues in multiple cities</li>
                    <li>• Built and executed marketing plans and sponsorship proposals for each event</li>
                    <li>• Managed company finances, built a successful company profile, and fully executed company business plan</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Skills</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">AI & Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'Retrieval-Augmented Generation (RAG)', 'Firebase'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Sales & Business</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Strategic Sales', 'CRM Management', 'Lead Generation', 'Team Leadership'].map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Leadership</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Team Coaching', 'Business Development', 'Project Management', 'Event Production'].map(skill => (
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
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Bachelor of Science - Computer Science</h4>
                      <p className="text-blue-600 font-medium">University of the People</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Current Student</p>
                      <p>January 2024 - December 2025</p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-200 pl-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Business Administration and Management</h4>
                      <p className="text-blue-600 font-medium">University at Buffalo</p>
                    </div>
                    <div className="text-sm text-gray-600 sm:text-right">
                      <p>Buffalo, NY</p>
                      <p>2001 - 2004</p>
                    </div>
                  </div>
                </div>
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
                    <p className="font-medium text-gray-900">CS50: Introduction To Computer Science</p>
                    <p className="text-sm text-gray-600">Harvard University</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">CS50: Introduction to Programming Using Python</p>
                    <p className="text-sm text-gray-600">Harvard University</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Meta Social Media Marketing Specialization</p>
                    <p className="text-sm text-gray-600">Meta</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Google Project Management Specialization</p>
                    <p className="text-sm text-gray-600">Google</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Introduction to Relational Databases (CS1011)</p>
                    <p className="text-sm text-gray-600">Academic</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Introduction to MEDDIC</p>
                    <p className="text-sm text-gray-600">MEDDIC Academy</p>
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