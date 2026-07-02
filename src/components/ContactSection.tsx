import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Github, Linkedin, Send, ExternalLink, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "../hooks/use-toast";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please email me directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "vinayakramavath1@gmail.com",
      href: "mailto:vinayakramavath1@gmail.com",
      color: "text-sky-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 7416979302",
      href: "tel:+917416979302",
      color: "text-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://www.instagram.com/_im__vinayak_",
      color: "text-rose-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/vinayak-051",
      color: "text-foreground"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ramavath-vinayak-45463124b",
      color: "text-blue-500"
    }
  ];

  const openResume = () => {
    window.open(`${import.meta.env.BASE_URL}Vinayak_Resume_.pdf`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-4">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col space-y-12">

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-2">
                  GET IN TOUCH
                </h3>

                {contactInfo.map((info, index) => (
                  <Card
                    key={info.label}
                    className="professional-card group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a href={info.href} className="flex items-center space-x-4 p-4">
                      <div className={`${info.color} group-hover:animate-pulse`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-mono">
                          {info.label}
                        </p>
                        <p className="text-foreground font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold text-slate-600 dark:text-slate-300 mb-4">
                  SOCIAL LINKS
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="icon"
                      className="group"
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <div className={`${social.color} group-hover:animate-bounce`}>
                        {social.icon}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-heading font-semibold text-slate-600 dark:text-slate-300 mb-4">
                  RESUME
                </h4>
                <Button onClick={openResume} className="group w-full sm:w-auto">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View Resume
                </Button>
              </div>
            </div>

            <div>
              <Card className="professional-card">
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-6">
                    SEND MESSAGE
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="bg-background border-border focus:border-primary resize-none"
                        placeholder="Tell me about your project or just say hi!"
                      />
                    </div>

                    <Button type="submit" className="w-full group" disabled={sending}>
                      <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                      {sending ? "Sending…" : "Send Message"}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
