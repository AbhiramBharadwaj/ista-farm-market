
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const farmers = [
    {
      name: 'Rajesh Kumar',
      role: 'Lead Farmer & Founder',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300',
      bio: 'Third-generation farmer with 25 years of experience in organic farming practices.'
    },
    {
      name: 'Sunitha Devi',
      role: 'Spice Cultivation Expert',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300',
      bio: 'Specializes in traditional spice cultivation and has preserved heirloom seed varieties.'
    },
    {
      name: 'Mohan Reddy',
      role: 'Beekeeping Specialist',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300',
      bio: 'Expert in sustainable beekeeping practices and wild honey harvesting.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Three generations of farming wisdom, passed down through time, 
              creating pure, natural products that connect you with the earth's bounty.
            </p>
          </div>
        </div>
      </section>

      {/* Ista's Journey */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-green-800 mb-6">The Ista Journey</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Ista was born from a simple belief: that the earth provides everything we need when we work 
                  in harmony with nature. Our journey began in 1985 when Rajesh Kumar inherited his grandfather's 
                  small farm in the Western Ghats of Karnataka.
                </p>
                <p>
                  Instead of following modern industrial farming methods, Rajesh chose to preserve and enhance 
                  the traditional organic practices passed down through generations. What started as a small 
                  family farm has grown into a community of like-minded farmers dedicated to sustainable agriculture.
                </p>
                <p>
                  Today, Ista represents more than just organic products – we're a movement towards healthier 
                  living, environmental protection, and supporting rural farming communities. Every product you 
                  purchase directly supports these values and the farmers who make it all possible.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600"
                alt="Our farming heritage"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-lg">
                <p className="font-bold text-2xl">40+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from seed to harvest to your table.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We farm in harmony with nature, preserving the earth for future generations 
                  through time-tested organic practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Authenticity</h3>
                <p className="text-gray-600">
                  Every product maintains its natural integrity from farm to table, 
                  with no artificial additives or processing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  We support local farming families and preserve traditional knowledge 
                  while building sustainable livelihoods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Farmers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">Meet Our Farmers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Ista who bring you nature's finest products with love and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmers.map((farmer, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src={farmer.image}
                    alt={farmer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-green-800 mb-2">{farmer.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{farmer.role}</p>
                    <p className="text-gray-600">{farmer.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Practices */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?w=600"
                alt="Traditional farming"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-green-800 mb-6">Traditional Meets Innovation</h2>
              <p className="text-gray-700 mb-6">
                Our farming practices blend ancient wisdom with modern organic standards, 
                ensuring the highest quality while protecting the environment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Crop Rotation</h3>
                    <p className="text-gray-600">Natural soil enrichment through traditional rotation methods</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Natural Pest Control</h3>
                    <p className="text-gray-600">Companion planting and beneficial insects protect our crops</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Organic Composting</h3>
                    <p className="text-gray-600">Farm-made compost from natural materials enriches the soil</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Water Conservation</h3>
                    <p className="text-gray-600">Rainwater harvesting and efficient irrigation systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-8">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">ORGANIC</span>
              </div>
              <p className="text-sm text-gray-600">Certified Organic</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">FAIR</span>
              </div>
              <p className="text-sm text-gray-600">Fair Trade</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">PURE</span>
              </div>
              <p className="text-sm text-gray-600">100% Natural</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-green-600 font-bold">ISO</span>
              </div>
              <p className="text-sm text-gray-600">ISO Certified</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
