
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Droplets, Sun } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section - Farm Story */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600")',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 text-white">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <Leaf className="h-5 w-5 text-green-300" />
              <span className="text-green-100 font-medium">2.5 acres • Chemical-free since 1985</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white mb-8 leading-tight">
            Ista Farm
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-green-100 mb-6 italic">
            "Grown with love, harvested with care"
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            What we grow, we eat. What we don't eat, we share.
            Ista Farm isn't just a place — it's our way of living gently with the earth, 
            with gratitude in our hands and soil under our feet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full">
              <Link to="/about">Our Story</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4 rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section - From Soil to Soul */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-6 w-6 text-green-600" />
                <span className="text-green-600 font-medium uppercase tracking-wide">🌿 Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                From Soil to Soul
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-green-700">
                  What we grow, we eat. What we don't eat, we share.
                </p>
                
                <p>
                  We are a passionate farming couple growing a 2.5-acre chemical-free food forest near Shivamogga. 
                  Our land may be small, but it's rich in life — filled with Appemidi mangoes, jackfruit, 
                  premium avocados, bird eye chillies, white and black pepper, and many other native crops.
                </p>
                
                <p>
                  Everything we grow follows pure organic practices — no chemicals, no shortcuts. 
                  We feed our soil with our own compost, desi cow dung, and natural microbe boosters 
                  we've developed ourselves. Our focus is on soil health, biodiversity, and long-term care.
                </p>
                
                <p>
                  We don't just grow food — we make it with our hands. With help from our family, 
                  we turn our harvest into honest, handmade products made in small, seasonal batches, 
                  using only what the land gives — no factories, no mass production.
                </p>
                
                <p className="text-lg font-medium text-green-700 italic">
                  At Ista Farm, we believe "small is beautiful."
                </p>
                
                <p className="text-gray-600">
                  We may not produce a lot, but everything we do is filled with care — and meant to nourish, not just fill.
                  Because for us, food is not a business.
                </p>
              </div>
              
              <Button asChild className="mt-8 bg-green-600 hover:bg-green-700 rounded-full px-8">
                <Link to="/about">Read Our Full Story</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
                alt="Farming couple with harvest baskets"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl">
                <p className="font-serif text-2xl font-light">2.5</p>
                <p className="text-sm">Acres of Love</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Craft */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sun className="h-6 w-6 text-amber-500" />
              <span className="text-green-600 font-medium uppercase tracking-wide">Handmade with Care</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              What We Craft
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We turn our harvest into honest, handmade products — made in small, seasonal batches, 
              using only what the land gives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spicy Bird Eye Chilli Powders</h3>
              <p className="text-gray-600 text-sm">Fiery hot powders from our mountain-grown chillies</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥭</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Traditional Appemidi Pickles</h3>
              <p className="text-gray-600 text-sm">Tangy pickles made from tender baby mangoes</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🫓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Jackfruit Papads</h3>
              <p className="text-gray-600 text-sm">Sun-dried crispy papads from fresh jackfruit</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🫐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Passion Fruit Pulp</h3>
              <p className="text-gray-600 text-sm">Pure tropical passion fruit goodness</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wild Honey</h3>
              <p className="text-gray-600 text-sm">Raw unprocessed honey from forest hives</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seasonal Spice Blends</h3>
              <p className="text-gray-600 text-sm">Handcrafted blends from our spice garden</p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Life Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Droplets className="h-6 w-6 text-blue-500" />
              <span className="text-green-600 font-medium uppercase tracking-wide">Farm Life</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Living by nature's rhythm
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like the scent of fresh soil after rain, our farming practices awaken the earth's 
              natural potential through mindful stewardship and patient care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Soil Health</h3>
              <p className="text-gray-600 text-sm">Nurturing living soil through composting and natural amendments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Biodiversity</h3>
              <p className="text-gray-600 text-sm">Creating habitat for beneficial insects and native plants</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Natural Care</h3>
              <p className="text-gray-600 text-sm">Using desi cow dung and our own microbe boosters</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Small Batches</h3>
              <p className="text-gray-600 text-sm">Handcrafted products with individual attention and care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Connect */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
            Connect with our farm family
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions about our farming practices? Want to know when your favorite 
            seasonal products will be available? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 rounded-full">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white text-lg px-8 py-4 rounded-full">
              <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
