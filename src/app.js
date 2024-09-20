const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routes');

const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/uploads', cors());

app.get('/', (req,res) => {
    res.send('Backend web ventas');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
