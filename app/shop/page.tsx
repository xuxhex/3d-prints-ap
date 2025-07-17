import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopPage() {
  const quickPrints = [
    {
      id: 1,
      title: "Cat Figurine",
      price: "$24.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Detailed cat figurine with articulated joints.",
      category: "Figurines",
    },
    {
      id: 2,
      title: "Smartphone Stand",
      price: "$19.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Adjustable smartphone stand with cable management.",
      category: "Accessories",
    },
    {
      id: 3,
      title: "Desk Organizer",
      price: "$34.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Modular desk organizer with multiple compartments.",
      category: "Home",
    },
    {
      id: 4,
      title: "Geometric Planter",
      price: "$29.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Modern geometric planter for small plants and succulents.",
      category: "Home",
    },
    {
      id: 5,
      title: "Mechanical Keyboard Keycaps",
      price: "$15.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom keycaps for mechanical keyboards in various designs.",
      category: "Accessories",
    },
    {
      id: 6,
      title: "Tabletop Game Pieces",
      price: "$39.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Set of detailed game pieces for tabletop gaming.",
      category: "Games",
    },
    {
      id: 7,
      title: "Wall Art Panels",
      price: "$49.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Decorative wall art panels with intricate patterns.",
      category: "Home",
    },
    {
      id: 8,
      title: "Cable Organizers",
      price: "$12.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Set of cable organizers to keep your desk tidy.",
      category: "Accessories",
    },
    {
      id: 9,
      title: "Miniature Buildings",
      price: "$44.99",
      image: "/placeholder.svg?height=300&width=300",
      description: "Detailed miniature buildings for model railways or dioramas.",
      category: "Figurines",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Quick Prints Shop</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our collection of ready-to-ship 3D prints. No waiting for custom development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:gap-10">
            {/* Filters Sidebar */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold">Search</h3>
                <div className="relative">
                  <Input placeholder="Search products..." className="w-full" />
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      All Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Figurines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Games
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Price Range</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Under $20
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      $20 - $30
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      $30 - $50
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Over $50
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">Material</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      PLA
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      ABS
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      PETG
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Resin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">All Products</h2>
                  <p className="text-sm text-muted-foreground">Showing {quickPrints.length} products</p>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {quickPrints.map((product) => (
                  <div key={product.id} className="group relative overflow-hidden rounded-lg border">
                    <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10">
                      <span className="sr-only">View {product.title}</span>
                    </Link>
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="font-semibold">{product.price}</p>
                        <Button size="sm" variant="outline">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2">
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span className="sr-only">Previous page</span>
                </Button>
                <Button variant="outline" size="sm" className="min-w-8 bg-transparent">
                  1
                </Button>
                <Button variant="outline" size="sm" className="min-w-8 bg-transparent">
                  2
                </Button>
                <Button variant="outline" size="sm" className="min-w-8 bg-transparent">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next page</span>
                </Button>
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
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Need Something Custom?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Can't find what you're looking for? We can create custom 3D prints tailored to your specific needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Custom Print</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Learn About Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
