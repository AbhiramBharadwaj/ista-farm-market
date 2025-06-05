
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Heart, Leaf, Sun } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-green-800 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto italic">
              From soil to soul, this is the story of Ista Farm — 
              where love grows in every season, and gratitude blooms in every harvest.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Heart className="h-6 w-6 text-green-600" />
                    <span className="text-green-600 font-medium uppercase tracking-wide">From Soil to Soul</span>
                  </div>
                  
                  <p className="text-xl font-light text-green-700 mb-8 italic">
                    "What we grow, we eat. What we don't eat, we share."
                  </p>
                  
                  <p className="text-lg mb-6">
                    Nestled in the embrace of the Western Ghats, near the ancient town of Shivamogga, 
                    lies our little sanctuary — Ista Farm. Here, on just 2.5 acres of blessed earth, 
                    we don't just farm; we commune with nature, we listen to the soil's whispers, 
                    and we dance to the rhythm of the seasons.
                  </p>
                  
                  <p className="mb-6">
                    We are more than farmers — we are stewards of an ancient promise between humanity and earth. 
                    Our hands know the texture of good soil, our hearts beat in sync with the monsoon rains, 
                    and our spirits find peace in the gentle rustling of our Appemidi mango trees.
                  </p>
                  
                  <p className="mb-6">
                    This land cradles us as we cradle it. Every morning, we walk among jackfruit trees 
                    heavy with promise, through groves of premium avocados that shimmer in the early light, 
                    past bird eye chillies that hold the fire of the sun itself. Here grow white and black pepper vines, 
                    native treasures that have blessed this soil for generations.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600"
                  alt="Farmers working in harmony with nature"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl">
                  <p className="font-serif text-3xl font-light">2.5</p>
                  <p className="text-sm">Acres of Pure Love</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 space-y-8">
              <div className="bg-green-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-light text-green-800 mb-6">The Sacred Practice</h3>
                <p className="mb-6">
                  Our farming is a meditation, a prayer offered through action. We have chosen the path 
                  of purity — no chemicals touch our soil, no shortcuts disturb our process. 
                  Instead, we feed our earth with love: our own compost, blessed desi cow dung, 
                  and natural microbe boosters we've nurtured like children.
                </p>
                
                <p className="mb-6">
                  Soil health is our religion, biodiversity our scripture. We believe that when we 
                  care for the smallest creatures in our soil, when we honor every earthworm and 
                  every beneficial microbe, the earth responds with abundance beyond measure.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-serif font-light text-green-800 mb-6">Hands That Craft, Hearts That Care</h3>
                <p className="mb-6">
                  In our small kitchen, with the wisdom of generations flowing through our fingers, 
                  we transform our harvest into treasures. Each product is a story, each jar a poem 
                  written in the language of tradition and love.
                </p>
                
                <p className="mb-6">
                  Our spicy bird eye chilli powders carry the intensity of mountain winds. 
                  Our traditional Appemidi pickles hold the tang of monsoon afternoons. 
                  The jackfruit papads, sun-dried on our terrace, carry the warmth of our skies. 
                  Wild honey, gathered with reverence, tastes of wildflower dreams. 
                  Passion fruit pulp bursts with the essence of tropical mornings. 
                  And our seasonal spice blends? They are the very soul of our garden, 
                  captured in small batches when the time is just right.
                </p>
                
                <p className="mb-6">
                  We make only what the season offers, only what our hands can lovingly craft. 
                  There are no factories here, no mass production — just two hearts, 
                  four hands, and the infinite generosity of our beautiful earth.
                </p>
              </div>
              
              <div className="bg-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-light text-amber-800 mb-6">Small is Beautiful</h3>
                <p className="mb-6">
                  At Ista Farm, we have embraced a simple truth: small is beautiful. 
                  We may not produce thousands of jars, we may not fill endless shelves, 
                  but everything we create is born from intention, nurtured with patience, 
                  and offered with gratitude.
                </p>
                
                <p className="mb-6">
                  Every product is meant to nourish, not just fill. Every bite should remind you 
                  of sunshine and rain, of soil rich with life, of hands that touched each ingredient 
                  with care. This is food with a soul, food with a story.
                </p>
              </div>
              
              <div className="text-center py-12">
                <p className="text-3xl font-serif font-light text-green-800 italic mb-6">
                  "For us, food is not a business — it's a way of life."
                </p>
                <p className="text-lg text-gray-600">
                  It's about living gently with the earth, with gratitude in our hands and soil under our feet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Farm Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-green-800 mb-4">Our Sacred Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles flow through everything we do, like water through rich soil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Soil Worship</h3>
                <p className="text-gray-600">
                  We honor the earth that feeds us, nurturing every grain of soil like a precious jewel.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Living Harmony</h3>
                <p className="text-gray-600">
                  Every creature, from the tiniest microbe to the mightiest tree, has a place in our farm family.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤲</span>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Handmade Love</h3>
                <p className="text-gray-600">
                  Every product carries the warmth of human touch and the patience of traditional craft.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 bg-white">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Seasonal Wisdom</h3>
                <p className="text-gray-600">
                  We create only when nature provides, honoring the sacred rhythm of seasons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-light text-green-800 mb-4">Find Us Among the Trees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our farm doors are always open to fellow earth lovers and those seeking authentic, 
              soul-nourishing food.
            </p>
          </div>
          
          <Card className="p-8 bg-green-50 border-green-200">
            <CardContent className="p-0">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Ista Farm</h3>
                  <p className="text-gray-700 leading-relaxed">
                    49/4, Taluk, near Shri Sevalal Temple<br />
                    Lakkinakoppa, Nyamathi, Suragondanakoppa<br />
                    Karnataka 577225
                  </p>
                  <p className="text-green-600 mt-4 italic">
                    Follow the scent of jasmine and the sound of bird songs — we're nestled where the earth feels most alive.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
