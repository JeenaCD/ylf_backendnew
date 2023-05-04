const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require('nodemailer');
const Ippopay = require("node-ippopay");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const RegisteredUser = require('./model/registered_user')



var ippopay_instance = new Ippopay({
  public_key: 'pk_test_h8d0Gf1xVZFX',
  secret_key: 'sk_test_3TnKb4kLKXQgrWyckkniyMSWTHraAIw08wsyHFM8',
});

app.get('/ippopayment',(req,res)=>{
  ippopay_instance.createOrder({
    amount: 10.00, 
    currency: 'INR',
    payment_modes: "cc,dc,nb,upi",
    notify_url:"http://localhost:4200/ippo",
    customer: {
        name: "Test",
        email: "test@gmail.com",
        phone: {
            country_code: "91",
            national_number: "9876543210"
        }
    }
  }, function (err, data){
   console.log(data);
   res.send(data);
  });
})




app.post("/userRegistration", async (req, res) => {
  var flag = false;
  const registered_user = await RegisteredUser.findOne({
    email: req.body.email,
  });
  if (!registered_user) {
    flag = true;
    var user = {
      name: req.body.name,
      email: req.body.email,
      dob: req.body.dob,
      district: req.body.district,
      address: req.body.address,
      phone_no:req.body.phone_no,
      whatzup_no:req.body.whatzup_no
    };
    var user = new RegisteredUser(user);
    user.save();
    return res.status(200).json({ msg: "Successfully registered", flag });
  } else {
    flag = false;
    res.status(200).json({ msg: "This Username already registered", flag });
  }
});


app.post('/sendemail',(req,res)=>{

  console.log("request came");
  let user = req.body;
  sendMail(user,info =>{
    console.log(`The mail has been send and the id is ${info.messageId}`);
    res.send(info);
  })
});
async function sendMail(user,callback){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'yuvadharalitfest@gmail.com',
          pass: 'zbvzyzpeuazaanht'
        }
      });

      var mailOptions = {
        from: 'yuvadharalitfest@gmail.com',
        to: 'jeena.c@bayesian.in',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      let info=await transporter.sendMail(mailOptions);

      callback(info);

    }
    
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected',()=>{
  console.log('Mongoose is connected');
})
// mongoose.connect(process.env.DATABASE_PATH, { useNewUrlParser: true }).then(() => {
//       console.log('Connected to the Database successfully')
//     });

app.use(express.static(path.join(__dirname,'./client/dist/frontend')));



app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,'/client/dist/frontend','index.html'));
})
const PORT = process.env.PORT || 8094;
app.listen(PORT,()=>{
  console.log("server is listening the port", PORT)
})