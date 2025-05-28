
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in real app, this would come from API
  const product = {
    id: id,
    name: "Bird's Eye Chilli",
    price: '₹299',
    originalPrice: '₹349',
    images: [
      'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=600',
      'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=600',
      'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=600'
    ],
    category: 'Spices',
    origin: 'Western Ghats, Karnataka',
    weight: '100g',
    inStock: true,
    description: "Our Bird's Eye Chilli is grown organically in the pristine Western Ghats. These tiny but fiery chillis pack an incredible punch of heat and flavor. Perfect for adding that extra kick to your dishes.",
    benefits: [
      'Rich in Vitamin C and antioxidants',
      'Boosts metabolism naturally',
      'Contains capsaicin for pain relief',
      'Helps in digestion',
      'No artificial preservatives'
    ],
    farmingPractices: [
      'Grown without chemical pesticides',
      'Traditional seed varieties preserved',
      'Rain-fed cultivation methods',
      'Handpicked at optimal ripeness',
      'Sun-dried naturally'
    ]
  };

  const reviews = [
    {
      name: 'Anita Reddy',
      rating: 5,
      comment: 'Extremely hot and flavorful! A little goes a long way. Love the organic quality.',
      date: '2 weeks ago'
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      comment: 'Best quality chillis I have bought online. Fresh and authentic taste.',
      date: '1 month ago'
    },
    {
      name: 'Lakshmi Nair',
      rating: 4,
      comment: 'Good quality but very spicy! Perfect for South Indian cooking.',
      date: '1 month ago'
    }
  ];

  const relatedProducts = [
    {
      id: 'black-pepper',
      name: 'Black Pepper',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300'
    },
    {
      id: 'cinnamon',
      name: 'Ceylon Cinnamon',
      price: '₹549',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex space-x-2 text-gray-500">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-green-600">Shop</Link></li>
            <li>/</li>
            <li className="text-gray-800">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded border-2 overflow-hidden ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-green-600">{product.price}</span>
              <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">Save ₹50</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm text-gray-500">Origin:</span>
                <p className="font-medium">{product.origin}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Weight:</span>
                <p className="font-medium">{product.weight}</p>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <Button className="flex-1 bg-green-600 hover:bg-green-700 text-lg py-3">
                Add to Cart
              </Button>
            </div>

            {product.inStock && (
              <p className="text-green-600 font-medium mb-4">✓ In Stock - Free shipping on orders above ₹500</p>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Health Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-800">Farming Practices</h3>
                <ul className="space-y-2">
                  {product.farmingPractices.map((practice, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span className="text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-green-800 mb-8">Customer Reviews</h3>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-green-800 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-green-600 font-bold">{product.price}</p>
                    <Button asChild className="w-full mt-3 bg-green-600 hover:bg-green-700">
                      <Link to={`/product/${product.id}`}>View Product</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product;
