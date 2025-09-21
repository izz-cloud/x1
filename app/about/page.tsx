'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { name: 'UI/UX Design', level: 95 },
  { name: 'Branding', level: 90 },
  { name: '3D Modeling', level: 85 },
  { name: 'Prototyping', level: 92 },
  { name: 'Typography', level: 88 },
  { name: 'Motion Design', level: 80 },
];

const tools = [
  { name: 'Figma', icon: '🎨' },
  { name: 'Photoshop', icon: '🖼️' },
  { name: 'Illustrator', icon: '✏️' },
  { name: 'Blender', icon: '🎯' },
  { name: 'After Effects', icon: '🎬' },
  { name: 'Principle', icon: '⚡' },
];

const experience = [
  {
    year: '2022 - Present',
    title: 'Senior Visual Designer',
    company: 'Innovation Labs',
    description: 'Leading design for cutting-edge digital products, managing a team of 3 designers, and establishing design systems across multiple platforms.',
  },
  {
    year: '2020 - 2022',
    title: 'Product Designer',
    company: 'TechStart Inc.',
    description: 'Designed user experiences for SaaS platform serving 50k+ users. Increased user engagement by 40% through design improvements.',
  },
  {
    year: '2018 - 2020',
    title: 'UI/UX Designer',
    company: 'Creative Studio',
    description: 'Created brand identities and digital experiences for startups and established companies. Collaborated with development teams on implementation.',
  },
  {
    year: '2016 - 2018',
    title: 'Junior Designer',
    company: 'Design Agency',
    description: 'Started career focusing on web design and print materials. Developed foundational skills in user-centered design principles.',
  },
];

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate visual designer with 8+ years of experience creating innovative digital experiences 
            and memorable brand identities for companies worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Profile Image & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Profile Image */}
            <div className="relative mx-auto w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Alex Rivera - Visual Designer"
                fill
                className="object-cover"
              />
              {/* Floating elements around profile */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full animate-float opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-500 rounded-2xl animate-float-reverse opacity-70"></div>
            </div>

            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-purple-600">50+</p>
                    <p className="text-sm text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">8+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">25+</p>
                    <p className="text-sm text-gray-600">Happy Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">3</p>
                    <p className="text-sm text-gray-600">Design Awards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button size="lg" className="w-full gradient-purple-blue">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="w-full border-purple-600 text-purple-600 hover:bg-purple-50">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Bio */}
            <section>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hello! I'm Alex Rivera, a passionate visual designer with over 8 years of experience 
                  creating innovative digital experiences and memorable brand identities. My journey in 
                  design began with a fascination for how visual communication can solve complex problems 
                  and connect with people on an emotional level.
                </p>
                <p>
                  I specialize in UI/UX design, branding, and 3D visualization, with a deep understanding 
                  of user-centered design principles. Throughout my career, I've had the privilege of 
                  working with startups, Fortune 500 companies, and everything in between, helping them 
                  bring their visions to life through thoughtful design.
                </p>
                <p>
                  When I'm not designing, you can find me exploring the latest design trends, 
                  experimenting with new tools and technologies, or sharing knowledge with the design 
                  community through workshops and mentoring.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Skills & Expertise
              </h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="gradient-purple-blue h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Tools I Use
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                      <CardContent className="p-4 text-center space-y-2">
                        <div className="text-2xl">{tool.icon}</div>
                        <p className="font-medium text-gray-900">{tool.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
            Experience Timeline
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-px h-full bg-purple-200"></div>
            
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="space-y-2">
                          <p className="text-sm text-purple-600 font-medium">{item.year}</p>
                          <h3 className="font-display text-xl font-bold text-gray-900">{item.title}</h3>
                          <p className="font-medium text-gray-700">{item.company}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}