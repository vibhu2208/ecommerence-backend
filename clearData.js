//Used for clearing the existing data.

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

async function clearDatabase() {
  try {
    await Item.deleteMany(); // Clear the existing data
    console.log('All data removed from the items collection');
  } catch (error) {
    console.error('Error removing data:', error);
  } finally {
    mongoose.connection.close();
  }
}

clearDatabase();
