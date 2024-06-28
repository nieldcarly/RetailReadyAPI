require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const sequelize = require('./models/index');
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Import and use route modules
const userRoutes = require('./routes/users');
const brandRoutes = require('./routes/brands');
const retailerRoutes = require('./routes/retailers');

// Use route modules with appropriate paths
app.use('/users', userRoutes);
app.use('/brands', brandRoutes);
app.use('/retailers', retailerRoutes);

// Example of defining more routes
// const orderRoutes = require('./routes/orders');
// const guideRoutes = require('./routes/guides');
//
// app.use('/orders', orderRoutes);
// app.use('/guides', guideRoutes);

// Sync models with the database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
