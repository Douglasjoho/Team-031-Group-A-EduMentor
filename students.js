const express =require( "express");
const dotenv =require("dotenv");
const path =require("path");
const cors =require ("cors");
// eslint-disable-next-line no-unused-vars
const { logger, dbConnection } = require ("./api/config");

// initialize new express app
const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use(cors());
app.use(express.json());
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }))

// all students
app.get("/",(req, res) => {

    let filterArr=["name","surname","email","address","phone number","gender","subject"];
    let keys=Object.keys(req.query)
    let filter={};
    filterArr.map(key=>{
       if(req.query[key]){
          filter[key]=req.query[key];
       }
     })
    
    // use filter in db queries/ find
    res.json([students])
  
    });
  // Create Tutor
  app.post("/",(req, res) => {

   let filterArr=["name","surname","email","address","phone number","gender","subject"];
   let keys=Object.keys(req.query)
   let filter={};
   filterArr.map(key=>{
      if(req.query[key]){
         filter[key]=req.query[key];
      }
    })
   
   // use filter in db queries/ find
   res.json([students])
 
   });
  // Update Tutor
  app.update("/",(req, res) => {

    let filterArr=["name","surname","email","address","phone number","gender","subject"];
    let keys=Object.keys(req.query)
    let filter={};
    filterArr.map(key=>{
       if(req.query[key]){
          filter[key]=req.query[key];
       }
     })
    
    // use filter in db queries/ find
    res.json([students])
  
    });
    // Delete Tutor
    app.delete("/",(req, res) => {

        let filterArr=["name","surname","email","address","phone number","gender","subject"];
        let keys=Object.keys(req.query)
        let filter={};
        filterArr.map(key=>{
           if(req.query[key]){
              filter[key]=req.query[key];
           }
         })
        
        // use filter in db queries/ find
        res.json([students])
      
        });

  module.export=app;