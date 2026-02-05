import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-display font-bold tracking-tight text-white">
                BLACK DIAMOND
              </h2>
              <p className="text-sm text-white/70 leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
            </div>
            
            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Certified & Compliant</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:border-white transition-colors">
                  ISO 9001
                </span>
                <span className="px-3 py-1.5 border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:border-white transition-colors">
                  ISO 14001
                </span>
                <span className="px-3 py-1.5 border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:border-white transition-colors">
                  LEED
                </span>
                <span className="px-3 py-1.5 border border-white/20 text-xs font-mono uppercase tracking-widest text-white/70 hover:border-white transition-colors">
                  Green Building
                </span>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="space-y-8">
            <h3 className="text-lg font-display font-bold tracking-tight text-white">Explore</h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="/technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="/impact-calculator" className="hover:text-white transition-colors">Impact Calculator</a></li>
            </ul>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/50">Quick Links</h4>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Updates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-lg font-display font-bold tracking-tight text-white">Contact</h3>
            <div className="space-y-6 text-sm text-white/70">
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Address</span>
                <p className="leading-relaxed">Precision Granite Recovery<br />Industrial Zone, Tamil Nadu<br />India</p>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Email</span>
                <a href="mailto:info@blackdiamondgranite.com" className="hover:text-white transition-colors">
                  info@blackdiamondgranite.com
                </a>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Phone</span>
                <a href="tel:+91-44-1234-5678" className="hover:text-white transition-colors">
                  +91-44-1234-5678
                </a>
              </div>
              <div>
                <span className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">Business Hours</span>
                <p>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Social Media & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-display font-bold tracking-tight text-white mb-6">Stay Connected</h3>
              <div className="flex gap-4">
                <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest border border-white/20 px-4 py-2 hover:border-white">
                  LinkedIn
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest border border-white/20 px-4 py-2 hover:border-white">
                  Twitter
                </a>
                <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-mono uppercase tracking-widest border border-white/20 px-4 py-2 hover:border-white">
                  Instagram
                </a>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 mb-3">Subscribe to Our Newsletter</h4>
                <p className="text-sm text-white/70">Stay updated with our latest innovations and sustainability initiatives.</p>
              </div>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors text-sm"
                />
                <button className="w-full px-4 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors font-mono text-sm uppercase tracking-widest">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Sustainability Call-to-Action */}
            <div className="p-6 border border-white/20 hover:border-white transition-colors group cursor-pointer">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] mb-4 block text-white/50 group-hover:text-white">Sustainability</span>
              <p className="text-base font-display font-bold mb-4 leading-tight">LET'S REDEFINE THE FOUNDATION</p>
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-white" />
                <span className="text-xs font-mono uppercase tracking-widest text-white/70">Get in touch</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 mt-12 gap-6">
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              © {new Date().getFullYear()} Precision Granite Recovery
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-1">
              All rights reserved
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-[10px] font-mono uppercase tracking-widest text-white/40">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sustainability Report</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
