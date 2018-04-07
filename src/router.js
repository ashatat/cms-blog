const handlers = require('./handler');

const router = (req, res)=>{
  const endpoint = req.url;
  if (endpoint === '/'){
    handlers.serveFiles('/index.html', res);
  } else if (endpoint === '/create/post'){
    handlers.handlePosts(req, res);
  } else if (endpoint ==='/posts') {
    handlers.serveBlogs(res);
  } else if(endpoint === '/public/main.css'){
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  } else if (endpoint === '/public/script.js') {
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  } else if (endpoint === '/public/logo1.png') {
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  } else if (endpoint === '/public/style.css') {
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  } else {
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  }
}

module.exports = router;