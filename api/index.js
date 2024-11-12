const express = require('express');
const router = express.Router();

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Home Page
app.get('/', (request, response) => {
    // response.status(200).json({ message: 'API Homepage' });
    response.send('<h1>API Homepage</h1>');
});

// Customers  
const customerRouter = require('./routes/customer');  
app.use('/customers', customerRouter);  

// Orders  
const orderRouter = require('./routes/order');  
app.use('/orders', orderRouter);  

// Payments  
const paymentRouter = require('./routes/payment');
app.use('/payments', paymentRouter);  


//hatdog
//hatdog

