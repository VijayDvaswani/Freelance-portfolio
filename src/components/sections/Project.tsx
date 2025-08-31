import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import {
  ExternalLink,
  Github,
  Play,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Import your project images (make sure to adjust the paths as needed)
import img1 from "../../media/image1.png";
import img2 from "../../media/image2.png";
import img3 from "../../media/image3.png";
import img4 from "../../media/image4.png";
import img5 from "../../media/image5.png";
import img6 from "../../media/image6.png";
import img7 from "../../media/image7.png";
import img9 from "../../media/image9.png";
import img8 from "../../media/image8.png";
import img10 from "../../media/image10.png";
import img11 from "../../media/image11.jpg";
import img12 from "../../media/image12.png";

export function Project() {
  const { t, dir } = useI18n();
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Project data with categories assigned
  const projects = [
    {
      id: 1,
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      category: "webapplication",
      tags: [
        "Web Testing",
        "API Testing",
        "Mobile App Testing",
        "Admin Panel",
        "Performance Testing",
      ],
      link: "https://www.argaam.com/en",
      image: img11,
    },
    {
      id: 2,
      title: t("projects.2.title"),
      description: t("projects.2.description"),
      category: "webapplication",
      tags: [
        "Data Testing",
        "Visualization Testing",
        "Web Testing",
        "API Testing",
        "Performance Testing",
      ],
      link: "https://argaam.com/en/macro",
      image: img10,
    },
    {
      id: 3,
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      category: "mobile",
      tags: [
        "Mobile App Testing",
        "Store Panel Testing",
        "Admin Panel Testing",
      ],
      link: "https://oyah.com/index.html",
      image: img4,
    },
    {
      id: 4,
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      category: "software",
      tags: ["Mobile App Testing", "Admin Panel Testing", "API Testing"],
      link: "https://multilip.com",
      image: img6,
    },
    {
      id: 5,
      title: t("projects.5.title"),
      description: t("projects.5.description"),
      category: "webapplication",
      tags: ["Mobile App Testing", "Admin Panel Testing", "API Testing"],
      link: "https://highclass.com",
      image: img7,
    },
    {
      id: 6,
      title: t("projects.6.title"),
      description: t("projects.6.description"),
      category: "software",
      tags: ["API Testing", "Automation Testing", "Performance Testing"],
      link: "https://buyhouseez.com/",
      image: img3,
    },
    {
      id: 7,
      title: t("projects.7.title"),
      description: t("projects.7.description"),
      category: "webapplication",
      tags: [
        "Web Testing",
        "Data Testing",
        "UI Testing",
        "Performance Testing",
      ],
      link: "https://argaam.com/en/argaam100",
      image: img9,
    },
    {
      id: 8,
      title: t("projects.8.title"),
      description: t("projects.8.description"),
      category: "mobile",
      tags: [
        "Mobile App Testing",
        "Admin Panel Testing",
        "API Testing",
        "Notification Testing",
      ],
      link: "https://herfa.com",
      image: img5,
    },
    {
      id: 9,
      title: t("projects.9.title"),
      description: t("projects.9.description"),
      category: "mobile",
      tags: [
        "Mobile App Testing",
        "Admin Panel Testing",
        "API Testing",
        "Notification Testing",
      ],
      link: "https://note2.com",
      image: img8,
    },
    {
      id: 10,
      title: t("projects.10.title"),
      description: t("projects.10.description"),
      category: "webapplication",
      tags: ["Web Testing", "Performance Testing", "API Testing", "CMS"],
      link: "https://www.argaamcharts.com/ar/1120",
      image: img1,
    },
    {
      id: 11,
      title: t("projects.11.title"),
      description: t("projects.11.description"),
      category: "software",
      tags: [
        "API Testing",
        "Web Testing",
        "Load Testing",
        "Mobile App Testing",
        "Performance Testing",
      ],
      link: "https://contractorforeman.com/",
      image: img2,
    },
    {
      id: 12,
      title: t("projects.12.title"),
      description: t("projects.12.description"),
      category: "software",
      tags: [
        "AI Testing",
        "UI Testing",
        "Web Testing",
        "Performance Testing",
        "Mobile App Testing",
      ],
      link: "https://magusai.com",
      image: img12,
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

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  // RTL alignment classes
  const textAlignClass = dir === "rtl" ? "text-right" : "text-left";
  const flexDirectionClass = dir === "rtl" ? "flex-row-reverse" : "flex-row";
  const marginDirectionClass = dir === "rtl" ? "ml-2" : "mr-2";

  return (
    <section
      id="projects"
      className="py-20 bg-background relative overflow-hidden"
      dir={dir}
    >
      {/* Background elements matching the Hero */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"
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
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 ${
            dir === "rtl" ? "text-right" : "text-left"
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
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            dir === "rtl" ? "flex-row-reverse" : ""
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "bg-surface border-card-border hover:bg-accent/10"
              }`}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleCount(6);
              }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-card-border bg-surface overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 bg-muted overflow-hidden relative">
                <img
                  src={project.image}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 ${
                    dir === "rtl" ? "left-4" : "right-4"
                  } bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium`}
                >
                  {categories.find((cat) => cat.id === project.category)?.name}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`text-xl font-bold text-primary mb-2 ${textAlignClass}`}
                >
                  {project.title}
                </h3>
                <p className={`text-muted-foreground mb-4 ${textAlignClass}`}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div
                  className={`flex flex-wrap gap-2 mb-6 ${
                    dir === "rtl" ? "justify-end" : "justify-start"
                  }`}
                >
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className={`flex justify-between ${flexDirectionClass}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline py-2 px-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors duration-300"
                  >
                    <ExternalLink
                      className={`h-4 w-4 ${dir === "rtl" ? "ml-2" : "mr-2"}`}
                    />
                    {t("projects.viewProject")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Buttons */}
        {filteredProjects.length > 6 && (
          <div className="text-center mb-12">
            {hasMoreProjects ? (
              <Button
                onClick={loadMore}
                variant="outline"
                className="rounded-full px-6 py-2 border-accent text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                {t("projects.showMore")}
                <ChevronDown
                  className={`h-5 w-5 ${dir === "rtl" ? "mr-2" : "ml-2"}`}
                />
              </Button>
            ) : (
              <Button
                onClick={showLess}
                variant="outline"
                className="rounded-full px-6 py-2 border-accent text-accent hover:bg-accent/10 transition-colors duration-300"
              >
                {t("projects.showLess")}
                <ChevronUp
                  className={`h-5 w-5 ${dir === "rtl" ? "mr-2" : "ml-2"}`}
                />
              </Button>
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-8">
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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
