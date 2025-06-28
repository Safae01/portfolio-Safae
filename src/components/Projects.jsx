"use client"

import { useState } from "react"
import { ExternalLink, Github, Eye } from "lucide-react"

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: "Clone du site web de Marjane",
      description: "Clone de la plateforme e‑commerce officielle du groupe, proposant plus de 6 000 références au même prix qu’en magasin.",
      image: "/marjane.png",
      technologies: ["JavaScript", "CSS", "html", ],
      liveUrl: "https://safae01.github.io/MARJANE/",
      githubUrl: "https://github.com/Safae01/MARJANE",
      featured: false,
    },
    {
      title: "Localbook",
      description:
        "Fromtend de la platforme localbook de location des logements (Si vous voulez voir lapplication full stack vous pouver consulter le code en github repo'localbook') ",
      image: "/localbook.jpg",
      technologies: ["React ", "tailwind"],
      liveUrl: "https://localbook-front-end.vercel.app/",
      githubUrl: "https://github.com/Safae01/localbook-frontEnd",
      featured: true,
    },
    {
      title: "DronDrop",
      description: "Site Web de la livraison de colis par drone.",
      image: "/drondrop.png",
      technologies: ["html", "css", "JavaScript"],
      liveUrl: "https://safae01.github.io/DronDrop/",
      githubUrl: "https://github.com/Safae01/DronDrop",
      featured: false,
    },
    {
      title: "Piano-Game",
      description:
        "Jeu de piano avec alphabets",
      image: "/piano.png",
      technologies: ["React Native", "JavaScript", "API REST", "Machine Learning"],
      liveUrl: "https://safae01.github.io/Piano-Game/",
      githubUrl: "https://github.com/Safae01/Piano-Game",
      featured: false,
    },
  ]

  return (
    <section id="projets" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Projets</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une sélection de projets qui démontrent ma passion pour l'innovation et l'excellence technique
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer border-0 rounded-lg shadow-lg ${
                  project.featured ? "bg-gradient-to-br from-purple-50 to-pink-50" : "bg-white"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <button className="inline-flex items-center px-3 py-1 bg-white/20 text-white border border-white/30 rounded hover:bg-white/30 backdrop-blur-sm text-sm">
                        <Eye className="mr-2 h-4 w-4" />
                        Aperçu
                      </button>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded">
                        ⭐ Projet phare
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 border border-gray-200 text-gray-700 rounded text-xs transition-all duration-300 hover:scale-110 ${
                          hoveredProject === index ? "border-purple-500 text-purple-600" : ""
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:scale-105 transition-all duration-300 text-sm group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                      Voir le site
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-purple-500 text-purple-500 rounded hover:scale-105 transition-all duration-300 text-sm group/btn bg-white"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
