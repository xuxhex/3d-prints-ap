"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">CatMeaw</span>
            <span className="text-sm">3D Printing</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
            Quick Prints
          </Link>
          <Link href="/shipping" className="text-sm font-medium transition-colors hover:text-primary">
            Shipping
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get a Quote</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 grid gap-4">
            <Link href="/" className="text-sm font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium" onClick={toggleMenu}>
              Services
            </Link>
            <Link href="/pricing" className="text-sm font-medium" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href="/shop" className="text-sm font-medium" onClick={toggleMenu}>
              Quick Prints
            </Link>
            <Link href="/shipping" className="text-sm font-medium" onClick={toggleMenu}>
              Shipping
            </Link>
            <Link href="/contact" className="text-sm font-medium" onClick={toggleMenu}>
              Contact
            </Link>
            <Button asChild>
              <Link href="/contact" onClick={toggleMenu}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
