import Link from "next/link"
import { Truck, Package, Clock, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ShippingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Shipping Information</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to know about our shipping policies, rates, and delivery times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shipping Options</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer a variety of shipping options to meet your needs and budget.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <Card>
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Standard Shipping</CardTitle>
                <CardDescription>5-7 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$9.99</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Affordable shipping option for non-urgent deliveries. Tracking included.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <Package className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Express Shipping</CardTitle>
                <CardDescription>2-3 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$19.99</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Faster delivery for when you need your prints sooner. Tracking included.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Recommended</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Priority Shipping</CardTitle>
                <CardDescription>1-2 business days</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">$29.99</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our fastest shipping option for urgent deliveries. Tracking included.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">International Shipping</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We ship our 3D prints worldwide. International shipping rates and delivery times vary by destination.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl mt-12">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Globe className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Global Delivery</h3>
                    <p className="text-muted-foreground">Shipping to over 100 countries worldwide</p>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Region</TableHead>
                      <TableHead>Standard (7-14 days)</TableHead>
                      <TableHead>Express (3-5 days)</TableHead>
                      <TableHead>Priority (2-3 days)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>North America</TableCell>
                      <TableCell>$14.99</TableCell>
                      <TableCell>$29.99</TableCell>
                      <TableCell>$49.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Europe</TableCell>
                      <TableCell>$19.99</TableCell>
                      <TableCell>$39.99</TableCell>
                      <TableCell>$59.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Asia</TableCell>
                      <TableCell>$24.99</TableCell>
                      <TableCell>$44.99</TableCell>
                      <TableCell>$69.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Australia/Oceania</TableCell>
                      <TableCell>$29.99</TableCell>
                      <TableCell>$49.99</TableCell>
                      <TableCell>$79.99</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Africa</TableCell>
                      <TableCell>$34.99</TableCell>
                      <TableCell>$54.99</TableCell>
                      <TableCell>$89.99</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="text-sm text-muted-foreground mt-4">
                  Note: International orders may be subject to customs duties and taxes, which are the responsibility of
                  the recipient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Policies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shipping Policies</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Important information about our shipping policies and procedures.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12 grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For in-stock quick prints, orders are typically processed within 1-2 business days. Custom 3D printing
                  projects have varying processing times based on complexity and will be communicated during the
                  ordering process.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tracking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All shipments include tracking information that will be emailed to you once your order ships. You can
                  also track your order through your account on our website.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Shipping Delays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we strive to meet all estimated delivery times, occasional delays may occur due to weather,
                  customs processing for international orders, or other circumstances beyond our control.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Free Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Orders over $100 qualify for free standard shipping within the continental United States. This does
                  not apply to international orders or expedited shipping options.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Returns & Exchanges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If your 3D printed item arrives damaged or defective, please contact us within 7 days of receipt.
                  Custom-designed items are non-returnable unless defective. Please see our Returns Policy for more
                  details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Common questions about our shipping and delivery process.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12 grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>How can I track my order?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a tracking number via email. You can also log into your account
                  on our website to view the status and tracking information for your order.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Do you ship to PO boxes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we can ship to PO boxes for standard shipping options. However, expedited and priority shipping
                  may require a physical address for delivery.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens if my package is lost or damaged?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  If your package is lost or arrives damaged, please contact our customer service team immediately.
                  We'll work with the shipping carrier to resolve the issue and ensure you receive your order in perfect
                  condition.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I change my shipping address after placing an order?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Address changes may be possible if the order hasn't shipped yet. Please contact our customer service
                  team as soon as possible with your order number and the new shipping address.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Order?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Browse our collection of quick prints or request a custom 3D printing project today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/shop">Shop Quick Prints</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Request Custom Print</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
