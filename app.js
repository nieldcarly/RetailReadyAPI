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
const routingGuideRoutes = require('./routes/routing-guides');

// TODO: Implement auth
// Use route modules with appropriate paths
app.use('/users', userRoutes);
app.use('/brands', brandRoutes);
app.use('/retailers', retailerRoutes);
app.use('/routing-guides', routingGuideRoutes);

// Sync models with the database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch((err) => {
    console.error('Error syncing database:', err);
});

// Root route
app.get('/', (req, res) => {
    res.send('Retail Ready!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
