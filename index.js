var express= require('express');//importing
const bcrypt = require('bcrypt');
var cors = require('cors')
require('./connection.js');
//var empModel=require('./models/employee.js');//importing employee model
const userModel = require('./models/user.js');

const app=express();//initialize
const jwt = require('jsonwebtoken');
const SECRET_KEY = "quriousSecretKey";

app.use(express.json());//middleware to parse JSON data
app.use(cors());//middleware to allow cross-origin requests

app.get('/', (req, res) => {//api creation
  res.send('Hello World')//we send a request and receive a response from backend as hello world
})

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role: "user" // default
    });

    await newUser.save();

    res.status(200).send("User registered successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found");
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid password");
    }

    // Create JWT token
    const payload = {
      id: user._id,
      role: user.role
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).send({ message: "Login successful", token, role: user.role });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});


app.get('/trial',(req,res)=>{
  res.send("This is a trial message")
})

app.post('/add',async(req,res)=>{
  await empModel(req.body).save()
  res.send("data added")
})
//MID
app.get('/view',async(req,res)=>{
  var a= await empModel.find()
  res.send(a)
})
app.delete('/remove/:id',async(req,res)=>{
  await empModel.findByIdAndDelete(req.params.id)
  res.send("deleted successfully")
})

app.put('/update/:id',async(req,res)=>{
  await empModel.findByIdAndUpdate(req.params.id,req.body)
  res.send("Updated successfully")
})


app.listen(3000,()=>
{
   console.log("Port 3000 is connected")
})

