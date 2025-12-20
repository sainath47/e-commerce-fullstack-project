// import { APIGatewayProxyHandler } from "aws-lambda";

// export const hello: APIGatewayProxyHandler = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Hello from TypeScript & Serverless!",
//       input: event,
//     }),
//   };
// };



import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const ddbClient = new DynamoDBClient({ region: 'ap-south-1' });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);
const tableName = process.env.TABLE_NAME || 'ecommerce-products-dev';

// Product interface for type safety
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  stock: number;
  availability: string;
  imageUrl: string;
  brand: string;
  rating: number;
  reviewsCount: number;
}


// GET /products
export const getProducts = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const command = new PutCommand({ TableName: tableName, Item: { id: '1', name: 'Sample', price: 100, imageLink: 'https://via.placeholder.com/150' } });
    await ddbDocClient.send(command);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Seeded and fetched' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error', error: (error as Error).message }),
    };
  }
};

// POST /products
export const addProduct = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    const product = JSON.parse(event.body || '{}') as Product;
    product.id = Date.now().toString();
    const params = { TableName: tableName, Item: product };
    await ddbDocClient.send(new PutCommand(params));
    return {
      statusCode: 201,
      body: JSON.stringify(product),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error adding product', error: (error as Error).message }),
    };
  }
};

// POST /seed - Seed initial data
export const seedProducts = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const initialProducts: Product[] = [
  {
    "id": "P1001",
    "name": "Wireless Noise-Cancelling Headphones",
    "description": "Over-ear headphones with 30 hours battery life and active noise cancellation.",
    "price": 129.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 45,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/1649148/pexels-photo-1649148.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "SoundMax",
    "rating": 4.5,
    "reviewsCount": 120
  },
  {
    "id": "P1002",
    "name": "Stainless Steel Water Bottle",
    "description": "Insulated double-wall bottle that keeps drinks hot for 12 hours and cold for 24 hours.",
    "price": 19.99,
    "currency": "USD",
    "category": "Home & Kitchen",
    "stock": 120,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg",
    "brand": "HydraPro",
    "rating": 4.2,
    "reviewsCount": 85
  },
  {
    "id": "P1003",
    "name": "Men's Running Shoes",
    "description": "Lightweight breathable sneakers designed for comfort and performance.",
    "price": 59.99,
    "currency": "USD",
    "category": "Footwear",
    "stock": 60,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "RunX",
    "rating": 4.0,
    "reviewsCount": 65
  },
  {
    "id": "P1004",
    "name": "Smart LED TV 43 Inch",
    "description": "Ultra HD 4K Smart TV with built-in streaming apps and voice control.",
    "price": 379.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 25,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/37/tv-1838780_640.jpg",
    "brand": "ViewPro",
    "rating": 4.6,
    "reviewsCount": 200
  },
  {
    "id": "P1005",
    "name": "Organic Cotton T-Shirt",
    "description": "Eco-friendly t-shirt made from 100% organic cotton.",
    "price": 14.99,
    "currency": "USD",
    "category": "Clothing",
    "stock": 150,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/1648772/pexels-photo-1648772.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "EcoWear",
    "rating": 4.3,
    "reviewsCount": 110
  },
  {
    "id": "P1006",
    "name": "Portable Bluetooth Speaker",
    "description": "Waterproof speaker with 20W output and 15-hour battery life.",
    "price": 49.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 80,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/23/13/39/speaker-1852993_640.jpg",
    "brand": "SoundBlast",
    "rating": 4.4,
    "reviewsCount": 95
  },
  {
    "id": "P1007",
    "name": "Kitchen Knife Set",
    "description": "5-piece stainless steel knife set with ergonomic handles.",
    "price": 39.99,
    "currency": "USD",
    "category": "Home & Kitchen",
    "stock": 90,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "ChefPro",
    "rating": 4.1,
    "reviewsCount": 75
  },
  {
    "id": "P1008",
    "name": "Women's Yoga Pants",
    "description": "High-waisted stretchy pants for yoga and casual wear.",
    "price": 29.99,
    "currency": "USD",
    "category": "Clothing",
    "stock": 100,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/37/yoga-1838781_640.jpg",
    "brand": "FitWear",
    "rating": 4.5,
    "reviewsCount": 130
  },
  {
    "id": "P1009",
    "name": "Wireless Charging Pad",
    "description": "Fast wireless charger compatible with Qi-enabled devices.",
    "price": 24.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 70,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "ChargeMax",
    "rating": 4.3,
    "reviewsCount": 85
  },
  {
    "id": "P1010",
    "name": "Coffee Maker",
    "description": "Single-serve coffee machine with reusable pods.",
    "price": 69.99,
    "currency": "USD",
    "category": "Home & Kitchen",
    "stock": 50,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/37/coffee-1838782_640.jpg",
    "brand": "BrewPro",
    "rating": 4.4,
    "reviewsCount": 100
  },
  {
    "id": "P1011",
    "name": "Gaming Mouse",
    "description": "Ergonomic mouse with customizable RGB lighting.",
    "price": 34.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 55,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/163036/mouse-computer-wireless-163036.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "GameMax",
    "rating": 4.2,
    "reviewsCount": 90
  },
  {
    "id": "P1012",
    "name": "Non-Stick Cookware Set",
    "description": "10-piece set including pots and pans.",
    "price": 89.99,
    "currency": "USD",
    "category": "Home & Kitchen",
    "stock": 40,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/37/pan-1838783_640.jpg",
    "brand": "CookPro",
    "rating": 4.5,
    "reviewsCount": 110
  },
  {
    "id": "P1013",
    "name": "Fitness Tracker Watch",
    "description": "Water-resistant tracker with heart rate monitor.",
    "price": 59.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 65,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/1634462/pexels-photo-1634462.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "FitMax",
    "rating": 4.1,
    "reviewsCount": 80
  },
  {
    "id": "P1014",
    "name": "Leather Wallet",
    "description": "Slim wallet with RFID blocking technology.",
    "price": 24.99,
    "currency": "USD",
    "category": "Accessories",
    "stock": 200,
    "availability": "In Stock",
    "imageUrl": "https://cdn.pixabay.com/photo/2016/11/19/14/37/wallet-1838784_640.jpg",
    "brand": "WalletPro",
    "rating": 4.3,
    "reviewsCount": 95
  },
  {
    "id": "P1015",
    "name": "Wireless Keyboard",
    "description": "Ergonomic keyboard with multi-device connectivity.",
    "price": 44.99,
    "currency": "USD",
    "category": "Electronics",
    "stock": 75,
    "availability": "In Stock",
    "imageUrl": "https://images.pexels.com/photos/159298/keyboard-computer-windows-mac-159298.jpeg?auto=compress&cs=tinysrgb&w=640",
    "brand": "KeyMax",
    "rating": 4.4,
    "reviewsCount": 105
  }
];

  try {
    for (const product of initialProducts) {
      const params = { TableName: tableName, Item: product };
      await ddbDocClient.send(new PutCommand(params));
    }
    return {
      statusCode: 201,
      body: JSON.stringify({ message: 'Products seeded successfully', count: initialProducts.length }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error seeding products', error: (error as Error).message }),
    };
  }
};

// Default export
export default { getProducts, addProduct, seedProducts };