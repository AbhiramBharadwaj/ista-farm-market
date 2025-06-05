
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Droplets, Sun } from 'lucide-react';

const Index = () => {
  const handmadeProducts = [
    {
      id: 'appemidi-pickle',
      name: 'Appemidi Pickles',
      description: 'Traditional handmade pickles with tender baby mangoes',
      price: '₹450',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
      seasonal: 'Available March - June'
    },
    {
      id: 'bird-eye-chilli',
      name: 'Bird Eye Chilli Powder',
      description: 'Fiery hot chilli powder ground fresh in small batches',
      price: '₹320',
      image: 'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=400',
      seasonal: 'Year-round harvest'
    },
    {
      id: 'jackfruit-papad',
      name: 'Jackfruit Papad',
      description: 'Sun-dried crispy papads made from tender jackfruit',
      price: '₹280',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      seasonal: 'Available April - August'
    },
    {
      id: 'wild-honey',
      name: 'Wild Forest Honey',
      description: 'Raw unprocessed honey from our farm beehives',
      price: '₹850',
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400',
      seasonal: 'Harvested twice yearly'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section - Farm Story */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1600")',
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
            Nestled in the heart of Shivamogga's fertile lands, our small organic farm 
            follows the ancient rhythm of seasons, nurturing soil health and biodiversity 
            through handmade processes and small-batch care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4 rounded-full">
              <Link to="/shop">Taste Our Harvest</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800 text-lg px-8 py-4 rounded-full">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-6 w-6 text-green-600" />
                <span className="text-green-600 font-medium uppercase tracking-wide">Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-8">
                Where every seed tells a story
              </h2>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  What began as a dream to reconnect with the earth has blossomed into Ista Farm - 
                  a 2.5-acre sanctuary where time moves at nature's pace and every harvest carries 
                  the essence of our dedication.
                </p>
                
                <p>
                  Here in Shivamogga's embrace, we tend to our land like a garden, nurturing 
                  biodiversity and soil health through generations-old wisdom. Our hands craft 
                  each product in small batches, ensuring that what reaches your table carries 
                  the authentic taste of seasonal abundance.
                </p>
                
                <p>
                  From the fiery Bird Eye chillies that dance in the morning sun to the sweet 
                  jackfruits that ripen in monsoon's embrace, every element of our farm reflects 
                  our commitment to pure, chemical-free practices.
                </p>
              </div>
              
              <Button asChild className="mt-8 bg-green-600 hover:bg-green-700 rounded-full px-8">
                <Link to="/about">Read Our Full Story</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
                alt="Farmers with harvest baskets"
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

      {/* Handmade Products */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sun className="h-6 w-6 text-amber-500" />
              <span className="text-green-600 font-medium uppercase tracking-wide">Handmade with Care</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-6">
              Seasonal Treasures
            </h2>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each product tells the story of its season, handcrafted in small batches 
              when nature declares the perfect moment for harvest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {handmadeProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">{product.seasonal}</span>
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                    <p className="text-green-700 font-semibold text-lg">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-full px-8">
              <Link to="/shop">Explore All Products</Link>
            </Button>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Water Wisdom</h3>
              <p className="text-gray-600 text-sm">Rainwater harvesting and mindful irrigation practices</p>
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
