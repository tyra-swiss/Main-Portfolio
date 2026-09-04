import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const projects = [
  {
    title: "Flower Landing Page",
    description:
      "A responsive flower-themed landing page designed to showcase beautiful floral products with a clean and attractive user interface.",
    image: "/projects/image.png",
    tags: ["HTML", "CSS", "Bootstrap"],
    link: "#",
    github: "https://github.com/tyra-swiss/Flower-Website.git",
  },

  {
    title: "Netflix Clone",
    description:
      "A Netflix-inspired streaming website featuring a non-responsive layout, movie and show sections, and a modern entertainment-focused design.",
    image: "/projects/image2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/tyra-swiss/netflix-landing-page.git",
  },

  {
    title: "Product Landing Page",
    description:
      "A non-responsive product website created to present product information in a clean and engaging layout with interactive elements.",
    image: "/projects/image3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/tyra-swiss/Product-website.git",
  },

  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website showcasing my skills, projects, experience, and contact information with a responsive and modern design.",
    image: "/projects/image8.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/tyra-swiss/portfolio-website.git",
  },

];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton 
            onClick={() => {
            const link = document.createElement("a");
            link.href = "/Swiss_CV.pdf";
            link.download = "Swiss_CV.pdf";
            link.click();
            }}
          >
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};