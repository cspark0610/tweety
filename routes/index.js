// escribir rutas aquí
const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

//agrego los metodos get
router.get('/', function (req, res) {
    console.log(req.body);
  let tweets = tweetBank.list();
  res.render( 'index',{ tweets: tweets, showForm: true } );
});



router.get('/users/:name', function(req, res) {
 
    let name = req.params.name;
    let tweets = tweetBank.find( { name: name } );
    res.render( 'index', { tweets: tweets, showForm: true, twitero: name} );
  });
//el 2do parametro de render es un objeto, con dist propiedades

router.get('/tweets/:id', function(req, res) {
 
    let id = parseInt(req.params.id);
    let tweets = tweetBank.find( { id: id } );
    res.render( 'index', { tweets: tweets} );
  });

router.post('/' ,(req,res)=>{
    let name = req.body.name;
    let text = req.body.text;
    
    tweetBank.add({ name: name, text: text });

    //bajo ECMA6 puedo hacer add({name, text})
    res.sendStatus(201);

});



module.exports = router;