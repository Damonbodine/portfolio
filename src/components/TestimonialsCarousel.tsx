import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Damon shepherded me through a long, difficult, expensive process that would have been impossible without him. His attitude, responsiveness, expertise and insight were exemplary. I would not consider working with another broker in the future.",
      author: "Nick Jarcho"
    },
    {
      id: 2,
      text: "Damon is incredibly knowledgeable and passionate about the real estate market. He is dependable and consistent across the board. No matter the time of day, he was always available to answer my questions on the spot. If you're looking for a hard working, honest and reliable agent, he's your man.",
      author: "Stephanie Forbes"
    },
    {
      id: 3,
      text: "Damon is the best. He sold our condo, got us the price we wanted, and even negotiated a post closing occupancy that helped us transition, all while being a super nice and super honest guy. Never an unanswered email, never an unreturned phone call.",
      author: "Nicole Covino"
    },
    {
      id: 4,
      text: "Damon is a real estate professional. He couldn't be further away from the shark image; he is kind and very down to earth. After ~6 months of looking I had a set of keys in my hand for the perfect property! I couldn't recommend him enough.",
      author: "Thomas Barker"
    },
    {
      id: 5,
      text: "Damon is the best real estate agent I've ever worked with and in my opinion the best one out. In NYC it is rare to find someone who listens, is honest, and truly cares about you and your home. He really cares about his clients and wants what is best for them.",
      author: "Amanda Gallo"
    },
    {
      id: 6,
      text: "Within two days of contacting Damon he lined up several apartments for me to see. He was knowledgeable and helpful but never pushy or rushed. Definitely goes above and beyond. Would recommend him without hesitation.",
      author: "Suzanne Hackett"
    },
    {
      id: 7,
      text: "We had a really great experience working with Damon. He's knowledgeable and patient, and his recommendations for an attorney and lending program that we qualified for worked out very well. In short, we strongly recommend him.",
      author: "Chris Dierks"
    },
    {
      id: 8,
      text: "Damon was the third agent we worked with and three times was definitely a charm. Damon listened, he cared, and he treated us with respect. He is very experienced and dedicated to the people he works with. You can't have a better agent.",
      author: "Kurt and Joyce"
    },
    {
      id: 9,
      text: "Damon negotiated costs effectively on my behalf, readily supplied relevant knowledge and walked me through a difficult and novel process of purchasing my first coop. Pleasant, calm and genial throughout, I was happy he was on my team.",
      author: "Myles Bender"
    },
    {
      id: 10,
      text: "Damon was excellent through the entire purchase process. He ensured I submitted a competitive and reasonable offer and helped put together a complete application. I had complete confidence in his efforts in each step of the process.",
      author: "Kyle Turner"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Testimonials from satisfied clients across my career
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-start mb-6">
              <svg className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
              </svg>
              <div className="flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                    {testimonials[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-600 text-sm">Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;