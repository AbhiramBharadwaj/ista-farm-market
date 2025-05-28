
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions about our products or farming practices? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">hello@ista-farms.com</p>
                <p className="text-gray-600">orders@ista-farms.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Visit Our Farm</h3>
                <p className="text-gray-600 mb-2">Ista Organic Farm</p>
                <p className="text-gray-600">Western Ghats, Karnataka 576112</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Saturday</p>
                <p className="text-gray-600">9:00 AM - 6:00 PM IST</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-green-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="farm-visit">Farm Visit</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Farm Location & Additional Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-green-800 mb-6">Visit Our Farm</h2>
              
              {/* Map placeholder */}
              <div className="w-full h-64 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <p className="text-green-800 font-medium">Western Ghats, Karnataka</p>
                  <p className="text-gray-600">Interactive map would go here</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Farm Tours Available</h3>
                  <p className="text-gray-700 mb-4">
                    Experience sustainable farming firsthand! We offer guided tours of our organic farm 
                    where you can see our growing practices, meet our farmers, and taste fresh produce.
                  </p>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                    Book a Farm Tour
                  </Button>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Bulk Orders</h3>
                  <p className="text-gray-700 mb-4">
                    Looking to place a large order for your restaurant, store, or event? 
                    Contact us for special pricing and custom packaging options.
                  </p>
                  <p className="text-green-600 font-medium">Minimum order: ₹5,000</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Live Chat Support</h3>
                  <p className="text-gray-700 mb-4">
                    Need immediate assistance? Our customer support team is available during business hours.
                  </p>
                  <Button className="bg-green-600 hover:bg-green-700">
                    Start Live Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-green-800 mb-2">
                  How do you ensure product freshness during shipping?
                </h3>
                <p className="text-gray-700">
                  We harvest and package products only after receiving orders. All items are vacuum-sealed 
                  or stored in airtight containers and shipped within 24-48 hours to maintain maximum freshness.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-green-800 mb-2">
                  Are your products certified organic?
                </h3>
                <p className="text-gray-700">
                  Yes, all our products are certified organic by authorized certification bodies. 
                  We follow strict organic farming standards and undergo regular inspections.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-green-800 mb-2">
                  What is your return and refund policy?
                </h3>
                <p className="text-gray-700">
                  We offer a 100% satisfaction guarantee. If you're not completely happy with your purchase, 
                  contact us within 7 days of delivery for a full refund or replacement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-green-800 mb-2">
                  Do you ship internationally?
                </h3>
                <p className="text-gray-700">
                  Currently, we ship within India only. We're working on expanding our shipping 
                  to international destinations. Subscribe to our newsletter for updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
