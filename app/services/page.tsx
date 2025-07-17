import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">3D Printing Development Services</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  From concept to creation, our expert team brings your ideas to life with precision and care.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="3D Printing Development"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Development Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a comprehensive range of 3D printing development services to meet your unique needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {[
              {
                title: "3D Modeling & Design",
                description:
                  "Professional 3D modeling and design services to bring your concepts to life with precision and attention to detail.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Prototyping",
                description:
                  "Rapid prototyping services to quickly test and iterate your designs before final production.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Small Batch Production",
                description:
                  "Small batch production runs for when you need multiple copies of your design with consistent quality.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Custom Solutions",
                description:
                  "Tailored 3D printing solutions for unique projects that require specialized expertise and equipment.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Material Consultation",
                description:
                  "Expert advice on selecting the right materials for your specific 3D printing project requirements.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                title: "Post-Processing",
                description:
                  "Professional finishing services including sanding, painting, and assembly for a polished final product.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <Button className="mt-4 bg-transparent" variant="outline" size="sm">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Our Development Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We follow a structured approach to ensure your 3D printing project is completed to the highest
                standards.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Consultation</h3>
                  <p className="text-muted-foreground">
                    We begin with a detailed consultation to understand your project requirements, goals, and
                    constraints.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Concept & Design</h3>
                  <p className="text-muted-foreground">
                    Our designers create detailed 3D models based on your specifications, with revisions until you're
                    satisfied.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Prototyping</h3>
                  <p className="text-muted-foreground">
                    We create initial prototypes for testing and validation, allowing for adjustments before final
                    production.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Production</h3>
                  <p className="text-muted-foreground">
                    Using state-of-the-art 3D printers, we produce your items with precision and attention to detail.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  5
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Post-Processing</h3>
                  <p className="text-muted-foreground">
                    We apply professional finishing techniques to ensure your printed items meet the highest quality
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  6
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Delivery</h3>
                  <p className="text-muted-foreground">
                    Your completed items are carefully packaged and shipped to your location with tracking information
                    provided.
                  </p>
                </div>
              </div>
            </div>
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
                Contact us today to discuss your custom 3D printing needs and get a personalized quote.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
