"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Why BalanX", href: "/#why" },
    { name: "How It Works", href: "/#how" },
    { name: "Products", href: "/#products" },
    { name: "Science", href: "/#science" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      // If it's a hash link and we're not on home page, navigate to home first
      if (window.location.pathname !== "/") {
        window.location.href = href
      } else {
        // If we're on home page, smooth scroll to section
        const element = document.querySelector(href.substring(1))
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else if (href === "/") {
      // For home page navigation
      window.location.href = href
    } else {
      // For other regular page navigation
      window.location.href = href
    }
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-ivory/95 backdrop-blur-md border-b border-stone-200" : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-8 h-8 bg-stone-800 rounded-xl flex items-center justify-center">
              <span className="text-stone-50 font-medium text-sm">B</span>
            </div>
            <span className="font-light text-xl text-stone-800">BalanX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="text-stone-600 hover:text-stone-800 transition-colors font-light cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-stone-600 hover:text-stone-800 hover:bg-light-green/10 font-light rounded-full px-6"
            >
              Support
            </Button>
            <Link href="/pre-order">
              <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 font-medium rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Shop
              </Button>
            </Link>
 
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5 text-stone-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-ivory/95 backdrop-blur-md border-l border-stone-200">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className="text-stone-600 hover:text-stone-800 transition-colors font-light text-lg cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t border-stone-200">
                  <Button
                    variant="ghost"
                    className="text-stone-600 hover:text-stone-800 hover:bg-light-green/10 font-light rounded-full"
                  >
                    Support
                  </Button>
                  <Button className="bg-stone-800 hover:bg-stone-900 text-stone-50 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    Shop
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
