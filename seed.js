const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', { useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  discount: Number,
});

const Item = mongoose.model('Item', itemSchema);

const items = [
  {
    name: 'T-Shirt',
    description: 'A comfortable cotton t-shirt.',
    price: 19.99,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1690038781199-1c75a1e406c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
    discount: 10,
  },
  {
    name: 'Jeans',
    description: 'Stylish blue jeans.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 15,
  },
  {
    name: 'Jacket',
    description: 'Warm winter jacket.',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 20,
  },
  {
    name: 'Trouser',
    description: 'Comfortable trousers',
    price: 99.99,
    imageUrl: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    discount: 20,
  },
  {
    name: 'Fromal Pants',
    description: 'Warm winter jacket.',
    price: 99.99,
    imageUrl: 'https://images.pexels.com/photos/20455894/pexels-photo-20455894/free-photo-of-elegant-woman-in-a-white-shirt-and-black-trousers-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600',
    discount: 20,
  },
  {
    name: 'Sneakers',
    description: 'Warm winter jacket.',
    price: 99.99,
    imageUrl: 'https://media.istockphoto.com/id/1663937651/photo/fashion-store-or-magazine-concept-classic-casual-shoes-into-creative-minimal-design-unbranded.webp?b=1&s=170667a&w=0&k=20&c=6Sing3yQ9lTJB3cwpU2eEcKf6qxDQca6hLSLVcS7wxM=',
    discount: 20,
  }
];

Item.insertMany(items)
  .then(() => {
    console.log('Data seeded successfully');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error('Error seeding data:', error);
    mongoose.connection.close();
  });
