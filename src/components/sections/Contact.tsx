import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t, dir } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = "service_dmendi9";
      const templateId = "template_0vumgwi";
      const publicKey = "YrsiLDpY_2AtAAG10";

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      console.log("Email sent successfully!");
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // RTL alignment classes
  const textAlignClass = dir === "rtl" ? "text-center" : "text-center";
  const flexDirectionClass = dir === "rtl" ? "flex-row-reverse" : "flex-row";
  const marginDirectionClass = dir === "rtl" ? "ml-4" : "mr-4";

  return (
    <section
      id="contact"
      className="py-20 bg-background relative overflow-hidden"
      dir={dir}
    >
      {/* Background elements matching the Hero */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 ${
            dir === "rtl" ? "text-center" : "text-center"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("nav.contact")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-card-border bg-surface p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t("contact.getInTouch")}
              </h3>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className={`flex items-start ${flexDirectionClass}`}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className={marginDirectionClass} />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {t("contact.email")}
                    </h4>
                    <p className="text-muted-foreground">hello@example.com</p>
                    <p className="text-sm text-muted-foreground mt-1 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {t("contact.responseTime")}
                    </p>
                  </div>
                </div>

                <div className={`flex items-start ${flexDirectionClass}`}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className={marginDirectionClass} />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {t("contact.phone")}
                    </h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className={`flex items-start ${flexDirectionClass}`}>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div className={marginDirectionClass} />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {t("contact.location")}
                    </h4>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-8 p-4 bg-muted/30 rounded-xl">
                <div className={`flex items-center ${flexDirectionClass} mb-2`}>
                  <Clock className="h-5 w-5 text-accent" />
                  <div className={marginDirectionClass} />
                  <h4 className="font-semibold">{t("contact.availability")}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t("contact.availabilityText")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-card-border bg-surface p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-primary mb-6">
                {t("contact.sendMessage")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-background transition-colors"
                      placeholder={t("contact.form.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-background transition-colors"
                      placeholder={t("contact.form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-background transition-colors"
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-card-border rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent bg-background transition-colors"
                    placeholder={t("contact.form.messagePlaceholder")}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl py-3 text-base font-medium bg-accent hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    t("contact.form.sending")
                  ) : (
                    <>
                      <Send
                        className={`h-5 w-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`}
                      />
                      {t("contact.form.sendButton")}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Hire Me Directly Section */}
        <div className="mt-20">
          <div
            className={`text-center mb-12 ${
              dir === "rtl" ? "text-right" : "text-left"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t("contact.hireMe")}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contact.hireMeSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1  mb-6 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 transform transition-all duration-1000 delay-700">
            {/* Freelancer Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Hire Me on Freelancer
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer with proven expertise
                </p>
              </div>
              <a
                href="https://www.freelancer.pk/u/vijaydvaswani?frm=vijaydvaswani&sb=t"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>

            {/* Fiverr Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Hire Me on Fiverr
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer with rapid delivery
                </p>
              </div>
              <a
                href="https://www.fiverr.com/s/kLZ2dLw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>

            {/* Upwork Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🧳</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  View My Upwork Profile
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer for enterprise-grade applications
                </p>
              </div>
              <a
                href="https://www.upwork.com/freelancers/vijaykumar2041"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="flex flex-col justify-between rounded-3xl border border-card-border bg-surface p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Connect on LinkedIn
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  SQA Engineer passionate about quality assurance
                </p>
              </div>
              <a
                href="http://www.linkedin.com/in/vijaykumarvaswani"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center text-base font-medium text-accent hover:underline py-3 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
