'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-teal-50">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-600 rounded-2xl animate-float opacity-80"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-teal-500 rounded-full animate-float-reverse opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-magenta-purple rounded-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-400 rotate-45 animate-float-reverse opacity-50"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-teal-400 rounded-full animate-pulse-glow opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-pink-500 rounded-2xl animate-float opacity-30"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-purple-600 font-medium"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
              >
                Alex Rivera
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-gray-700"
              >
                a{' '}
                <span className="gradient-purple-blue bg-clip-text text-transparent font-bold">
                  Visual Designer
                </span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-lg leading-relaxed"
            >
              I craft innovative digital experiences through UI/UX design, branding, and 3D visualization. 
              Let's bring your ideas to life with creativity and precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/work">
                <Button size="lg" className="gradient-purple-blue hover:opacity-90 transition-opacity group">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main central element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 gradient-purple-blue rounded-3xl animate-float"></div>
              
              {/* Orbiting elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-teal-500 rounded-full animate-float-reverse"></div>
              <div className="absolute top-8 right-8 w-12 h-12 bg-pink-500 rounded-2xl animate-float"></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-purple-400 rotate-45 animate-pulse-glow"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 gradient-magenta-purple rounded-2xl animate-float-reverse"></div>
              
              {/* Abstract shapes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.path
                  d="M200,100 Q300,200 200,300 Q100,200 200,100"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6D28D9" />
                    <stop offset="100%" stopColor="#0EA5A4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}