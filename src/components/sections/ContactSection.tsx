import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

const ContactSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const { serviceId, templateId, publicKey } = emailjsConfig;
    
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: 'Claus Horn'
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form
        setName("");
        setEmail("");
        setMessage("");
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log('FAILED...', error);
        toast({
          title: "Error sending message",
          description: "Please try again or contact me directly.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="bg-light-gray py-20">
      <div className="section-container">
        <h2 className="section-title text-center">Get in Touch</h2>
        <p className="text-center text-charcoal/80 text-lg mb-12 max-w-2xl mx-auto">
        Interested in collaboration, research partnerships, or advisory work? <br />
        I'd be glad to connect and explore how we might work together.
        </p>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full border-gray-200 focus:border-accent-blue focus:ring-accent-blue"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full border-gray-200 focus:border-accent-blue focus:ring-accent-blue"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your research project, advisory needs, funding interest, or collaboration idea"
                  required
                  className="w-full border-gray-200 focus:border-accent-blue focus:ring-accent-blue min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-start justify-center animate-on-scroll">
            <div className="bg-white p-8 rounded-lg w-full shadow-sm">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-accent-blue mr-3" />
                <h3 className="text-xl font-semibold text-charcoal">Let's Start a Conversation</h3>
              </div>
              <ul className="space-y-3 text-charcoal/80">
                <li className="flex items-center">
                  <span className="text-accent-blue mr-2">•</span>
                  <span><strong>Research projects for talented students</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-blue mr-2">•</span>
                  <span><strong>Expert advisory for AI-driven organizations</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-blue mr-2">•</span>
                  <span><strong>Opportunities to fund breakthrough AI research and applications</strong></span>
                </li>
                <li className="flex items-center">
                  <span className="text-accent-blue mr-2">•</span>
                  <span><strong>Join EurekaLabs as a scientist or engineer</strong></span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-charcoal/60">
                  • Available for global collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
