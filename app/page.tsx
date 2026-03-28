"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Dumbbell, Flame, Target, Leaf, Check, Phone, Mail, MapPin } from "lucide-react"

// Animation hook for scroll reveal
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="font-heading text-2xl lg:text-3xl tracking-wider text-foreground">
            IRON & OAK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="#classes" className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide">
              Classes
            </Link>
            <Link href="#membership" className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide">
              Membership
            </Link>
            <Link href="#about" className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide">
              About
            </Link>
            <Link href="#coaches" className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide">
              Coaches
            </Link>
            <Link
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="px-4 py-6 flex flex-col gap-4">
              <Link
                href="#classes"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide py-2"
              >
                Classes
              </Link>
              <Link
                href="#membership"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide py-2"
              >
                Membership
              </Link>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide py-2"
              >
                About
              </Link>
              <Link
                href="#coaches"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-light tracking-wide py-2"
              >
                Coaches
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide text-center hover:bg-primary/90 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Iron & Oak Gym interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(232, 255, 0, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(232, 255, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-wider text-foreground mb-6 text-balance">
          BUILT TO PUSH
          <span className="block text-primary">LIMITS</span>
        </h1>
        <p className="text-foreground/70 text-lg sm:text-xl lg:text-2xl font-light max-w-2xl mx-auto mb-10 text-pretty">
          Chicago&apos;s most serious training facility. No excuses. Just results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-widest hover:bg-primary/90 transition-colors"
          >
            JOIN NOW
          </Link>
          <Link
            href="#classes"
            className="border border-foreground/30 text-foreground px-8 py-4 text-sm font-medium tracking-widest hover:border-foreground hover:bg-foreground/5 transition-colors"
          >
            VIEW CLASSES
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}

// Classes Section
function ClassesSection() {
  const { ref, isVisible } = useScrollReveal()

  const classes = [
    {
      icon: Dumbbell,
      title: "Strength Training",
      description: "Compound lifts, progressive overload, real results",
      image: "/images/strength-training.jpg",
      schedule: "Mon, Wed, Fri — 6AM, 12PM, 6PM"
    },
    {
      icon: Flame,
      title: "HIIT",
      description: "High intensity, maximum burn, 45 minute sessions",
      image: "/images/hiit-training.jpg",
      schedule: "Tue, Thu, Sat — 7AM, 5PM"
    },
    {
      icon: Target,
      title: "Boxing",
      description: "Technique, power and conditioning combined",
      image: "/images/boxing.jpg",
      schedule: "Mon, Wed, Fri — 7AM, 7PM"
    },
    {
      icon: Leaf,
      title: "Yoga & Recovery",
      description: "Because the best athletes know when to rest",
      image: "/images/yoga-recovery.jpg",
      schedule: "Tue, Thu, Sat — 8AM, 6PM"
    }
  ]

  return (
    <section id="classes" className="py-24 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest mb-4">WHAT WE OFFER</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground">
            TRAIN HARD
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((classItem, index) => (
            <div
              key={classItem.title}
              className={`group relative overflow-hidden bg-card rounded transition-all duration-500 hover:ring-2 hover:ring-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={classItem.image}
                  alt={classItem.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-20">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <classItem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl tracking-wider text-foreground mb-2">
                  {classItem.title}
                </h3>
                <p className="text-muted-foreground font-light mb-4">{classItem.description}</p>
                <p className="text-xs text-primary/80 tracking-wide">{classItem.schedule}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Membership Section
function MembershipSection() {
  const { ref, isVisible } = useScrollReveal()

  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      features: [
        "Full gym access",
        "Locker room access",
        "Free parking",
        "Open 5AM - 11PM"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "$89",
      period: "/month",
      features: [
        "Everything in Basic",
        "All classes included",
        "1 guest pass per month",
        "Nutrition app access",
        "Priority equipment booking"
      ],
      highlighted: true
    },
    {
      name: "Elite",
      price: "$149",
      period: "/month",
      features: [
        "Everything in Pro",
        "4 personal training sessions",
        "Custom nutrition guidance",
        "Priority class booking",
        "Unlimited guest passes"
      ],
      highlighted: false
    }
  ]

  return (
    <section id="membership" className="py-24 lg:py-32 bg-card">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest mb-4">MEMBERSHIP</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground">
            PICK YOUR PLAN
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded transition-all duration-500 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-2 ring-primary scale-105"
                  : "bg-background border border-border hover:border-primary/50"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-medium px-4 py-1 tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <h3 className={`font-heading text-2xl tracking-wider mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-heading text-5xl tracking-wider ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-light ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm font-light ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full py-3 text-center text-sm font-medium tracking-widest transition-colors ${
                  plan.highlighted
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                GET STARTED
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-light mt-8">
          No lock-in contracts. Cancel anytime.
        </p>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const { ref, isVisible } = useScrollReveal()

  const stats = [
    { value: "500+", label: "Members" },
    { value: "2015", label: "Est." },
    { value: "12", label: "Expert Coaches" }
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-sm tracking-widest mb-4">WHO WE ARE</p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground mb-6 text-balance">
              FORGED IN CHICAGO SINCE 2015
            </h2>
            <p className="text-foreground/70 text-lg font-light leading-relaxed mb-8 text-pretty">
              Iron & Oak was built for people who are serious about training. No gimmicks, no fluff — just quality equipment, expert coaches and a community that pushes each other to be better.
            </p>
            <p className="text-foreground/60 font-light leading-relaxed text-pretty">
              We believe in hard work, dedication, and the transformative power of consistent training. Whether you&apos;re a seasoned athlete or just starting your fitness journey, you&apos;ll find a home here.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-card p-6 lg:p-8 rounded text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="font-heading text-3xl lg:text-4xl tracking-wider text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-light tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Coaches Section
function CoachesSection() {
  const { ref, isVisible } = useScrollReveal()

  const coaches = [
    {
      name: "Marcus T.",
      role: "Head Strength Coach",
      bio: "10 years competitive powerlifting experience",
      image: "/images/coach-marcus.jpg"
    },
    {
      name: "Zara K.",
      role: "HIIT & Boxing Coach",
      bio: "Former amateur boxing champion",
      image: "/images/coach-zara.jpg"
    },
    {
      name: "Daniel R.",
      role: "Yoga & Recovery",
      bio: "Certified sports therapist and yoga instructor",
      image: "/images/coach-daniel.jpg"
    }
  ]

  return (
    <section id="coaches" className="py-24 lg:py-32 bg-card">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest mb-4">MEET THE EXPERTS</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground">
            OUR TEAM
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {coaches.map((coach, index) => (
            <div
              key={coach.name}
              className={`group bg-background rounded overflow-hidden transition-all duration-500 hover:ring-2 hover:ring-primary ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl tracking-wider text-foreground mb-1">
                  {coach.name}
                </h3>
                <p className="text-primary text-sm tracking-wide mb-3">{coach.role}</p>
                <p className="text-muted-foreground font-light text-sm">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const { ref, isVisible } = useScrollReveal()
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus("submitting")
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormStatus("success")
    setTimeout(() => setFormStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest mb-4">READY TO START?</p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl tracking-wider text-foreground text-balance">
            STOP WAITING.<br />START TRAINING.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-foreground/80 mb-2 font-light">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-foreground/80 mb-2 font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="membership" className="block text-sm text-foreground/80 mb-2 font-light">
                Membership Interest
              </label>
              <select
                id="membership"
                name="membership"
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                <option value="">Select a plan</option>
                <option value="basic">Basic — $49/month</option>
                <option value="pro">Pro — $89/month</option>
                <option value="elite">Elite — $149/month</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-foreground/80 mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                placeholder="Tell us about your fitness goals..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-primary text-primary-foreground py-4 text-sm font-medium tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting" ? "SENDING..." : formStatus === "success" ? "MESSAGE SENT!" : "SEND MESSAGE"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="lg:pl-8">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-2xl tracking-wider text-foreground mb-4">
                  GET IN TOUCH
                </h3>
                <p className="text-foreground/60 font-light leading-relaxed text-pretty">
                  Ready to transform your training? Drop by the gym for a free tour, or reach out and we&apos;ll get you started.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wide mb-1">Call us</p>
                    <a href="tel:+13125550198" className="text-foreground font-light hover:text-primary transition-colors">
                      (312) 555-0198
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wide mb-1">Email us</p>
                    <a href="mailto:info@ironoakgym.com" className="text-foreground font-light hover:text-primary transition-colors">
                      info@ironoakgym.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs tracking-wide mb-1">Visit us</p>
                    <p className="text-foreground font-light">Chicago, Illinois</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground text-sm font-light">
                  Hours: Mon–Sat, 5AM – 11PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-light">
            © 2026 Iron & Oak Gym. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs font-light">
            Website by{" "}
            <a
              href="https://forgestudio.one"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Forge Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ClassesSection />
      <MembershipSection />
      <AboutSection />
      <CoachesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
