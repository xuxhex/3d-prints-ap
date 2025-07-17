import Link from "next/link"
import Image from "next/image"
import { ArrowRight, PrinterIcon as Printer3d, Package, Truck, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Custom 3D Printing Solutions by CatMeaw
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  From concept to creation, we bring your ideas to life with precision 3D printing and expert
                  development.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/shop">
                    Shop Quick Prints <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="3D Printing Showcase"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose CatMeaw?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine cutting-edge technology with expert craftsmanship to deliver exceptional 3D printing
                solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Printer3d className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Custom Development</h3>
              <p className="text-center text-sm text-muted-foreground">
                Expert design and development services for your unique 3D printing needs.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <CreditCard className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Transparent Pricing</h3>
              <p className="text-center text-sm text-muted-foreground">
                Clear, upfront pricing with no hidden fees or surprises.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Truck className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Fast Shipping</h3>
              <p className="text-center text-sm text-muted-foreground">
                Quick and reliable shipping options to get your prints to you on time.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Package className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Ready-to-Ship Prints</h3>
              <p className="text-center text-sm text-muted-foreground">
                Browse our collection of quick prints available for immediate shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Prints Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Quick Prints</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready-to-ship 3D prints for immediate purchase. No waiting for custom development.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "Cat Figurine",
                price: "$24.99",
                image: "/placeholder.svg?height=300&width=300",
                description: "Detailed cat figurine with articulated joints.",
              },
              {
                title: "Smartphone Stand",
                price: "$19.99",
                image: "/placeholder.svg?height=300&width=300",
                description: "Adjustable smartphone stand with cable management.",
              },
              {
                title: "Desk Organizer",
                price: "$34.99",
                image: "/placeholder.svg?height=300&width=300",
                description: "Modular desk organizer with multiple compartments.",
              },
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="font-semibold">{item.price}</p>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild size="lg">
              <Link href="/shop">
                View All Quick Prints <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Start Your 3D Printing Project?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today to discuss your custom 3D printing needs or browse our quick prints for immediate
                purchase.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
