"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                Safae.dev
              </h3>
              <p className="text-gray-600">Développeuse Front-End passionnée</p>
              <p className="text-sm text-gray-500 mt-1">Créons ensemble l'avenir du web ✨</p>
            </div>

            <div className="flex space-x-4 mb-6 md:mb-0">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:safae@example.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group p-3 rounded-full bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600 flex items-center justify-center text-sm">
              © 2024 Safae Benmouna. Fait avec <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
              et beaucoup de café ☕
            </p>
            <p className="text-xs text-gray-500 mt-2">Tous droits réservés • Conçu et développé avec passion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
