'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { motion, AnimatePresence } from 'framer-motion'
import { Twitter, X, Github, Globe, Book } from 'lucide-react'

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
      date: 'Nov 16, 2024',
      category: 'frontend'
    },
    {
      id: 2,
      text: 'Last night I figured out how to setup vercel, github, vercel analytics, npm',
      date: 'Nov 15, 2024',
      category: 'deployment'
    },
    {
      id: 3,
      text: 'I finally managed to make this page responsive. Will ship more often now.',
      date: 'Nov 14, 2024',
      category: 'frontend'
    },
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
      title: "Supabase Authentication",
      description: "Planning to implement user authentication using Supabase Auth with Google and GitHub social login",
      techUsed: ["Supabase Auth", "Next.js", "OAuth"],
      dateAdded: "Coming Soon",
      status: "planned"
    },
    {
      id: 3,
      title: "Database Setup with Supabase",
      description: "Setting up PostgreSQL database using Supabase for storing user data and progress tracking",
      techUsed: ["Supabase", "PostgreSQL"],
      dateAdded: "Nov 17, 2024",
      status: "in-progress"
    },
    {
      id: 4,
      title: "Real-time Features",
      description: "Implementing real-time updates and notifications using Supabase's real-time subscriptions",
      techUsed: ["Supabase Realtime", "React"],
      dateAdded: "Coming Soon",
      status: "planned"
    }
  ]

// Also, let's add Supabase to your technologies array:
const technologies: Technology[] = [
    {
      name: "Next.js",
      icon: "⚡",
      color: "bg-black",
      proficiency: 60,
      learningStatus: 'learning'
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      color: "bg-blue-500",
      proficiency: 75,
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
      proficiency: 65,
      learningStatus: 'familiar'
    },
    {
      name: "Supabase",
      icon: "🔋",
      color: "bg-green-500",
      proficiency: 30,
      learningStatus: 'learning'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-xl font-bold text-gray-800">
              SaaS Journey
            </a>
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/therealprineur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Watch this page become a SaaS in 90 days
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Just a humble start. Follow along as I build this from scratch.
          </p>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            By visiting daily, you'll see every stage of this transformation. I'll ship what I learn
            <span className="text-orange-500"> *as I learn it*</span>, turning this sandbox into a 
            <span className="text-blue-500"> functional SaaS</span> to solve an actual problem.
          </p>
          <Button 
            asChild
            className="bg-blue-500 hover:bg-blue-600 transition-colors"
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
              <h2 className="text-3xl font-bold text-gray-900">
                Console.log(Progress)
              </h2>
              <div className="ml-4 h-[2px] flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
            </div>
            
            <div className="space-y-4">
              {logItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-500" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <p className="text-gray-700">{item.text}</p>
                          <span className="text-sm text-gray-400 ml-4 whitespace-nowrap">{item.date}</span>
                        </div>
                        <div className="mt-2">
                          <span className={`
                            text-xs font-medium px-2 py-1 rounded-full
                            ${item.category === 'frontend' ? 'bg-blue-100 text-blue-700' : ''}
                            ${item.category === 'backend' ? 'bg-green-100 text-green-700' : ''}
                            ${item.category === 'database' ? 'bg-purple-100 text-purple-700' : ''}
                            ${item.category === 'deployment' ? 'bg-orange-100 text-orange-700' : ''}
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
                className="text-gray-600 hover:text-gray-700"
              >
                Show More Updates
              </Button>
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

        {/* Tech Stack */}
        <section className="mt-20 bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tech Stack & Learning Progress
            </h2>
            <div className="grid gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-semibold text-lg">{tech.name}</h3>
                    </div>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${tech.learningStatus === 'learning' ? 'bg-blue-100 text-blue-800' : ''}
                      ${tech.learningStatus === 'familiar' ? 'bg-green-100 text-green-800' : ''}
                      ${tech.learningStatus === 'confident' ? 'bg-purple-100 text-purple-800' : ''}
                    `}>
                      {tech.learningStatus}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${tech.color}`}
                      style={{ width: `${tech.proficiency}%` }}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Proficiency: {tech.proficiency}%
                  </div>
                </motion.div>
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
            <Alert className="bg-gray-800 text-white border-none">
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
      <footer className="bg-white border-t mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">Building in public • Learning in public • Growing in public</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">About</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-600">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}