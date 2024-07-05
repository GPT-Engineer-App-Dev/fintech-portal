import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronRight, DollarSign, Lock, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Revolutionize Your Finances</h1>
            <p className="text-xl mb-6">Secure, smart, and seamless financial solutions for the digital age.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="md:w-1/2">
            <img src="/placeholder.svg" alt="Fintech Illustration" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign className="h-10 w-10 text-blue-500" />, title: "Smart Investing", description: "AI-powered investment strategies tailored to your goals." },
              { icon: <Lock className="h-10 w-10 text-blue-500" />, title: "Bank-Grade Security", description: "Your finances protected by state-of-the-art encryption." },
              { icon: <TrendingUp className="h-10 w-10 text-blue-500" />, title: "Real-Time Analytics", description: "Comprehensive insights into your financial health." },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
            <CarouselContent>
              {[
                { name: "Sarah L.", text: "This app has completely transformed how I manage my finances. Highly recommended!" },
                { name: "John D.", text: "The real-time analytics have given me insights I never had before. It's been a game-changer." },
                { name: "Emily R.", text: "I feel so much more confident about my financial future since I started using this platform." },
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <img src="/placeholder.svg" alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                      <p className="italic mb-4">"{testimonial.text}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and start your journey to financial freedom today.</p>
          <Button size="lg" variant="secondary">
            Sign Up Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">FinTech Co.</h3>
              <p>Revolutionizing finance through technology.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Services</a></li>
                <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © 2024 FinTech Co. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;