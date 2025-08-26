import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: "Craafter",
      subtitle: "AI-Based Website Builder",
      date: "Jul. 2025",
      description: "A revolutionary full-stack AI website builder that integrates E2B cloud-based Docker sandboxes for secure, isolated code execution. Uses OpenAI LLMs to dynamically generate, test, and deploy applications entirely within sandbox environments.",
      features: [
        "AI programmatically generates full-stack apps from prompts using Inngest agent workflows",
        "E2B cloud-based Docker sandboxes for secure code execution",
        "tRPC for end-to-end type-safe procedures",
        "Prisma with Neon for database interactions",
        "Live preview and file explorer functionality",
        "Credit usage tracking and Clerk authentication with billing"
      ],
      technologies: ["Next.js", "TypeScript", "OpenAI", "E2B", "tRPC", "Prisma", "Neon", "Clerk", "Docker", "Inngest"],
      demoUrl: "https://craafter.vercel.app/",
      githubUrl: "https://github.com/mainak569/craafter",
      featured: true
    },
    {
      title: "SyncPen",
      subtitle: "Notes Sharing Web App",
      date: "Apr. 2025",
      description: "An innovative collaborative platform combining a powerful text editor with integrated whiteboard support for drawing schemas, wireframes, and mind maps. Perfect for team collaboration and creative brainstorming sessions.",
      features: [
        "Real-time collaborative text editing",
        "Integrated whiteboard for visual collaboration",
        "Support for schemas, wireframes, and mind maps",
        "File and media storage capabilities",
        "User authentication and session management",
        "Responsive design for all devices"
      ],
      technologies: ["Next.js", "Convex", "Clerk", "Edge Store", "TypeScript", "React", "Tailwind CSS"],
      demoUrl: "https://sync-pen-six.vercel.app/",
      githubUrl: "https://github.com/mainak569/syncpen",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies and creative problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full p-6 hover:shadow-elegant transition-all duration-500 border-primary/10 bg-gradient-secondary/50 backdrop-blur-sm group-hover:border-primary/30">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-2xl font-bold text-primary">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <Badge className="bg-gradient-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <p className="text-lg text-muted-foreground font-medium">
                          {project.subtitle}
                        </p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/70 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    
                    <Button
                      variant="outline"
                      asChild
                      className="flex-1 border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            asChild
            className="border-primary/20 hover:border-primary hover:bg-primary/5"
          >
            <a 
              href="https://github.com/mainak569" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
              <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};