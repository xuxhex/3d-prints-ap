import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Transparent Pricing for 3D Printing Services
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Clear, upfront pricing with no hidden fees. Choose the plan that best fits your 3D printing needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>For simple 3D printing projects</CardDescription>
                <div className="mt-4 text-4xl font-bold">$99</div>
                <p className="text-sm text-muted-foreground">Starting price per project</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Basic 3D modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Standard materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Up to 5 design revisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Standard shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Basic post-processing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col border-primary">
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>For complex 3D printing projects</CardDescription>
                <div className="mt-4 text-4xl font-bold">$249</div>
                <p className="text-sm text-muted-foreground">Starting price per project</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Advanced 3D modeling</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Premium materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Unlimited design revisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Expedited shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Professional post-processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Functional prototyping</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For large-scale 3D printing projects</CardDescription>
                <div className="mt-4 text-4xl font-bold">Custom</div>
                <p className="text-sm text-muted-foreground">Contact for pricing</p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Custom 3D modeling & engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Specialized materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Dedicated project manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Priority shipping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Advanced post-processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Bulk production capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Quality assurance testing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Additional Costs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transparent pricing for additional services that may be required for your project.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12">
            <div className="rounded-lg border bg-background">
              <div className="grid divide-y">
                <div className="grid grid-cols-3 items-center p-4">
                  <div className="font-medium">Service</div>
                  <div className="font-medium">Description</div>
                  <div className="font-medium">Price</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Rush Fee</div>
                  <div className="text-sm text-muted-foreground">For expedited project completion</div>
                  <div>+50%</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Complex Geometry</div>
                  <div className="text-sm text-muted-foreground">For designs with intricate details</div>
                  <div>+$50-200</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Premium Materials</div>
                  <div className="text-sm text-muted-foreground">For specialized material requirements</div>
                  <div>Varies</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Additional Revisions</div>
                  <div className="text-sm text-muted-foreground">Beyond included revisions</div>
                  <div>$25 each</div>
                </div>
                <div className="grid grid-cols-3 items-center p-4">
                  <div>Express Shipping</div>
                  <div className="text-sm text-muted-foreground">For faster delivery options</div>
                  <div>$15-50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our 3D printing pricing and services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12 grid gap-4">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold">How do you determine the price for my 3D printing project?</h3>
              <p className="mt-2 text-muted-foreground">
                We consider factors such as design complexity, material type and quantity, print time, post-processing
                requirements, and project timeline to provide you with an accurate quote.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold">Do you offer discounts for bulk orders?</h3>
              <p className="mt-2 text-muted-foreground">
                Yes, we offer volume discounts for bulk orders. The discount percentage increases with the quantity
                ordered. Please contact us for a custom quote for your bulk printing needs.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
              <p className="mt-2 text-muted-foreground">
                We accept all major credit cards, PayPal, bank transfers, and purchase orders for business clients. For
                large projects, we may require a deposit before beginning work.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="text-lg font-semibold">How long does a typical 3D printing project take?</h3>
              <p className="mt-2 text-muted-foreground">
                Project timelines vary based on complexity, size, and current workload. Simple projects may be completed
                in 1-2 weeks, while complex projects can take 3-6 weeks. Rush services are available for an additional
                fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Contact us today for a personalized quote tailored to your specific 3D printing needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
