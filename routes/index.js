// escribir rutas aquí
const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
module.exports = router;


// const server = require('../app.js')
// const socketIo = require('socket.io');
// const io = socketIo(server)
// io.on('connection', ()=>{
//   console.log('new connection');
// });

// module.exports = function (io){
//   return router
// }


//agrego los metodos get
router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index',{ tweets: tweets, showForm: true } );
});


router.get('/users/:name', function(req, res) {
    console.log(req.body);
    let name = req.params.name;
    let tweets = tweetBank.find( { "name": name } );
    res.render( 'index', { tweets: tweets, showForm: true, twitero: name} );
  });
//el 2do parametro de render es un objeto, con dist propiedades

router.get('/tweets/:id', function(req, res) {
 
    let id = parseInt(req.params.id);
    let tweets = tweetBank.find( { "id": id } );
    res.render( 'index', { tweets: tweets} );
  });

router.post('/tweets' ,(req,res)=>{
    let name = req.body.name;
    let content = req.body.content;
    
    tweetBank.add(name , content);
    console.log(tweetBank);
    res.send("tweet agregado!!!")
    //res.send({name, content});
    
    //res.sendStatus(201);

});



