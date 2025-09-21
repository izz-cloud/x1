'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const projects = [
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    category: 'UI/UX Design',
    description: 'Modern analytics dashboard for e-commerce platforms with intuitive data visualization.',
    image: 'https://images.pexels.com/photos/7689720/pexels-photo-7689720.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UI Design', 'Data Viz', 'Dashboard'],
    year: '2024',
  },
  {
    id: 'brand-identity-studio',
    title: 'Creative Studio Branding',
    category: 'Branding',
    description: 'Complete brand identity system for a creative studio including logo, colors, and typography.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Logo Design', 'Brand Identity', 'Visual System'],
    year: '2024',
  },
  {
    id: 'mobile-app-redesign',
    title: 'Fitness App Redesign',
    category: 'Mobile Design',
    description: 'Complete UX overhaul of a fitness tracking app focusing on user engagement and retention.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile UI', 'UX Research', 'Prototyping'],
    year: '2024',
  },
  {
    id: '3d-product-visualization',
    title: '3D Product Visualization',
    category: '3D Design',
    description: 'Interactive 3D product showcase for luxury watch brand with photorealistic rendering.',
    image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['3D Modeling', 'Product Viz', 'WebGL'],
    year: '2023',
  },
  {
    id: 'fintech-website',
    title: 'FinTech Website Design',
    category: 'Web Design',
    description: 'Modern and trustworthy website design for a financial technology startup.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Design', 'FinTech', 'Responsive'],
    year: '2023',
  },
  {
    id: 'restaurant-branding',
    title: 'Restaurant Brand Identity',
    category: 'Branding',
    description: 'Comprehensive branding package for upscale restaurant including menu design and signage.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Brand Design', 'Print Design', 'Hospitality'],
    year: '2023',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Platform Dashboard',
    category: 'UI/UX Design',
    description: 'Complex dashboard interface for B2B SaaS platform with advanced data management.',
    image: 'https://images.pexels.com/photos/7689659/pexels-photo-7689659.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['SaaS', 'B2B', 'Complex UI'],
    year: '2023',
  },
  {
    id: 'ar-experience',
    title: 'AR Shopping Experience',
    category: '3D Design',
    description: 'Augmented reality shopping experience for furniture retailer.',
    image: 'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AR', '3D', 'E-commerce'],
    year: '2023',
  },
];

const categories = ['All', 'UI/UX Design', 'Branding', '3D Design', 'Web Design'];

export default function WorkPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900">
            My Work
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects spanning UI/UX design, branding, 3D visualization, and digital experiences.
            Each project represents a unique challenge and creative solution.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={`${
                category === 'All'
                  ? 'gradient-purple-blue text-white'
                  : 'border-purple-200 text-gray-700 hover:bg-purple-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/work/${project.id}`}>
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-purple-600 font-medium">{project.category}</p>
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}