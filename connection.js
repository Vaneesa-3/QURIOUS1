const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vaneesajojuann:vaneesa@cluster0.ugerryu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err)
  })
// mongodb+srv://vaneesajojuann:vaneesa@cluster0.ugerryu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 new one
// mongodb+srv://vaneesajojuann:vaneesa@cluster0.uvlpugq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 old one