

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json())
// app.use(express.urlencoding({extended : true}))
app.use(cors());



app.get("/api/whoami" ,  function(req,res){
  let tosend = {};
  let ipaddress = req.ip;
  ipaddress = ipaddress.replace("::ffff:" , "");
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  tosend['ipaddress'] = ipaddress;
  tosend['language'] = language;
  tosend['software'] = software;
  res.json(tosend);
})

app.get( "/", function(req,res){res.send("<h1 style=\"text-align : center\">REQUEST PARSER </h1>")}

)

app.listen(3000 , ()=>{
  console.log("connected");
})