import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sasabenmouna@gmail.com",
      href: "mailto:sasabenmouna@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "0700834538",
      href: "tel:0700834538",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Maroc,Oujda",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Travaillons{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Ensemble</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons-en ! Je suis toujours enthousiaste à l'idée de relever de nouveaux
            défis.
          </p>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-6">Parlons de votre projet</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Que vous ayez besoin d'un site web moderne, d'une application interactive ou d'une refonte complète, je
              suis là pour transformer vos idées en réalité digitale exceptionnelle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map(({ icon: Icon, title, value, href, color }) => (
              <div key={title} className="text-center group hover:scale-105 transition-transform duration-300">
                <div
                  className={`p-4 rounded-full bg-gradient-to-r ${color} text-white w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <a href={href} className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  {value}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="p-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 max-w-md mx-auto">
              <h4 className="font-semibold mb-2">Temps de réponse</h4>
              <p className="text-sm text-gray-600">
                Je réponds généralement dans les 24h. Pour les projets urgents, n'hésitez pas à me contacter directement
                par téléphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
