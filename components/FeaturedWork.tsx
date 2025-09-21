'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const featuredProjects = [
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Dashboard',
    category: 'UI/UX Design',
    description: 'Modern analytics dashboard for e-commerce platforms with intuitive data visualization.',
    image: 'https://images.pexels.com/photos/7689720/pexels-photo-7689720.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['UI Design', 'Data Viz', 'Dashboard'],
  },
  {
    id: 'brand-identity-studio',
    title: 'Creative Studio Branding',
    category: 'Branding',
    description: 'Complete brand identity system for a creative studio including logo, colors, and typography.',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Logo Design', 'Brand Identity', 'Visual System'],
  },
  {
    id: 'mobile-app-redesign',
    title: 'Fitness App Redesign',
    category: 'Mobile Design',
    description: 'Complete UX overhaul of a fitness tracking app focusing on user engagement and retention.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Mobile UI', 'UX Research', 'Prototyping'],
  },
];

export default function FeaturedWork() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent projects spanning UI/UX design, branding, and digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    <p className="text-sm text-purple-600 font-medium">{project.category}</p>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/work">
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 group">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}