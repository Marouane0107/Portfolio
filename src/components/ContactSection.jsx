import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef, useState } from "react";

export const ContactSection = () => {
    const [state, handleSubmit] = useForm("mzzrnknv");
    const [showThankYou, setShowThankYou] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        if (state.succeeded) {
            setShowThankYou(true);
            // Clear form fields
            if (formRef.current) {
                formRef.current.reset();
            }
            // Hide thank you message after 3 seconds
            const timer = setTimeout(() => setShowThankYou(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Interested in collaborating or just want to say hello? Feel free to reach out.
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                {/* Thank you message after submit */}
                {showThankYou && (
                    <div className="mb-8 text-center">
                        <h3 className="text-2xl font-bold mb-2 text-green-600">Thank You!</h3>
                        <p className="text-lg text-muted-foreground">
                            Thanks for reaching out! I'll get back to you soon.
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb:6">Let's Connect</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />										
                                </div>
                                <div>
                                    <h4 className="font-medium"> Gmail </h4>
                                    <a href="mailto:marouaneaouzal@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> 
                                        marouaneaouzal@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a href="tel:+212627131841" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        +212 627 131 841
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />										
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors"> 
                                        Agadir, Morocco
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4 text-left">
                                Connect with me on social media
                            </h4>
                            <div className="flex space-x-4 justify-start gap-17">
                                <a href="https://www.linkedin.com/in/marouane-aouzal-101b43253/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/marouane__zal/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://github.com/Marouane0107" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-medium mb-2"> Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-background rounded-md border border-input focus:ring-2 focus:outline-hidden focus:ring-primary"
                                    placeholder="Marouane Aouzal"
                                    required
                                />
                                <ValidationError 
                                    prefix="Name" 
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-medium mb-2"> Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-background rounded-md border border-input focus:ring-2 focus:outline-hidden focus:ring-primary"
                                    placeholder="Example@gmail.com"
                                    required
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-medium mb-2"> Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 bg-background rounded-md border border-input focus:ring-2 focus:outline-hidden focus:ring-primary resize-none"
                                    placeholder="Hello Marouane, I would like to discuss..."
                                    required
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                {state.submitting ? 'Sending...' : 'Send Message'}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};