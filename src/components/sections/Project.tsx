import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { ExternalLink, Github, Play, ArrowRight } from "lucide-react";

export function Project() {
  const { t, dir } = useI18n();
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample project data
  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      category: "webapplication",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 2,
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      category: "mobile",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 3,
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      category: "software",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["Java", "Spring Boot", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 4,
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      category: "webapplication",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 5,
      title: t("projects.5.title"),
      description: t("projects.5.description"),
      category: "mobile",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["Flutter", "Dart", "Google Cloud"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
    {
      id: 6,
      title: t("projects.6.title"),
      description: t("projects.6.description"),
      category: "software",
      image:
        "https://t3.ftcdn.net/jpg/01/03/13/68/360_F_103136864_VuN9DIEjJkGkllnGt5qqyz13APoTz58L.jpg",
      technologies: ["React", "D3.js", "Python"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
    },
  ];

  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "webapplication", name: t("projects.categories.web") },
    { id: "mobile", name: t("projects.categories.mobile") },
    { id: "software", name: t("projects.categories.software") },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // RTL alignment classes
  const textAlignClass = dir === "rtl" ? "text-right" : "text-left";
  const flexDirectionClass = dir === "rtl" ? "flex-row-reverse" : "flex-row";

  return (
    <section
      id="project"
      className="min-h-screen flex items-center py-20 justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 opacity-70 animate-float">
          <div className="w-10 h-10 bg-accent/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-20 right-10 opacity-70 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
        </div>
        <div
          className="absolute top-1/3 right-1/4 opacity-70 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-6 h-6 bg-secondary/30 rounded-full"></div>
        </div>
        <div
          className="absolute top-1/2 left-1/3 opacity-60 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="w-12 h-12 bg-emerald-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 opacity-60 animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="w-7 h-7 bg-pink-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute top-1/4 right-1/3 opacity-60 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <div className="w-9 h-9 bg-indigo-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute top-3/4 right-1/5 opacity-70 animate-float"
          style={{ animationDelay: "3.5s" }}
        >
          <div className="w-11 h-11 bg-orange-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-10 left-1/2 opacity-70 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <div className="w-5 h-5 bg-teal-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute top-14 right-1/2 opacity-60 animate-float"
          style={{ animationDelay: "4.5s" }}
        >
          <div className="w-14 h-14 bg-yellow-400/30 rounded-full"></div>
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 opacity-70 animate-float"
          style={{ animationDelay: "5s" }}
        >
          <div className="w-6 h-6 bg-fuchsia-400/30 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 ${
            dir === "rtl" ? "text-center" : "text-center"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {t("nav.projects")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "bg-surface border-card-border hover:bg-accent/10"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-card-border bg-surface-hover overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className=" bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                  {project.category.charAt(0).toUpperCase() +
                    project.category.slice(1)}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline py-2 px-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-foreground hover:underline py-2 px-4 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            {t("projects.cta")}
          </p>
          <Button className="rounded-full px-8 py-3 text-base font-medium bg-accent hover:bg-accent/90 transition-colors duration-300">
            {t("nav.contact")}
            <ArrowRight
              className={`h-5 w-5 ${
                dir === "rtl" ? "mr-2 rotate-180" : "ml-2"
              }`}
            />
          </Button>
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

export default Project;
