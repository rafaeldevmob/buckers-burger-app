
import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017').then(()=>{
  const app = express();
  const port = 3000;

  app.listen(port, ()=>console.log(`server is runnig on http://localhost:${port}`));
}).catch((error)=>console.log(`error on conect in mongodb: ${error}`));