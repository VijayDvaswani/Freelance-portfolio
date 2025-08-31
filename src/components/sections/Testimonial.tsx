import React, { useEffect, useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/contexts/I18nContext";
import { Quote, Star, User, ArrowLeft, ArrowRight } from "lucide-react";

export function Testimonials() {
  const { t, dir } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      content: t("testimonials.1.content"),
      rating: 5,
      project: t("testimonials.1.project"),
      date: t("testimonials.1.date"),
    },
    {
      id: 2,
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      content: t("testimonials.2.content"),
      rating: 5,
      project: t("testimonials.2.project"),
      date: t("testimonials.2.date"),
    },
    {
      id: 3,
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      content: t("testimonials.3.content"),
      rating: 5,
      project: t("testimonials.3.project"),
      date: t("testimonials.3.date"),
    },
    {
      id: 4,
      name: t("testimonials.4.name"),
      role: t("testimonials.4.role"),
      content: t("testimonials.4.content"),
      rating: 5,
      project: t("testimonials.4.project"),
      date: t("testimonials.4.date"),
    },
    {
      id: 5,
      name: t("testimonials.5.name"),
      role: t("testimonials.5.role"),
      content: t("testimonials.5.content"),
      rating: 5,
      project: t("testimonials.5.project"),
      date: t("testimonials.5.date"),
    },
    {
      id: 6,
      name: t("testimonials.6.name"),
      role: t("testimonials.6.role"),
      content: t("testimonials.6.content"),
      rating: 5,
      project: t("testimonials.6.project"),
      date: t("testimonials.6.date"),
    },
  ];

  // Navigation functions
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => {
    clearInterval(autoPlayRef.current);
  };

  // Resume auto-play
  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      nextTestimonial();
    }, 10000);
  };

  // Render star ratings
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get the testimonials to display based on current index
  const getDisplayTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section
      id="testimonials"
      className="py-24 bg-purple-50 overflow-hidden relative"
      ref={sectionRef}
      dir={dir}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

        {/* Diagonal blurred lines */}
        <div className="absolute bottom-0 left-0 w-[400px] h-1 bg-gradient-to-r from-transparent via-primary to-transparent rotate-[135deg] translate-x-[-100px] translate-y-[100px] blur-2xl opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rotate-[135deg] translate-x-[100px] translate-y-[300px] blur-3xl opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with improved animation */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              {t("testimonials.badge")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t("testimonials.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Desktop Grid (3 columns) */}
        <div
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          {getDisplayTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transform transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full flex flex-col border border-border/40 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 backdrop-blur-sm rounded-3xl overflow-hidden hover:-translate-y-2">
                <CardHeader className="pb-5 relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="p-3 rounded-2xl bg-background/90 shadow-lg text-blue-500 group-hover:scale-110 transition-all duration-300 border border-border/30">
                      <User className="h-6 w-6" />
                    </div>
                    <div className={dir === "rtl" ? "text-right" : "text-left"}>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <div className="px-6 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>

                <CardContent className="flex flex-col flex-grow py-6">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  <CardDescription
                    className={`text-muted-foreground mb-6 text-base leading-relaxed italic ${
                      dir === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    "{testimonial.content}"
                  </CardDescription>

                  <div className="mt-auto pt-4 border-t border-border/20">
                    <h4
                      className={`text-sm font-semibold text-foreground/90 mb-1 ${
                        dir === "rtl" ? "text-right" : "text-left"
                      }`}
                    >
                      {testimonial.project}
                    </h4>
                    <p
                      className={`text-xs text-muted-foreground ${
                        dir === "rtl" ? "text-right" : "text-left"
                      }`}
                    >
                      {testimonial.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Carousel */}
        <div
          className="lg:hidden"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
        >
          <div
            className={`transform transition-all duration-700 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <Card className="h-full flex flex-col border border-border/40 shadow-xl group bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-3xl overflow-hidden">
              <CardHeader className="pb-5 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <Quote className="h-10 w-10 text-blue-500 opacity-30 absolute top-4 right-4" />
                <div className="flex items-center gap-4 pt-2">
                  <div className="p-3 rounded-2xl bg-background/90 shadow-lg text-blue-500 border border-border/30">
                    <User className="h-6 w-6" />
                  </div>
                  <div className={dir === "rtl" ? "text-right" : "text-left"}>
                    <CardTitle className="text-xl font-bold">
                      {testimonials[currentIndex].name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <div className="px-6 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent"></div>

              <CardContent className="flex flex-col flex-grow py-6">
                <div className="flex mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                <CardDescription
                  className={`text-muted-foreground mb-6 text-base leading-relaxed italic ${
                    dir === "rtl" ? "text-right" : "text-left"
                  }`}
                >
                  "{testimonials[currentIndex].content}"
                </CardDescription>

                <div className="mt-auto pt-4 border-t border-border/20">
                  <h4
                    className={`text-sm font-semibold text-foreground/90 mb-1 ${
                      dir === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    {testimonials[currentIndex].project}
                  </h4>
                  <p
                    className={`text-xs text-muted-foreground ${
                      dir === "rtl" ? "text-right" : "text-left"
                    }`}
                  >
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-background/80 border border-border/30 shadow-md hover:bg-primary/10 transition-colors duration-300"
                aria-label={t("testimonials.previous")}
              >
                {dir === "rtl" ? (
                  <ArrowRight className="h-5 w-5" />
                ) : (
                  <ArrowLeft className="h-5 w-5" />
                )}
              </button>

              <div className="flex items-center gap-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentIndex === index
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-primary/50"
                    }`}
                    aria-label={t("testimonials.goTo") + ` ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-background/80 border border-border/30 shadow-md hover:bg-primary/10 transition-colors duration-300"
                aria-label={t("testimonials.next")}
              >
                {dir === "rtl" ? (
                  <ArrowLeft className="h-5 w-5" />
                ) : (
                  <ArrowRight className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop navigation buttons */}
        <div className="hidden lg:flex justify-center items-center mt-10 gap-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-background/80 border border-border/30 shadow-md hover:bg-primary/10 transition-colors duration-300"
            aria-label={t("testimonials.previous")}
          >
            {dir === "rtl" ? (
              <ArrowRight className="h-5 w-5" />
            ) : (
              <ArrowLeft className="h-5 w-5" />
            )}
          </button>

          <div className="flex items-center gap-2 mx-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-primary/50"
                }`}
                aria-label={t("testimonials.goTo") + ` ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-background/80 border border-border/30 shadow-md hover:bg-primary/10 transition-colors duration-300"
            aria-label={t("testimonials.next")}
          >
            {dir === "rtl" ? (
              <ArrowLeft className="h-5 w-5" />
            ) : (
              <ArrowRight className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
