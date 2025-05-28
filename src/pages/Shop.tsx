
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Shop = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');

  const categories = ['All', 'Spices', 'Pickles', 'Fruits', 'Honey', 'Snacks'];

  const products = [
    {
      id: 'birds-eye-chilli',
      name: "Bird's Eye Chilli",
      price: '₹299',
      image: 'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=400',
      category: 'Spices',
      description: 'Fiery hot chillis grown in mountain regions'
    },
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Spices',
      description: 'Premium quality black pepper from Kerala'
    },
    {
      id: 'white-pepper',
      name: 'White Pepper',
      price: '₹699',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Spices',
      description: 'Mild and aromatic white pepper'
    },
    {
      id: 'wild-honey',
      name: 'Wild Honey',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400',
      category: 'Honey',
      description: 'Pure honey from wild bee colonies'
    },
    {
      id: 'lemon-pickle',
      name: 'Lemon Pickle',
      price: '₹399',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
      category: 'Pickles',
      description: 'Traditional tangy lemon pickle'
    },
    {
      id: 'appe-midi-pickle',
      name: 'Appe Midi Pickle',
      price: '₹449',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
      category: 'Pickles',
      description: 'Spicy and flavorful traditional pickle'
    },
    {
      id: 'passion-fruit',
      name: 'Passion Fruit',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      category: 'Fruits',
      description: 'Fresh tropical passion fruits'
    },
    {
      id: 'jackfruit-papad',
      name: 'Jackfruit Papad',
      price: '₹199',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400',
      category: 'Snacks',
      description: 'Crispy jackfruit papads'
    },
    {
      id: 'cinnamon',
      name: 'Ceylon Cinnamon',
      price: '₹549',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Spices',
      description: 'Premium Ceylon cinnamon sticks'
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-800 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover our complete range of organic, natural products crafted with traditional farming methods
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
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
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <p className="text-green-600 font-bold text-xl mb-3">{product.price}</p>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
