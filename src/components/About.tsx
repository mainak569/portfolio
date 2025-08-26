import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export const About = () => {
  const educationDetails = {
    institution: "The LNM Institute of Information Technology",
    degree: "Bachelor of Technology",
    field: "Computer and Communication Engineering",
    duration: "Aug. 2023 - Present",
    cgpa: "7.44",
    location: "Jaipur, Rajasthan",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems", 
      "Artificial Intelligence & Machine Learning",
      "Computer Networks",
      "Operating Systems",
      "Design & Analysis of Algorithms",
      "Computer Organization & Architecture",
      "Web Development",
      "IoT & Embedded Systems"
    ]
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate developer with a strong foundation in computer science and a drive to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/80 leading-relaxed">
                I'm a Computer and Communication Engineering student at LNMIIT, Jaipur, 
                with a passion for building innovative web applications and exploring the 
                frontiers of artificial intelligence. My journey in tech is driven by 
                curiosity and a desire to solve real-world problems through code.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                Currently maintaining a CGPA of <span className="font-semibold text-primary">7.44</span>, 
                I've been actively involved in research, particularly in unsupervised image 
                restoration techniques. I also serve as a Teaching Assistant, helping fellow 
                students understand complex ML concepts and programming fundamentals.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                When I'm not coding, you can find me solving algorithmic challenges on 
                competitive programming platforms or working on side projects that push 
                the boundaries of what's possible with modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Problem Solver
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Full Stack Developer
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                AI Enthusiast
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Research Oriented
              </Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-gradient-secondary border-primary/10 shadow-card">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="text-muted-foreground">Current Academic Pursuit</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-primary">
                      {educationDetails.institution}
                    </h4>
                    <p className="text-foreground/80">
                      {educationDetails.degree} in {educationDetails.field}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{educationDetails.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{educationDetails.location}</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-2">Current CGPA</p>
                    <p className="text-2xl font-bold text-primary">{educationDetails.cgpa}</p>
                  </div>

                  <div>
                    <h5 className="font-medium mb-3">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {educationDetails.coursework.map((course, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs bg-card border-primary/20 hover:bg-primary/5"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};