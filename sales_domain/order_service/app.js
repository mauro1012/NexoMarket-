const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/orders', orderRoutes);

db.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});