import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github, ExternalLink, Calendar, Award } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Kuan Wei Chen</h1>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-white/90 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-white/90 hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card border-0">
            <CardContent className="p-12">
              <h1 className="text-5xl font-bold text-white mb-4 text-balance">Kuan Wei Chen</h1>
              <p className="text-xl text-gray-200 mb-8 text-pretty">Full-Stack Developer & AI/ML Engineer</p>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-pretty">
                Specialized in building scalable applications with Angular, React, Django, and .NET Core. Passionate
                about AI/ML solutions and modern cloud architectures.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  yoyoman1415926@gmail.com
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <Phone className="w-4 h-4 mr-2" />
                  +886 981210682
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Angular
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Vue.js
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    React
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    TypeScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    C# .NET Core
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Django
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    FastAPI
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Java
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">AI/ML & Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    PyTorch
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    TensorFlow
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    BERT
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    NLP
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    CUDA
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Oracle SQL
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    MySQL
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    MongoDB
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    SQLite
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">DevOps & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Azure DevOps
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Docker
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Kafka
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Airflow
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Tools & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    HuggingFace
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Pandas
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Flask
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-600 text-white">
                    Red Hat Podman
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">IBM Fubon Banking Platform</CardTitle>
                <CardDescription className="text-gray-300">Full-Stack Banking Solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  A comprehensive banking platform built with Angular frontend and C# .NET Core API, featuring
                  microservice architecture and Oracle database integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Angular</Badge>
                  <Badge className="bg-primary text-primary-foreground">C# .NET Core</Badge>
                  <Badge className="bg-primary text-primary-foreground">Oracle DB</Badge>
                  <Badge className="bg-primary text-primary-foreground">Azure DevOps</Badge>
                </div>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">AI Procurement Decision Platform</CardTitle>
                <CardDescription className="text-gray-300">Django & Apache Airflow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  An intelligent procurement platform using Django and Apache Airflow for workflow management, with
                  Python visualization tools for data-driven decision making.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Django</Badge>
                  <Badge className="bg-primary text-primary-foreground">Apache Airflow</Badge>
                  <Badge className="bg-primary text-primary-foreground">Python</Badge>
                  <Badge className="bg-primary text-primary-foreground">Oracle DB</Badge>
                </div>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">AS400 Modernization Project</CardTitle>
                <CardDescription className="text-gray-300">Legacy System Transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Modernized legacy stock purchasing platform with Java backend, Vue frontend, and Kafka middleware,
                  containerized with Red Hat Podman.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">Java</Badge>
                  <Badge className="bg-primary text-primary-foreground">Vue.js</Badge>
                  <Badge className="bg-primary text-primary-foreground">Kafka</Badge>
                  <Badge className="bg-primary text-primary-foreground">Red Hat Podman</Badge>
                </div>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card border-0 hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-white">Double BERT Decomposed Bilinear Net</CardTitle>
                <CardDescription className="text-gray-300">Master's Research Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Deep learning model for predicting article popularity on Taiwan's PTT platform, analyzing content and
                  emotional tone using advanced NLP techniques.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">PyTorch</Badge>
                  <Badge className="bg-primary text-primary-foreground">BERT</Badge>
                  <Badge className="bg-primary text-primary-foreground">NLP</Badge>
                  <Badge className="bg-primary text-primary-foreground">Deep Learning</Badge>
                </div>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Research
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">Experience & Education</h2>

          <div className="space-y-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white">IBM Taiwan</CardTitle>
                    <CardDescription className="text-gray-300">Full-Stack Developer</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-gray-400 text-gray-200 bg-gray-800/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    2021-2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-200 space-y-2">
                  <li>• Led development of banking platform serving thousands of customers</li>
                  <li>• Implemented AI-powered procurement decision systems</li>
                  <li>• Modernized legacy AS400 systems with cloud-native architecture</li>
                  <li>• Established CI/CD pipelines reducing deployment time by 60%</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white">National Dong Hwa University</CardTitle>
                    <CardDescription className="text-gray-300">Master of Science - Computer Science</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-gray-400 text-gray-200 bg-gray-800/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    2021-2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-3">
                  Specialized in AI/ML and Deep Learning with focus on NLP applications.
                </p>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-4 h-4" />
                  <span>Merit Award (First Place) - NDHU CSIE Project Contest</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-white">National Dong Hwa University</CardTitle>
                    <CardDescription className="text-gray-300">Bachelor of Science - Computer Science</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-gray-400 text-gray-200 bg-gray-800/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    2015-2020
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Foundation in computer science with emphasis on software engineering and algorithms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg">Additional Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Deep Pariture - Optical Music Recognition</CardTitle>
                <CardDescription className="text-gray-300">Mobile AI Application</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Mobile app that converts sheet music images to playable audio using Mobile ResNet and Faster RCNN for
                  symbol recognition, outputting MusicXML and WAV files.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-secondary text-secondary-foreground">Mobile ResNet</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">Faster RCNN</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">Computer Vision</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-white">Fake Bye Bye - Product Detection</CardTitle>
                <CardDescription className="text-gray-300">NLP & Web Scraping</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">
                  Web application that analyzes e-commerce product authenticity using NLP techniques, web scraping with
                  BeautifulSoup, and Flask for the user interface.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-secondary text-secondary-foreground">Python</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">Flask</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">BeautifulSoup</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">NLP</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="glass-card border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
              <p className="text-gray-200 mb-8 text-pretty">
                I'm always interested in discussing new opportunities, innovative projects, and collaborations in
                full-stack development and AI/ML.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" className="border-gray-400 text-gray-200 hover:bg-gray-700/50 bg-gray-800/30">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass p-6 rounded-lg">
            <p className="text-white/90 drop-shadow">© 2024 Kuan Wei Chen. Built with Next.js and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
