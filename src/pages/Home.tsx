import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { VideoRecording } from '../types';

const Home = () => {
  const [recording, setRecording] = useState<VideoRecording>({
    blob: null,
    url: null,
    isRecording: false
  });
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: BlobPart[] = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setRecording(prev => ({ ...prev, blob, url, isRecording: false }));
        stream.getTracks().forEach(track => track.stop());
      };
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      mediaRecorder.start();
      setRecording(prev => ({ ...prev, isRecording: true }));
    } catch (error) {
      console.error('Error starting recording:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording.isRecording) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="section-padding pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
                Hi, I'm{' '}
                <span className="gradient-text">
                  Damon Bodine
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Software Engineer passionate about building exceptional digital experiences. 
                I specialize in full-stack development and have contributed to innovative 
                projects at Gauntlet.ai.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects" className="btn-primary text-center">
                  View My Work
                </Link>
                <Link to="/contact" className="btn-secondary text-center">
                  Get In Touch
                </Link>
              </div>
            </div>
            
            {/* Video Recording Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Record a Personal Message
              </h3>
              
              {!recording.url ? (
                <div className="space-y-4">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full rounded-lg bg-gray-100"
                    style={{ display: recording.isRecording ? 'block' : 'none' }}
                  />
                  
                  {!recording.isRecording && (
                    <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                          </svg>
                        </div>
                        <p className="text-gray-600">Click to start recording</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-center">
                    {!recording.isRecording ? (
                      <button
                        onClick={startRecording}
                        className="btn-primary flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="8"/>
                        </svg>
                        Start Recording
                      </button>
                    ) : (
                      <button
                        onClick={stopRecording}
                        className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="6" width="12" height="12"/>
                        </svg>
                        Stop Recording
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <video
                    src={recording.url}
                    controls
                    className="w-full rounded-lg"
                  />
                  <div className="flex gap-2">
                    <a
                      href={recording.url}
                      download="personal-message.webm"
                      className="btn-primary flex-1 text-center"
                    >
                      Download
                    </a>
                    <button
                      onClick={() => setRecording({ blob: null, url: null, isRecording: false })}
                      className="btn-secondary flex-1"
                    >
                      Record Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-gray-600">
              I bring ideas to life through code, focusing on user experience and technical excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Full-Stack Development</h3>
              <p className="text-gray-600">
                Building scalable applications from frontend to backend with modern technologies.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Creating intuitive and beautiful user interfaces that provide excellent user experiences.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Optimization</h3>
              <p className="text-gray-600">
                Ensuring applications run fast and efficiently with optimized code and architecture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;