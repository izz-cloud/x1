'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Alex delivered exceptional work on our dashboard redesign. The attention to detail and user experience focus was outstanding. Our user engagement increased by 40% after launch.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Working with Alex was a game-changer for our brand. The visual identity they created perfectly captured our vision and helped us stand out in a crowded market.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Marketing Director',
    company: 'Creative Agency',
    content: 'Alex brings creativity and technical expertise together beautifully. The 3D visualizations for our campaign exceeded expectations and drove incredible engagement.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by innovative companies and startups worldwide.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="space-y-2">
                    <div className="mx-auto w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-purple-600">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full p-2 hover:bg-purple-50 border-purple-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full p-2 hover:bg-purple-50 border-purple-200"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}