'use client';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Mock project data - in a real app, this would come from a CMS or database
const projectData: { [key: string]: any } = {
  'ecommerce-dashboard': {
    title: 'E-commerce Dashboard',
    category: 'UI/UX Design',
    year: '2024',
    client: 'TechCorp Solutions',
    duration: '3 months',
    heroImage: 'https://images.pexels.com/photos/7689720/pexels-photo-7689720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A comprehensive redesign of an e-commerce analytics dashboard that increased user engagement by 40% and reduced task completion time by 60%.',
    challenge: 'The existing dashboard was cluttered and difficult to navigate, causing user frustration and decreased productivity. Key metrics were buried in complex menus, and the visual hierarchy was poor.',
    solution: 'I redesigned the interface with a focus on data visualization, clear information architecture, and intuitive navigation. The new design prioritizes the most important metrics and provides contextual insights.',
    tags: ['UI Design', 'Data Visualization', 'Dashboard', 'Analytics'],
    colors: ['#6D28D9', '#0EA5A4', '#EC4899', '#F59E0B'],
    typography: {
      primary: 'Inter',
      secondary: 'JetBrains Mono'
    },
    gallery: [
      'https://images.pexels.com/photos/7689659/pexels-photo-7689659.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/590041/pexels-photo-590041.jpg?auto=compress&cs=tinysrgb&w=800',
    ]
  },
  'brand-identity-studio': {
    title: 'Creative Studio Branding',
    category: 'Branding',
    year: '2024',
    client: 'Pixel Perfect Studio',
    duration: '2 months',
    heroImage: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Complete brand identity system for a creative studio, including logo design, color palette, typography, and brand guidelines.',
    challenge: 'The studio needed a fresh, modern identity that would appeal to tech startups and established companies while maintaining artistic credibility.',
    solution: 'Created a versatile brand system that balances creativity with professionalism. The logo adapts across different contexts while maintaining brand recognition.',
    tags: ['Logo Design', 'Brand Identity', 'Visual System', 'Guidelines'],
    colors: ['#1F2937', '#EC4899', '#F59E0B', '#10B981'],
    typography: {
      primary: 'Playfair Display',
      secondary: 'Inter'
    },
    gallery: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=800',
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(projectData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/work">
            <Button>Back to Work</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/work">
            <Button variant="ghost" className="hover:bg-purple-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Work
            </Button>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-12"
        >
          <div className="space-y-4">
            <p className="text-purple-600 font-medium">{project.category}</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.section>

            {/* Solution */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                The Solution
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.section>

            {/* Gallery */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Project Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Color Palette */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Color Palette</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.colors.map((color: string, index: number) => (
                      <div key={index} className="space-y-2">
                        <div
                          className="w-full h-12 rounded-lg shadow-inner"
                          style={{ backgroundColor: color }}
                        />
                        <p className="text-sm font-mono text-gray-600">{color}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Typography</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Primary Font</p>
                      <p className="font-semibold text-lg">{project.typography.primary}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Secondary Font</p>
                      <p className="font-semibold text-lg">{project.typography.secondary}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Next Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 pt-12 border-t border-gray-200"
        >
          <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
            Interested in working together?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="gradient-purple-blue">
                Start a Project
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="outline">
                View More Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}