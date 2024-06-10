# E-Commerce Website

This is a simple e-commerce website project built with Node.js and Express on the backend. It provides APIs for browsing and searching for clothing items. The frontend can be developed separately using HTML, CSS, and JavaScript.

## Features

- **Browse Products**: Display a list of clothing items with images, prices, and discounts.
- **Search Products**: Search for clothing items by name.
- **Dynamic Results**: Dynamic search results as the user types in the search bar.
- **RESTful APIs**: Backend APIs built using Node.js and Express.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: (To be developed separately)
- **Deployment**: Heroku (for backend deployment)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/vibhu2208/ecommerence-backend
   cd ecommerce-backend
2. **Install dependencies:**
   ```bash
   npm install
3. **Set up environment variables:**

Create a .env file in the root directory and add the following:
   ```bash
   PORT=3000
   MONGODB_URI=your_mongodb_uri

## 4.**Seed the database (if not already seeded):**

``bash

node seed.js
5.Run the server:

bash

node index.js
Access the API endpoints:

You can now access the API endpoints at http://localhost:3000.
