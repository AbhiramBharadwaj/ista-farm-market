
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Health Benefits of Bird\'s Eye Chilli: Nature\'s Fiery Medicine',
      excerpt: 'Discover how these tiny but powerful chillis can boost your metabolism, provide natural pain relief, and support your immune system.',
      image: 'https://images.unsplash.com/photo-1583432664848-c4ac8b17c00e?w=400',
      category: 'Wellness',
      date: '2024-03-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Traditional Pickle Making: Preserving Flavors the Ancient Way',
      excerpt: 'Learn the age-old techniques of making authentic Indian pickles that our grandmothers used to prepare.',
      image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400',
      category: 'Recipes',
      date: '2024-03-12',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Wild Honey vs Commercial Honey: Understanding the Difference',
      excerpt: 'Why wild honey from free-ranging bees offers superior nutritional benefits and authentic taste.',
      image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?w=400',
      category: 'Farming',
      date: '2024-03-10',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Seasonal Eating: March\'s Fresh Harvest from Our Farm',
      excerpt: 'Explore what\'s fresh this month and how to incorporate seasonal produce into your daily meals.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400',
      category: 'Seasonal',
      date: '2024-03-08',
      readTime: '4 min read'
    },
    {
      id: 5,
      title: 'The Art of Spice Blending: Creating Perfect Flavor Combinations',
      excerpt: 'Master the traditional techniques of combining spices to create aromatic and flavorful dishes.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      category: 'Recipes',
      date: '2024-03-05',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Sustainable Farming: How We Protect Our Soil for Future Generations',
      excerpt: 'Our approach to maintaining soil health through natural methods and crop rotation practices.',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400',
      category: 'Farming',
      date: '2024-03-01',
      readTime: '6 min read'
    }
  ];

  const categories = ['All', 'Recipes', 'Wellness', 'Farming', 'Seasonal'];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-800 mb-4">
            Ista Blog
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Discover recipes, wellness tips, farming insights, and stories from our organic journey
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-8">Featured Article</h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <Link
                    to={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-green-100 hover:text-green-600 transition-colors border"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-green-800 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-green-800 mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-gray-600 mb-8">
            Get weekly insights on healthy recipes, farming tips, and wellness advice directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
