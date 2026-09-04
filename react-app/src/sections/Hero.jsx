import { Button } from "../Components/Button"
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton"
import { ArrowRight, Download, ChevronDown } from "lucide-react"
import "@fortawesome/fontawesome-free/css/all.min.css"

const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "Tailwind CSS",
    "Figma",
    "Git",
];

export const Hero = ()  => {
    return <section className="relative min-h-screen flex items-center overflow-hidden ">

        {/* bg */}
        <div className="absolute inset-0">
            <img src="/projects/background.jpg" alt="Hero image"
            className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20  via-background/50 to-background"></div>
        </div>

        {/* floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                    style={{
                        backgroundColor: "rgb(255, 0, 255)", 
                        left: `${Math.random() *100}%`,
                        top: `${Math.random() *100}%`,
                        animation: `slow-drift ${25 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ) )}
        </div>

        {/* content */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* left column Text content */}
                <div className="space-y-8">
                <div className="animate-fade-in">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"/>Software Engineer * Full Stack Development 

                    </span>
                </div>

                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Creating <span className="text-primary glow-text">Responsive</span>
                        <br />
                            Website with
                        <br />
                        <span className="font-serif italic font-normal text-white">precision.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                        Hi, I'm Tyra, a passionate software developer and Computer Engineering student who enjoys building modern, responsive, and user-friendly websites and applications. I’m constantly learning new technologies, improving my skills, and turning creative ideas into practical digital solutions.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                    <Button size="lg"  onClick={() => {
                        document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                        });
                        }}>Contact Me <ArrowRight className="w-5 h-5"/>
                    </Button>
                    <AnimatedBorderButton onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/Swiss_CV.pdf";
                        link.download = "Swiss_CV.pdf";
                        link.click();
                        }}> <Download className="w-5 h-5" /> 
                    </AnimatedBorderButton>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                    Follow me:
                </span>

                <div className="flex items-center gap-3">
                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                    <i className="fa-brands fa-github text-lg"></i>
                    </a>

                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                    <i className="fa-brands fa-linkedin-in text-lg"></i>
                    </a>

                    <a
                        href="#"
                        className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                    >
                    <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                </div>
                </div>
                </div> 
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                {/* Profile Image */}
                <div className="relative max-w-xs mx-auto">
                <div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
                />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/projects/image7.png"
                  alt="Tyra Swiss"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-2 py-2 animate-float">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"/>
                        <span className="text-sm font-medium">Available For work</span>
                    </div>
                </div>
                {/* Stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-2 py-2 animate-float animation-delay-500">
                    <div className="text-xl font-bold text-primary">3+</div>
                    <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
            </div>
        </div>
        </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`skill-${idx}`} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
        {/* Skroll indicator */}
        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
            animate-fade-in animation-delay-800 z-20"
        >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
            <span className="text-xs uppercase cursor-pointer tracking-wider">Scroll</span>
            <ChevronDown className="w-6 h-6 animate-bounce " />
        </a>
        </div>
    </section>
}