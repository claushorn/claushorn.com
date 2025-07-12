import React from "react";
import { Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-lg font-medium text-white">
              Claus Horn
            </h3>
            <p className="text-sm text-white/70 max-w-md">
              Scientist and AI entrepreneur <br />
              - accelerating science with AI.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
            <div className="flex space-x-3">
              <a 
                href="mailto:claus@claushorn.com" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 md:flex md:items-center md:justify-between">
          <p className="text-sm text-white/60">
            &copy; {currentYear} Claus Horn. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-white/60">
              Based in Switzerland and New Haven • Available globally
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
