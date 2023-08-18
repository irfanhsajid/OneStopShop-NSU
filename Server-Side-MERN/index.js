const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
// app.use(cors(
//     {
//       origin:"*", //frontend link setup 
//       methods:["GET","PUT","POST","DELETE"], //methods we will use to interact with the database
//       credentials:true
//     }
//     ))

app.use(express.json());
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     if (req.method === "OPTIONS") {
//       return res.sendStatus(200);
//     }
//     next();
//   });

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vaopm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// async function run() {
//     try {
//         await
client.connect();
const productsCollection = client.db("Qutir-Shop").collection("products");
const ordersCollection = client.db("Qutir-Shop").collection("orders");
const usersCollection = client.db("Qutir-Shop").collection("users");
const reviewsCollection = client.db("Qutir-Shop").collection("reviews");
console.log('database is connected successfully');

//products api
app.get('/products', async (req, res) => {
    const result = await productsCollection.find({}).toArray();
    res.send(result);
})
//My Orders Post method
app.post('/addOrder', (req, res) => {
    // console.log(req.body);
    ordersCollection.insertOne(req.body).then(result => {
        console.log(result);
        res.send(result.insertedId);
    })
});
//get ALL the orders
app.get('/orders', async (req, res) => {
    const result = await ordersCollection.find({}).toArray();
    res.send(result);
})
//get my filtered orders
app.get('/orders/:email', async (req, res) => {
    const email = req.params.email;
    const query = { email: email };
    const result = await ordersCollection.find(query).toArray();
    res.send(result);
})
//delete Orders
app.delete('/deleteOrder/:id', async (req, res) => {
    const result = await ordersCollection.deleteOne({ _id: ObjectId(req.params.id) });
    res.send(result);
});

//delete a Product
app.delete('/deleteProduct/:id', async (req, res) => {
    const result = await productsCollection.deleteOne({ _id: ObjectId(req.params.id) });
    res.send(result);
});

app.get('/users/:email', async (req, res) => {
    const email = req.params.email;
    const query = { email: email }
    const user = await usersCollection.findOne(query);
    let isAdmin = false;
    if (user?.role === 'admin') {
        isAdmin = true;
    }
    res.json({ admin: isAdmin });
})

//users post method
app.post('/users', async (req, res) => {
    const user = req.body;
    const result = await usersCollection.insertOne(user)
    res.send(result);
})

/* The code snippet is defining a PUT endpoint at '/users' that allows for updating or inserting a user
document in the 'users' collection of the MongoDB database. */
//upsert users 
app.put('/users', async (req, res) => {
    const user = req.body;
    const filter = { email: user.email };
    const options = { upsert: true };
    const updateDoc = { $set: user };
    const result = await usersCollection.updateOne(filter, updateDoc, options);
    res.json(result);
});

app.put('/users/admin', async (req, res) => {
    const user = req.body;
    console.log('put', user);
    const filter = { email: user.email };
    const updateDoc = { $set: { role: 'admin' } };
    const result = await usersCollection.updateOne(filter, updateDoc);
    res.json(result);
})

//post user reviews 
app.post('/addReview', async (req, res) => {
    const review = req.body;
    const result = await reviewsCollection.insertOne(review)
    res.send(result);
});
//post user reviews 
app.post('/addProduct', async (req, res) => {
    const product = req.body;
    const result = await productsCollection.insertOne(product)
    res.send(result);
});

//get clients review
app.get('/reviews', async (req, res) => {
    const result = await reviewsCollection.find({}).toArray();
    res.send(result);
})


//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('One Stop Shop Server is running :: test');
})

app.get('/test', (req, res) => {
    res.send('test');
})

app.listen(port, () => {
    console.log('listening from the port', port);
})

