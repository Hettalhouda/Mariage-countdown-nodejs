const express = require('express')
const app = express()
const port = 5000
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')







//for auto reflesh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
 
 
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
 
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});  


app.get('/index', (req, res) => {
    res.render("index")
  });

app.get('/', (req, res) => {
    res.redirect('/index')
   
  });


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  
  });

  