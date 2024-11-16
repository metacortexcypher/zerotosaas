'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, X, Github, Globe } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/theme-toggle'

interface Feature {
  id: number;
  title: string;
  description: string;
  techUsed: string[];
  dateAdded: string;
  status: 'completed' | 'in-progress' | 'planned';
}

interface Technology {
  name: string;
  icon: string;
  color: string;
  proficiency: number;
  learningStatus: 'learning' | 'familiar' | 'confident';
}

interface LearningUpdate {
  id: number;
  text: string;
  date: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment';
}

interface Project {
  id: number;
  title: string;
  tagline: string;
  description: string;
  category: 'SaaS' | 'Tool' | 'Community';
  status: 'in-progress' | 'completed' | 'planned';
  techStack: string[];
  features: string[];
  links?: {
    github?: string;
    demo?: string;
    twitter?: string;
  };
  thumbnail?: string;
}

export default function Home() {
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const logItems: LearningUpdate[] = [
    {
      id: 1,
      text: 'Still figuring out how to make this website mobile responsive',
      date: 'Oct 30, 2024',
      category: 'frontend'
    },
    {
      id: 2,
      text: 'Last night I figured out how to setup vercel, github, vercel analytics, npm',
      date: 'Oct 30, 2024',
      category: 'deployment'
    },
    {
      id: 3,
      text: 'I finally managed to make this page responsive. Will ship more often now.',
      date: 'Nov 2, 2024',
      category: 'frontend'
    },
  ]



  const technologies: Technology[] = [
    {
      name: "Next.js",
      icon: "⚡",
      color: "bg-black",
      proficiency: 30,
      learningStatus: 'learning'
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "bg-blue-500",
      proficiency: 50,
      learningStatus: 'familiar'
    },
    {
      name: "TypeScript",
      icon: "📘",
      color: "bg-blue-600",
      proficiency: 45,
      learningStatus: 'learning'
    },
    {
      name: "React",
      icon: "⚛️",
      color: "bg-blue-400",
      proficiency: 40,
      learningStatus: 'familiar'
    },
    {
      name: "Supabase",
      icon: "🔋",
      color: "bg-green-500",
      proficiency: 30,
      learningStatus: 'learning'
    },
    {
      name: "Framer Motion",
      icon: "🎬",
      color: "bg-purple-500",
      proficiency: 20,
      learningStatus: 'learning'
    },
    {
      name: "Chart.js",
      icon: "📊",
      color: "bg-red-500",
      proficiency: 50,
      learningStatus: 'learning'
    }
  ]
  const features: Feature[] = [
    {
      id: 1,
      title: "Responsive Design",
      description: "Implemented responsive design using Tailwind CSS and learned about mobile-first approach",
      techUsed: ["Tailwind CSS", "Next.js"],
      dateAdded: "Nov 16, 2024",
      status: "completed"
    },
    {
      id: 2,
      title: "Dark Mode Toggle",
      description: "Adding a sleek dark mode toggle with smooth transitions and persistent user preference",
      techUsed: ["Next.js", "Tailwind CSS", "LocalStorage"],
      dateAdded: "Coming Soon",
      status: "completed"
    },
    {
      id: 3,
      title: "Code Snippet Sharing",
      description: "Feature to share and display code snippets with syntax highlighting and copy functionality",
      techUsed: ["React", "Prism.js", "Supabase"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 4,
      title: "Learning Timer",
      description: "Simple Pomodoro timer to track coding sessions with daily stats and streaks",
      techUsed: ["React", "LocalStorage", "Chart.js"],
      dateAdded: "Coming Soon",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Resource Collection",
      description: "Curated list of learning resources with filtering and bookmarking capabilities",
      techUsed: ["Next.js", "Supabase", "React"],
      dateAdded: "Coming Soon",
      status: "in-progress"
    },
    {
      id: 6,
      title: "Quick Notes & ToDo",
      description: "Simple markdown notes and todo list for tracking learning goals",
      techUsed: ["React", "Markdown-it", "Supabase"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 7,
      title: "Progress Timeline",
      description: "Interactive timeline showing learning milestones with animations",
      techUsed: ["Framer Motion", "React", "Tailwind CSS"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 8,
      title: "GitHub Integration",
      description: "Display GitHub activity and repository stats in a visually appealing way",
      techUsed: ["GitHub API", "React", "Chart.js"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 9,
      title: "Achievement System",
      description: "Fun badges and achievements for completing learning goals and consistency",
      techUsed: ["Supabase", "React", "LocalStorage"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 10,
      title: "Challenge Generator",
      description: "Random coding challenge generator with difficulty levels and solutions",
      techUsed: ["React", "Supabase", "Markdown"],
      dateAdded: "Coming Soon",
      status: "planned"
    }
]
  const projects: Project[] = [
    {
      id: 1,
      title: "Agency Directory",
      tagline: "A full-stack directory platform for discovering and connecting with agencies",
      description: "Building a comprehensive directory platform from scratch using Next.js to learn core full-stack concepts while adding unique features missing from no-code solutions.",
      category: 'SaaS',
      status: 'in-progress',
      techStack: [
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "TypeScript",
        "Server Actions",
      ],
      features: [
        "Advanced search and filtering",
        "Agency profiles with portfolio showcase",
        "Review and rating system",
        "Verification system",
        "Custom categorization"
      ],
      links: {
        
        
      }
    },
    {
      id: 2,
      title: "Is My Indie Idea Taken?",
      tagline: "Indie market research and idea validation tool",
      description: "A tool that helps indie hackers validate their ideas by finding similar products, checking domain availability, and providing differentiation strategies using AI and data scraping.",
      category: 'Tool',
      status: 'in-progress',
      techStack: [
        "Next.js",
        "OpenAI API",
        "Cheerio",
        "Domain API",
        "Twitter API",
        "Supabase"
      ],
      features: [
        "Similar product detection",
        "Domain availability checker",
        "Competitor analysis",
        "AI-powered differentiation suggestions",
        "Idea protection monitoring"
      ],
      links: {
        
      }
    },
    {
      id: 3,
      title: "Building in Public Archives",
      tagline: "The fun side of indie hacking - stories, drama, and wisdom",
      description: "A fun collection of building in public stories, dramas, and resources including vocabulary, playbooks, and community gossip.",
      category: 'Community',
      status: 'in-progress',
      techStack: [
        "Next.js",
        "Supabase",
        "Tailwind CSS",
        "MDX",
        "React"
      ],
      features: [
        "Curated drama stories",
        "Indie hacking vocabulary",
        "Building in public playbook",
        "Community highlights",
        "Weekly gossip roundup"
      ],
      links: {
        demo: "#",
        twitter: "#"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              SaaS Journey
            </a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="https://twitter.com/therealprineur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Watch this page become a SaaS in 90 days
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Just a humble start. Follow along as I build this from scratch.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            By visiting daily, you will see every stage of this transformation. I will ship what I learn
            <span className="text-orange-500 dark:text-orange-400"> *as I learn it*</span>, turning this sandbox into a 
            <span className="text-blue-500 dark:text-blue-400"> functional SaaS</span> to solve an actual problem.
          </p>
          <Button 
            asChild
            className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
          >
            <a 
              href="https://twitter.com/therealprineur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Twitter className="h-5 w-5" />
              Follow the Journey
            </a>
          </Button>
        </motion.div>

        {/* Log Section */}
        <section className="mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Console.log(Progress)
              </h2>
              <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
            </div>
            
            <div className="space-y-4">
              {logItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="text-gray-700 dark:text-gray-200">{item.text}</p>
                          <span className="text-sm text-gray-400 dark:text-gray-500 ml-4 whitespace-nowrap">
                            {item.date}
                          </span>
                        </div>
                        <div className="mt-2">
                          <span className={`
                            text-xs font-medium px-2 py-1 rounded-full
                            ${item.category === 'frontend' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : ''}
                            ${item.category === 'backend' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : ''}
                            ${item.category === 'database' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300' : ''}
                            ${item.category === 'deployment' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300' : ''}
                          `}>
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              >
                Show More Updates
              </Button>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20 bg-gray-50 dark:bg-gray-900 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Tech Stack & Learning Progress
            </h2>
            <div className="grid gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {tech.name}
                      </h3>
                    </div>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${tech.learningStatus === 'learning' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' : ''}
                      ${tech.learningStatus === 'familiar' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''}
                      ${tech.learningStatus === 'confident' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' : ''}
                    `}>
                      {tech.learningStatus}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${tech.color}`}
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Proficiency: {tech.proficiency}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase */}
        <section className="mt-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Feature Roadmap
              </h2>
              <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg text-gray-900">{feature.title}</h3>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${feature.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      ${feature.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${feature.status === 'planned' ? 'bg-blue-100 text-blue-800' : ''}
                    `}>
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 text-sm text-gray-400">
                    Added: {feature.dateAdded}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Current Projects
              </h2>
              <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-gray-200 dark:from-gray-700 to-transparent" />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${project.category === 'SaaS' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' : ''}
                          ${project.category === 'Tool' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' : ''}
                          ${project.category === 'Community' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''}
                        `}
                      >
                        {project.category}
                      </div>
                      <div
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${project.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''}
                          ${project.status === 'in-progress' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' : ''}
                          ${project.status === 'planned' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' : ''}
                        `}
                      >
                        {project.status}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <div
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </div>
                      ))}
                      {project.techStack.length > 3 && (
                        <div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          +{project.techStack.length - 3} more
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 mt-4">
                      {project.links?.github && (
                        
                        <a  href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.links?.demo && (
                        
                        <a  href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Globe className="h-5 w-5" />
                        </a>
                      )}
                      {project.links?.twitter && (
                        
                        <a  href={project.links.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Alert Box */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-4 right-4 max-w-sm"
          >
            <Alert className="bg-gray-800 dark:bg-gray-700 text-white border-none">
              <AlertDescription className="flex items-start gap-2">
                <div className="flex-1">
                  Thank you awesome human for checking out this page! ❤️
                  <br />
                  I just learned how to install npm and set up analytics! 🚀
                  <br />
                  I'm watching you... 👀
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-gray-200"
                  onClick={() => setShowAlert(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 dark:text-gray-400 text-sm">
            <p className="mb-2">Building in public • Learning in public • Growing in public</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">About</a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}