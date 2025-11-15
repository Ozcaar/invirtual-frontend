export const FEATURES = [
  {
    icon: "material-symbols:palette-outline",
    title: "Diseños personalizables",
    description: "Elige entre cientos de plantillas elegantes y personalízalas con tus colores, fotos y estilo único.",
    gradient: "bg-gradient-primary",
  },
  {
    icon: "lucide:users-round",
    title: "Gestión de invitados",
    description: "Administra tu lista de invitados, envía recordatorios y mantén todo organizado en un solo lugar.",
    gradient: "bg-gradient-secondary",
  },
  {
    icon: "tdesign:check-double",
    title: "Confirmación de asistencia",
    description: "Recibe confirmaciones en tiempo real con nuestro sistema RSVP integrado y fácil de usar.",
    gradient: "bg-gradient-accent",
  },
  {
    icon: "lucide:smartphone",
    title: "Compatible con cualquier dispositivo",
    description: "Tus invitaciones se ven perfectas en móviles, tablets y computadoras. Acceso desde cualquier lugar.",
    gradient: "bg-gradient-primary-to-accent",
  },
]

export const STEPS_LANDING = [
  {
    number: "01",
    title: "Elige tu plantilla",
    description:
      "Explora nuestra colección de diseños profesionales para bodas, XV años, cumpleaños y eventos empresariales.",
    image: "/elegant-invitation-templates-gallery.jpg",
  },
  {
    number: "02",
    title: "Personaliza tu invitación",
    description: "Añade tus fotos, cambia colores, edita textos y ajusta cada detalle hasta que sea perfecto.",
    image: "/invitation-customization-interface-with-color-pick.jpg",
  },
  {
    number: "03",
    title: "Envía el enlace a tus invitados",
    description: "Comparte tu invitación por WhatsApp, email o redes sociales con un simple enlace.",
    image: "/sharing-invitation-link-on-mobile-phone.jpg",
  },
  {
    number: "04",
    title: "Administra confirmaciones",
    description: "Recibe respuestas en tiempo real, gestiona tu lista de invitados y mantén todo bajo control.",
    image: "/guest-management-dashboard-with-rsvp-responses.jpg",
  },
]

export const PRICING_PLANS = [
  {
    name: "Gratis",
    price: "$0",
    period: "/3 días",
    description: "Perfecto para probar la plataforma",
    features: [
      "Hasta 10 invitados",
      "3 plantillas básicas",
      "RSVP básico",
      "Marca de agua InviRtual",
      "Soporte por email",
    ],
    cta: "Empezar gratis",
    popular: false,
    gradient: "from-muted to-muted/50",
    btnText: "Comienza gratis"
  },
  {
    name: "Básico",
    price: "$29",
    period: "/1 año",
    description: "Ideal para eventos especiales",
    features: [
      "Invitados ilimitados",
      "Todas las plantillas premium",
      "RSVP avanzado con extras",
      "Sin marca de agua",
      "Personalización completa",
      "Estadísticas detalladas",
      "Soporte prioritario",
    ],
    cta: "Empezar ahora",
    popular: true,
    gradient: "from-primary via-secondary to-accent",
    btnText: "Empezar ahora"
  },
  {
    name: "Premium",
    price: "$50",
    period: "/1 año",
    description: "Para organizadores profesionales",
    features: [
      "Todo de Premium",
      "Múltiples eventos",
      "Diseños personalizados",
      "Dominio propio",
      "API de integración",
      "Gestor de cuenta dedicado",
      "Capacitación incluida",
    ],
    cta: "Contactar ventas",
    popular: false,
    gradient: "from-accent to-accent/50",
    btnText: "Contactar ventas"
  },
]

export const TESTIMONIALS = [
  {
    name: "María González",
    event: "Boda",
    image: "",
    text: "InviRtual hizo que nuestras invitaciones de boda fueran un sueño. Todos nuestros invitados quedaron encantados con el diseño elegante y la facilidad para confirmar asistencia.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    event: "XV Años",
    image: "",
    text: "Organizar los XV años de mi hija fue muy fácil gracias a InviRtual. La gestión de invitados y las confirmaciones en tiempo real nos ahorraron muchísimo tiempo.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    event: "Evento Empresarial",
    image: "",
    text: "Como organizadora de eventos corporativos, InviRtual se ha convertido en mi herramienta favorita. Profesional, elegante y súper funcional.",
    rating: 5,
  },
  {
    name: "Luis Torres",
    event: "Cumpleaños",
    image: "",
    text: "Creé la invitación para mi cumpleaños en menos de 10 minutos. El resultado fue increíble y todos mis amigos me preguntaron cómo lo hice.",
    rating: 5,
  },
  {
    name: "Sofia Hernández",
    event: "Baby Shower",
    image: "",
    text: "Las plantillas son hermosas y la personalización es muy intuitiva. Mi baby shower fue un éxito gracias a las invitaciones digitales de InviRtual.",
    rating: 5,
  },
  {
    name: "Roberto Díaz",
    event: "Aniversario",
    image: "",
    text: "Sorprendí a mi esposa con una invitación digital para nuestro aniversario. El diseño romántico y elegante fue perfecto para la ocasión.",
    rating: 5,
  },
]