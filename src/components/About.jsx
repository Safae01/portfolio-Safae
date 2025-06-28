"use client"

import { useState } from "react"
import { Code, Palette, Zap, Coffee, Heart, Star } from "lucide-react"

export function About() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const stats = [
    { number: "4+", label: "Projets réalisés", icon: Star },
    { number: "1+", label: "Années d'expérience", icon: Code },
    { number: "∞", label: "Tasses de café", icon: Coffee },
    { number: "100%", label: "Passion", icon: Heart },
  ]

  const services = [
    {
      icon: Code,
      title: "Développement Frontend",
      description: "Applications React/javaScript performantes avec du code propre et maintenable",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces utilisateur intuitives et esthétiquement plaisantes",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Optimisation Performance",
      description: "Sites web ultra-rapides optimisés pour tous les appareils",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">moi</span>
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Passionnée par l'innovation et l'excellence technique, je crée des expériences web qui marquent les esprits
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white w-16 h-16 mx-auto mb-3 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Développeuse front-end avec plus d'1 an d'expérience, je suis passionnée par la création
                  d'interfaces utilisateur modernes, accessibles et performantes. Chaque ligne de code que j'écris est
                  pensée pour offrir la meilleure expérience possible aux utilisateurs.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Spécialisée dans l'écosystème React et les technologies web modernes, je m'efforce constamment
                  d'apprendre et d'adopter les meilleures pratiques du développement front-end. Mon approche combine
                  créativité technique et rigueur méthodologique.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Quand je ne code pas, vous me trouverez en train de dessiner, de lire sur les nouvelles tendances
                  UX/UI, ou d'explorer de nouveaux frameworks JavaScript. J'aime aussi partager mes connaissances à
                  travers des articles et des conférences.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl bg-white rounded-lg border-0 p-6 shadow-lg ${
                    hoveredCard === index ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
