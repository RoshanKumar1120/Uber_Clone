const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const app=express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const cookieparser=require('cookie-parser');
const captainRoutes=require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());



app.get('/',(req,res)=>{
    res.send('Hello Roshan');
});

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports=app;