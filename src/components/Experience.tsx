import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: "Unsupervised Image Restoration Techniques",
      company: "Lusip LNMIIT - Summer Term Internship",
      type: "Research Internship",
      duration: "June 2025 - July 2025",
      location: "Remote",
      certificateUrl: "https://drive.google.com/file/d/1N46I7bQ1NfsSLBDQoWlcbvPJNPrncs94/view?usp=sharing",
      description: [
        "Collaborated with Dr. Indra Deep Mastan from IIT BHU on cutting-edge unsupervised image restoration research",
        "Focused on Deep Image Prior techniques for image denoising and super-resolution without ground truth supervision",
        "Implemented and evaluated CNN-based restoration models by studying recent research papers",
        "Emphasized learning-based priors and optimization through image statistics"
      ],
      skills: ["Deep Learning", "Computer Vision", "PyTorch", "Image Processing", "Research", "CNN"]
    },
    {
      title: "Teaching Assistant",
      company: "LNMIIT",
      type: "Academic Position",
      duration: "Aug. 2024 - Apr. 2025",
      location: "Onsite",
      certificateUrl: "https://drive.google.com/file/d/14Rm37Mny4OtGsjWyy0GbfvCWz0b8v3zH/view?usp=sharing",
      description: [
        "Supported understanding and implementation of core ML models including Linear Regression, K-Means, Decision Trees, Random Forest, and Clustering",
        "Optimized code architecture and engaged students with real-world scenarios",
        "Connected theoretical concepts with practical applications in programming",
        "Mentored students in problem-solving approaches and best coding practices"
      ],
      skills: ["Machine Learning", "Python", "Teaching", "Mentoring", "Code Review", "Problem Solving"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through research, teaching, and hands-on learning experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-elegant transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur-sm">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="md:col-span-1 space-y-4">
                    <div>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 mb-2"
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    {exp.certificateUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full border-primary/20 hover:border-primary hover:bg-primary/5"
                      >
                        <a 
                          href={exp.certificateUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Award className="h-4 w-4 mr-2" />
                          Certificate
                          <ExternalLink className="h-3 w-3 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};