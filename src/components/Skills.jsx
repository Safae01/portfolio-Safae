"use client"

import { useState } from "react"

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        
        { name: "HTML/CSS", level: 98, color: "from-purple-500 to-pink-500" },
        { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-blue-500" },
        { name: "React", level: 70, color: "from-blue-500 to-cyan-500" },
      ],
    },
    {
      title: "Backend & Base de données",
      skills: [
        { name: "php", level: 78, color: "from-green-600 to-green-800" },
        { name: "sql", level: 90, color: "from-green-500 to-green-700" },
        { name: "Mysql", level: 90, color: "from-blue-600 to-indigo-600" },
      ],
    },
    {
      title: "Outils & Technologies",
      skills: [
        { name: "Git", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Vite", level: 85, color: "from-yellow-400 to-yellow-600" },
      ],
    },
    {
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Responsive Design", level: 95, color: "from-green-400 to-blue-500" },
      ],
    },
  ]

  return (
    <section id="competences" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Compétences
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une expertise technique solide combinée à une passion pour l'innovation et l'apprentissage continu
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-lg"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillCategories[index % 4]?.skills[0]?.color || "from-purple-500 to-pink-500"}`}
                    />
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="space-y-2"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span
                          className={`px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm transition-all duration-300 ${
                            hoveredSkill === `${index}-${skillIndex}` ? "scale-110" : ""
                          }`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                            style={{
                              width: hoveredSkill === `${index}-${skillIndex}` ? `${skill.level}%` : "0%",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
