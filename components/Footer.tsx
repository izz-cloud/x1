import Link from 'next/link';
import { Github, Linkedin, Instagram, Dribbble } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Dribbble', href: '#', icon: Dribbble },
];

const quickLinks = [
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold gradient-purple-blue bg-clip-text text-transparent">
                Alex Rivera
              </span>
            </Link>
            <p className="text-gray-600 text-sm max-w-xs">
              Creative Visual Designer crafting innovative digital experiences and memorable brand identities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-purple-600 transition-colors"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Alex Rivera. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Designed & Developed with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}