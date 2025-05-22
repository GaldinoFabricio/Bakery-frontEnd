import axios from 'axios';

// For demo purposes, using mock data directly
// TODO: Replace with actual API URL when backend is available
const API_URL = '';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Product-related API calls
export const getProducts = async (category?: string) => {
  // For demo purposes, return mock data
  return getMockProducts(category);
};

export const getProductById = async (id: string) => {
  // For demo purposes, return mock data
  const allProducts = getMockProducts();
  return allProducts.find(product => product.id === id);
};

// Blog-related API calls
export const getBlogPosts = async () => {
  // For demo purposes, return mock data
  return getMockBlogPosts();
};

export const getBlogPostById = async (id: string) => {
  // For demo purposes, return mock data
  const allPosts = getMockBlogPosts();
  return allPosts.find(post => post.id === id);
};

// Contact form submission
export const submitContactForm = async (formData: any) => {
  // Mock successful submission
  return { success: true, message: 'Your message has been sent successfully!' };
};

// Mock data for development/demo purposes
const getMockProducts = (category?: string) => {
  const allProducts = [
    {
      id: '1',
      name: 'Artisan Sourdough Bread',
      description: 'Our signature sourdough made with a 100-year-old starter. Crispy crust and soft, tangy interior.',
      price: 6.99,
      image: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
      category: 'breads',
      featured: true,
      ingredients: ['Organic flour', 'Water', 'Salt', 'Sourdough starter'],
      nutritionalInfo: {
        calories: 120,
        protein: '4g',
        carbs: '24g',
        fat: '0.5g',
      }
    },
    {
      id: '2',
      name: 'Chocolate Fudge Cake',
      description: 'Decadent chocolate cake with rich fudge frosting and chocolate shavings.',
      price: 28.99,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      category: 'cakes',
      featured: true,
      ingredients: ['Flour', 'Sugar', 'Cocoa powder', 'Butter', 'Eggs', 'Chocolate'],
      nutritionalInfo: {
        calories: 350,
        protein: '4g',
        carbs: '42g',
        fat: '18g',
      }
    },
    {
      id: '3',
      name: 'Classic Brownie',
      description: 'Fudgy chocolate brownie with walnuts and a crackly top.',
      price: 3.99,
      image: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg',
      category: 'brownies',
      featured: false,
      ingredients: ['Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Walnuts'],
      nutritionalInfo: {
        calories: 280,
        protein: '3g',
        carbs: '35g',
        fat: '15g',
      }
    },
    {
      id: '4',
      name: 'Glazed Donut',
      description: 'Light and fluffy donut with a sweet sugar glaze.',
      price: 2.49,
      image: 'https://images.pexels.com/photos/2955820/pexels-photo-2955820.jpeg',
      category: 'donuts',
      featured: true,
      ingredients: ['Flour', 'Sugar', 'Milk', 'Eggs', 'Yeast', 'Butter'],
      nutritionalInfo: {
        calories: 240,
        protein: '3g',
        carbs: '33g',
        fat: '11g',
      }
    },
    {
      id: '5',
      name: 'Whole Grain Loaf',
      description: 'Hearty bread made with a blend of whole grains and seeds.',
      price: 5.99,
      image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg',
      category: 'breads',
      featured: false,
      ingredients: ['Whole wheat flour', 'Sunflower seeds', 'Flax seeds', 'Oats', 'Honey', 'Yeast'],
      nutritionalInfo: {
        calories: 110,
        protein: '5g',
        carbs: '20g',
        fat: '2g',
      }
    },
    {
      id: '6',
      name: 'Strawberry Cheesecake',
      description: 'Creamy New York-style cheesecake topped with fresh strawberry compote.',
      price: 32.99,
      image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
      category: 'cakes',
      featured: true,
      ingredients: ['Cream cheese', 'Sugar', 'Eggs', 'Graham crackers', 'Butter', 'Strawberries'],
      nutritionalInfo: {
        calories: 320,
        protein: '6g',
        carbs: '30g',
        fat: '20g',
      }
    },
    {
      id: '7',
      name: 'Chocolate Chip Cookie',
      description: 'Soft and chewy cookie loaded with chocolate chips.',
      price: 1.99,
      image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
      category: 'brownies',
      featured: false,
      ingredients: ['Flour', 'Butter', 'Brown sugar', 'White sugar', 'Eggs', 'Chocolate chips'],
      nutritionalInfo: {
        calories: 180,
        protein: '2g',
        carbs: '25g',
        fat: '9g',
      }
    },
    {
      id: '8',
      name: 'Chocolate Frosted Donut',
      description: 'Classic donut topped with rich chocolate frosting and sprinkles.',
      price: 2.99,
      image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg',
      category: 'donuts',
      featured: false,
      ingredients: ['Flour', 'Sugar', 'Milk', 'Eggs', 'Yeast', 'Chocolate'],
      nutritionalInfo: {
        calories: 270,
        protein: '3g',
        carbs: '36g',
        fat: '12g',
      }
    },
  ];

  if (category) {
    return allProducts.filter(product => product.category === category);
  }
  
  return allProducts;
};

