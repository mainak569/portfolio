import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Terminal, 
  Trophy,
  ExternalLink
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "C++", level: 88 },
        { name: "Java", level: 80 },
        { name: "React/Next.js", level: 92 },
        { name: "Node.js", level: 85 }
      ],
      technologies: ["C++", "Java", "JavaScript", "TypeScript", "C", "React", "Node.js", "Next.js", "Python", "NumPy", "Pandas"]
    },
    {
      title: "Systems & Tools",
      icon: Terminal,
      skills: [
        { name: "Docker/Kubernetes", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Linux/Bash", level: 82 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 88 },
        { name: "Prisma/MongoDB", level: 85 }
      ],
      technologies: ["Linux", "Git", "Docker", "Kubernetes", "Bash", "REST APIs", "PostgreSQL", "Prisma", "MongoDB"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "Deep Learning", level: 80 },
        { name: "Computer Vision", level: 75 },
        { name: "ML Algorithms", level: 85 },
        { name: "PyTorch/TensorFlow", level: 78 },
        { name: "Data Analysis", level: 82 },
        { name: "Research", level: 85 }
      ],
      technologies: ["Deep Learning", "Machine Learning", "Computer Vision", "PyTorch", "TensorFlow", "Data Science"]
    }
  ];

  const problemSolvingPlatforms = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/mainak13/",
      description: "Algorithmic problem solving"
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/mainak13",
      description: "Competitive programming"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/mainak_13",
      description: "Monthly contests"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/mainaklk377/",
      description: "Data structures & algorithms"
    },
    {
      name: "Coding Ninja",
      url: "https://www.naukri.com/code360/profile/c67f4463-4965-48ff-ae29-6286770a9a04",
      description: "Interview preparation"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-elegant transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-primary/10"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, techIndex) => (
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
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 bg-gradient-primary/5 border-primary/20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Problem Solving</h3>
                  <p className="text-muted-foreground">
                    Active on multiple competitive programming platforms
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {problemSolvingPlatforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-primary group-hover:text-primary-glow transition-colors">
                          {platform.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {platform.description}
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="text-center">
                <p className="text-muted-foreground">
                  Solved <span className="font-semibold text-primary">1000+</span> problems across various platforms
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};