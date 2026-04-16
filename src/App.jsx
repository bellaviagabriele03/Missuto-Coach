import { Mail, MessageCircle, Phone } from "lucide-react"

function App() {
  const profileImage =
    "/img/icona-profilo-carmelo.jpeg"

  const fullName = "Missuto Carmelo"
  const role = "Personal Trainer"

  const whatsappLink = "https://wa.me/393921806296"
  const emailLink = "mailto:Missutocarmeloj@gmail.com"
  const phoneLink = "tel:+393921806296"

  const links = [
    {
      label: "WhatsApp",
      href: whatsappLink,
      icon: <MessageCircle size={20} />,
      external: true,
    },
    {
      label: "E-mail",
      href: emailLink,
      icon: <Mail size={20} />,
      external: false,
    },
    {
      label: "Telefono",
      href: phoneLink,
      icon: <Phone size={20} />,
      external: false,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white px-4 py-6 flex items-center justify-center">
      <section className="w-full max-w-sm rounded-[32px] border border-zinc-800 bg-zinc-950/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-zinc-700/20 blur-xl scale-110" />
            <img
              src={profileImage}
              alt={fullName}
              className="relative h-28 w-28 rounded-full object-cover border border-zinc-700 shadow-lg"
            />
          </div>

          <h1 className="mt-5 text-2xl font-semibold tracking-tight text-white">
            {fullName}
          </h1>

          <p className="mt-2 text-sm text-zinc-400">{role}</p>

          <div className="mt-4 h-px w-16 bg-zinc-800" />

          <h2 className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Contattami
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-800 active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-200 transition group-hover:bg-zinc-700">
                  {link.icon}
                </span>
                <span className="text-sm font-medium text-white">
                  {link.label}
                </span>
              </div>

              <span className="text-zinc-500 transition group-hover:text-zinc-300">
                →
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-8 border-t border-zinc-800 pt-4 text-center text-[11px] text-zinc-500">
          Powered by{" "}
          <span className="font-medium text-zinc-300">
            Gabriele Bellavia
          </span>
        </footer>
      </section>
    </main>
  )
}

export default App