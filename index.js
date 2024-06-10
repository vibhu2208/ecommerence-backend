const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

// Connect to MongoDB
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

//endpoint for fetching products and searching
app.get('/products', async (req, res) => {
  const query = req.query.query;
  let items;

  try {
    if (query && query.length > 3) {
      items = await Item.find({
        name: new RegExp(query, 'i'),
      });
    } else {
      items = await Item.find();
    }

    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
