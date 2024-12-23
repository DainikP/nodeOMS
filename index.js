const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
