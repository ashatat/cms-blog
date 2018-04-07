const handlers = require('./handler');

const router = (req, res)=>{
  const endpoint = req.url;
  if (endpoint === '/'){
    handlers.serveFiles('/index.html', res);
  } else if (endpoint === '/create/post'){
    handlers.handlePosts(req, res);
  } else if (endpoint ==='/posts') {
    handlers.serveBlogs(res);
  } else {
    handlers.serveFiles(endpoint, res);
    console.log(endpoint);
  }
}

module.exports = router;
