import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:harshcode0907@gmail.com?subject=Let%27s%20Collaborate&body=Hi%20Harsh%2C%0A%0AI%27d%20like%20to%20discuss...",
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-joshi-5a21a0328",
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/harshh-debug",
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/HarshJoshi92674",
      external: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.05 3h3.65l-7.95 9.08L21.5 21h-6.4l-4.57-5.72L5.25 21H1.6l8.63-9.86L2.5 3h6.45l4.11 5.18L17.05 3z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  const services = [
    { name: "UI/UX Design", to: "/services" },
    { name: "Web Development", to: "/services" },
    { name: "Frontend Design", to: "/services" },
    { name: "Backend Development", to: "/services" },
    { name: "AI Integration", to: "/services" },
  ];

  return (
    <footer className="relative bg-black border-t border-gray-800/50 mt-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-[#7d4a1f] to-[#8b4513] rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-gradient-to-l from-[#8b4513] to-[#7d4a1f] rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent">
                Harsh Joshi
              </h3>
              <p className="text-gray-400 text-sm mt-2">Full Stack Developer</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating digital experiences that make a
              difference. Let's build something amazing together.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) =>
                social.external ? (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-900/50 border border-gray-800/50 rounded-lg text-gray-400 hover:text-[#7d4a1f] hover:border-[#7d4a1f]/50 transition-all duration-300 hover:bg-gray-800/50"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ) : (
                  <NavLink key={index} to={social.href}>
                    {social.icon}
                  </NavLink>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-[#7d4a1f] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-lg">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <NavLink
                    to={service.to}
                    className="text-gray-400 text-sm hover:text-[#7d4a1f] transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-medium text-lg">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="h-4 w-4 text-[#7d4a1f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>harshcode0907@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="h-4 w-4 text-[#7d4a1f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Ghaziabad, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <svg className="h-4 w-4 text-[#7d4a1f] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Available for freelance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7d4a1f]/30 to-transparent"></div>

        {/* Bottom section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Harsh. All rights reserved.
          </p>
        </div>

        {/* Back to top */}
        <div className="absolute right-5 -top-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-3 bg-[#7d4a1f] text-white rounded-lg hover:bg-[#8b4513] transition-all duration-300 hover:shadow-[0_0_20px_0_#7d4a1f]/20 group"
            aria-label="Back to top"
          >
            <svg className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
