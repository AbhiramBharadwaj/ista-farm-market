
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

  const testimonials = [
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
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-yellow-50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200")'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-green-800 mb-6">
            Pure. Natural. Traditional.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Discover the authentic taste of nature with Ista's premium organic products, 
            grown with traditional farming methods passed down through generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-green-800 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our finest organic products, each telling a story of traditional farming and natural goodness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold text-xl">{product.price}</p>
                    <Button asChild className="w-full mt-3 bg-green-600 hover:bg-green-700">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
              <Link to="/shop">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Farming Practices */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-green-800 mb-6">Our Farming Philosophy</h2>
              <p className="text-gray-700 text-lg mb-6">
                At Ista, we believe in harmony with nature. Our traditional farming methods preserve 
                the earth's natural fertility while producing the highest quality organic products.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">100% Organic</h3>
                    <p className="text-gray-600">No chemicals, pesticides, or artificial additives</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Sustainable Methods</h3>
                    <p className="text-gray-600">Traditional techniques that protect the environment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Fair Trade</h3>
                    <p className="text-gray-600">Supporting local farmers and communities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
                alt="Natural farming"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600">Real reviews from families who trust Ista for their natural food needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-green-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
