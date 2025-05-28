
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const featuredProducts = [
    {
      id: 'birds-eye-chilli',
      name: "Bird's Eye Chilli",
      price: '₹299',
      image: 'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=400',
      category: 'Spices'
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Spices'
    },
    {
      id: 'wild-honey',
      name: 'Wild Honey',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400',
      category: 'Honey'
    },
    {
      id: 'lemon-pickle',
      name: 'Lemon Pickle',
      price: '₹399',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
      category: 'Pickles'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Apple Style with Western Ghats Nature Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600")',
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-serif font-light text-white mb-8 leading-none">
            Ista
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pure. Natural. Extraordinary.
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl mx-auto font-light">
            Discover the authentic taste of nature with premium organic products, 
            grown with traditional farming methods passed down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-12 py-4 rounded-full font-medium">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-12 py-4 rounded-full font-medium">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products - Minimal Grid */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">Our Collection</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Handpicked selection of our finest organic products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-gray-900 mb-2 font-light">{product.name}</h3>
                    <p className="text-green-600 font-medium text-lg">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-12 py-4 rounded-full">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Split Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800"
                  alt="Western Ghats natural farming"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8 leading-tight">
                Our Philosophy
              </h2>
              <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
                At Ista, we believe in harmony with nature. Our traditional farming methods preserve 
                the earth's natural fertility while producing the highest quality organic products.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">100% Organic</h3>
                    <p className="text-gray-600 font-light">No chemicals, pesticides, or artificial additives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Sustainable Methods</h3>
                    <p className="text-gray-600 font-light">Traditional techniques that protect the environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Fair Trade</h3>
                    <p className="text-gray-600 font-light">Supporting local farmers and communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Minimal Cards */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-6">What People Say</h2>
            <p className="text-xl text-gray-600 font-light">Real reviews from families who trust Ista</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: 'Priya Sharma',
                text: 'The honey from Ista is absolutely pure! You can taste the difference in quality.',
                rating: 5
              },
              {
                name: 'Raj Kumar',
                text: 'Best organic spices I have ever bought. The aroma and taste are incredible.',
                rating: 5
              },
              {
                name: 'Meera Patel',
                text: 'Love the traditional pickles! Reminds me of my grandmother\'s recipes.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-12 rounded-3xl shadow-sm">
                <div className="flex text-yellow-400 mb-6 text-xl">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 text-lg font-light leading-relaxed italic">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900 text-lg">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
