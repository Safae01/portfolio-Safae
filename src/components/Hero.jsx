"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Développeuse Front-End", "Créatrice d'expériences web", "Passionnée de React", "UI/UX Enthusiast"]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearInterval(roleInterval)
    }
  }, [])

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-16 relative">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x / 15,
            bottom: mousePosition.y / 15,
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold hover:scale-110 transition-transform duration-300 shadow-2xl animate-bounce">
              SB
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Bonjour, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
                Safae Benmouna
              </span>
            </h1>

            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-600 animate-in fade-in duration-500">{roles[currentRole]}</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Je transforme vos idées en expériences web modernes, intuitives et performantes avec une attention
            particulière aux détails et à l'expérience utilisateur.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projets"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Découvrir mes projets
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/cv-safae-benmouna.pdf"
              download="CV-Safae-Benmouna.pdf"
              className="group inline-flex items-center justify-center px-6 py-3 border-2 border-purple-500 text-purple-500 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Télécharger CV
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/Safae01", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/safae-benmouna-29079b266/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sasabenmouna@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="group p-3 rounded-full bg-gray-100/50 backdrop-blur hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  )
}