const getMockBlogPosts = () => {
  return [
    {
      id: '1',
      title: 'The Art of Sourdough: Creating the Perfect Loaf',
      excerpt: 'Learn the secrets to creating artisan sourdough bread at home with our step-by-step guide.',
      content: `
        <p>Sourdough bread is one of the oldest forms of bread, dating back thousands of years. Unlike commercial bread that uses store-bought yeast, sourdough relies on a fermented "starter" of flour and water that contains wild yeast and lactobacillus bacteria.</p>
        
        <h2>Creating Your Starter</h2>
        <p>To begin your sourdough journey, you'll need to create a starter. Mix equal parts of water and flour in a jar and leave it at room temperature. Feed it daily with fresh flour and water, discarding half of the mixture each time. Within 7-14 days, your starter should be bubbly and ready to use.</p>
        
        <h2>The Perfect Recipe</h2>
        <p>For a basic sourdough loaf, you'll need:</p>
        <ul>
          <li>500g bread flour</li>
          <li>350g water</li>
          <li>100g active sourdough starter</li>
          <li>10g salt</li>
        </ul>
        
        <h2>The Process</h2>
        <p>Mix all ingredients except salt until just combined. Let rest for 30 minutes (autolyse). Add salt and knead briefly. Perform 3-4 sets of stretch and folds over the next 2 hours. Bulk ferment for 4-6 hours at room temperature. Shape, place in a banneton, and cold proof in the refrigerator overnight.</p>
        
        <p>Bake in a preheated Dutch oven at 450°F for 20 minutes covered, then 20-25 minutes uncovered until golden brown. Cool completely before slicing.</p>
        
        <h2>Troubleshooting Common Issues</h2>
        <p>If your bread is too dense, you might need to increase hydration or fermentation time. If it's spreading too much, your starter might not be active enough or your dough might be overproofed.</p>
        
        <p>Happy baking!</p>
      `,
      author: 'Maria Baker',
      date: '2024-05-15',
      image: 'https://images.pexels.com/photos/1590080/pexels-photo-1590080.jpeg',
      category: 'recipes',
      tags: ['sourdough', 'baking', 'bread', 'tutorial']
    },
    {
      id: '2',
      title: 'Decorating Cakes: Tips from Professional Pastry Chefs',
      excerpt: 'Discover professional cake decorating techniques to elevate your homemade desserts.',
      content: `
        <p>Whether you're baking for a special occasion or just for fun, mastering a few cake decorating techniques can transform your desserts from homemade to professional-looking masterpieces.</p>
        
        <h2>Essential Tools</h2>
        <p>Before you begin, make sure you have these basic tools:</p>
        <ul>
          <li>Offset spatula for smooth frosting application</li>
          <li>Bench scraper for creating clean edges</li>
          <li>Piping bags and various tips</li>
          <li>Turntable for easy access to all sides of your cake</li>
          <li>Cake combs for textured designs</li>
        </ul>
        
        <h2>Perfect Buttercream</h2>
        <p>The foundation of most cake decorating is a good buttercream. American buttercream is the easiest to make, combining butter, powdered sugar, and vanilla. For a smoother finish, try Swiss meringue buttercream, which requires cooking egg whites and sugar before adding butter.</p>
        
        <h2>Crumb Coat</h2>
        <p>Always start with a crumb coat - a thin layer of frosting that seals in the crumbs. Chill the cake for 20-30 minutes after applying the crumb coat before adding the final layer of frosting.</p>
        
        <h2>Piping Techniques</h2>
        <p>Practice basic piping techniques like rosettes, shells, and dots on parchment paper before moving to your cake. Consistent pressure is key to uniform designs.</p>
        
        <h2>Color Theory</h2>
        <p>When coloring frosting, remember that gel food colors are more concentrated than liquid. Start with a small amount and add more as needed. Colors will deepen over time, so mix slightly lighter than your desired final shade.</p>
        
        <p>With practice and patience, you'll be creating stunning cakes in no time!</p>
      `,
      author: 'Thomas Frost',
      date: '2024-05-08',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg',
      category: 'techniques',
      tags: ['cake decorating', 'baking', 'desserts', 'frosting']
    },
    {
      id: '3',
      title: 'The History of Bread: From Ancient Egypt to Modern Artisan Loaves',
      excerpt: 'Explore the fascinating evolution of bread throughout human history.',
      content: `
        <p>Bread has been a staple food for thousands of years, evolving alongside human civilization. Its history is rich and varied, spanning continents and cultures.</p>
        
        <h2>Ancient Beginnings</h2>
        <p>The earliest evidence of bread dates back to 14,000 years ago in the Middle East. These early breads were flatbreads, made from a mixture of ground grains and water, cooked on hot stones. The ancient Egyptians were the first to use yeast to leaven bread around 4,000 years ago, discovering that leaving dough out before baking caused it to rise.</p>
        
        <h2>Bread in Ancient Rome and Greece</h2>
        <p>The Romans industrialized bread production, establishing the first commercial bakeries. White bread, made from refined flour, became a status symbol, with darker breads consumed by the lower classes. The Greeks developed over 80 different types of bread, including honey-sweetened loaves for celebrations.</p>
        
        <h2>Medieval Bread</h2>
        <p>During the Middle Ages, bread continued to be a staple, with community ovens becoming central to village life. Bread quality and size were strictly regulated, with severe penalties for bakers who cheated customers – this is the origin of the "baker's dozen," where bakers would add an extra loaf to avoid punishment.</p>
        
        <h2>Industrial Revolution to Present</h2>
        <p>The Industrial Revolution transformed bread-making with the invention of the mechanical dough mixer in the 1850s and the commercial production of baker's yeast. The 20th century saw the rise of mass-produced sandwich bread, with additives for longer shelf life.</p>
        
        <h2>The Artisan Revival</h2>
        <p>In recent decades, there has been a renewed interest in traditional bread-making methods. Artisan bakers have revived sourdough and other ancient techniques, focusing on quality ingredients, fermentation, and craftsmanship over mass production.</p>
        
        <p>Today, bread continues to evolve, with gluten-free options, ancient grain revivals, and innovative techniques pushing the boundaries of this ancient food.</p>
      `,
      author: 'Dr. Helen Wheat',
      date: '2024-04-25',
      image: 'https://images.pexels.com/photos/2103949/pexels-photo-2103949.jpeg',
      category: 'history',
      tags: ['bread history', 'food culture', 'baking traditions']
    },
  ];
};

export default api;