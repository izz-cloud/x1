'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@alexrivera.design',
    href: 'mailto:hello@alexrivera.design',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: '#',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    color: 'hover:text-pink-600',
  },
  {
    name: 'Dribbble',
    icon: Dribbble,
    href: '#',
    color: 'hover:text-pink-500',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            Let's Work Together
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and 
            let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gradient-purple-blue hover:opacity-90 transition-opacity"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`p-3 bg-gray-100 rounded-full text-gray-600 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Call CTA */}
            <Card className="shadow-lg border-0 gradient-purple-blue text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-display text-xl font-bold mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-purple-100 mb-6">
                  Schedule a free 30-minute consultation call to discuss your project.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full bg-white text-purple-600 hover:bg-gray-100"
                >
                  Book a Call
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-600">Most projects take 2-8 weeks depending on scope and complexity. We'll discuss timelines during our initial consultation.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Do you work with international clients?</h3>
              <p className="text-gray-600">Absolutely! I work with clients worldwide and am flexible with different time zones and communication preferences.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in your design process?</h3>
              <p className="text-gray-600">Research, strategy, wireframing, visual design, prototyping, and handoff documentation. Each project is tailored to your needs.</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer ongoing support?</h3>
              <p className="text-gray-600">Yes! I provide post-launch support and can help with future iterations or additional features as your business grows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}