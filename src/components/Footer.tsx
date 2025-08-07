import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iifb-dark-earth text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full"></div>
              <span className="text-2xl font-bold">CBD Panama Meetings</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Join the global conversation on biodiversity conservation and Indigenous rights. 
              Together, we're shaping the future of our planet's biological diversity.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#statements" className="text-gray-300 hover:text-white transition-colors">Statements</a></li>
              <li><a href="#documents" className="text-gray-300 hover:text-white transition-colors">Documents</a></li>
              <li><a href="#news" className="text-gray-300 hover:text-white transition-colors">News & Media</a></li>
              <li><a href="#side-events" className="text-gray-300 hover:text-white transition-colors">Side Events</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Panama City, Panama</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@cbdpanama.org</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+507 XXX-XXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Dates */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-2">SBSTTA-27</h4>
              <p className="text-gray-300">October 20-24, 2025</p>
              <p className="text-sm text-gray-400">Subsidiary Body on Scientific, Technical and Technological Advice</p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-2">SB8J-1</h4>
              <p className="text-gray-300">October 27-30, 2025</p>
              <p className="text-sm text-gray-400">First Meeting of the Subsidiary Body on Article 8(j)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 CBD Panama Meetings. All rights reserved. | Organized in collaboration with the Convention on Biological Diversity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;