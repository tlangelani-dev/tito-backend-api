const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('combined'));

app.use('/', require('./routes/app.router'));
app.use('/products', require('./routes/products.router'));

app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`));
