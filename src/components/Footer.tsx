
import BackToTop from '@/components/BackToTop';

const Footer = () => {
  return (
    <footer className="bg-iifb-dark-earth text-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Meeting Dates */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Upcoming Meetings</h3>
            <p className="text-gray-300 text-lg">Join us for these crucial biodiversity conservation meetings</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-2xl mb-3 text-white">SBSTTA-27</h4>
              <p className="text-primary text-xl font-semibold mb-3">October 20-24, 2025</p>
              <p className="text-gray-300 leading-relaxed">
                27th meeting of the Subsidiary Body on Scientific, Technical and Technological Advice. 
                Focus on science-based recommendations for implementing the Kunming-Montreal Global Biodiversity Framework.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <h4 className="font-bold text-2xl mb-3 text-white">SB8J-1</h4>
              <p className="text-secondary text-xl font-semibold mb-3">October 27-30, 2025</p>
              <p className="text-gray-300 leading-relaxed">
                First Meeting of the Subsidiary Body on Article 8(j) and Related Provisions. 
                Historic establishment focusing on Indigenous Peoples and local communities.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsored By Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="text-center">
            <p className="text-gray-300 text-sm mb-4">Sponsored by</p>
            <div className="flex justify-center items-center">
              <a
                href="https://www.iifb.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit International Indigenous Forum on Biodiversity website"
                className="inline-block transition-opacity hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              >
                <img 
                  src="/lovable-uploads/35d6dee7-4d9b-4354-8f18-83f7bd69dce6.png" 
                  alt="International Indigenous Forum on Biodiversity" 
                  className="h-16 md:h-20 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <BackToTop />
    </footer>
  );
};

export default Footer;
