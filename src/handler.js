const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const contentType = {
  html:'text/html',
  css: 'text/css',
  jpg: 'images/jpg',
  png: 'images/png',
  ico: 'images/ico',
  js: 'text/javascript'
}

const serveFiles = (endpoint, res)=>{
  const filePath = path.join(__dirname, '..','public', endpoint);
  const fileExtention = endpoint.split('.')[1];
  res.writeHead(200,{'Content-Type':`${contentType[fileExtention]}`});
  fs.readFile(filePath, (error, file)=>{
    if (error){console.log(error);
    }
    res.end(file);
  });
}

const handlePosts = (req, res)=>{
  res.writeHead(302, { Location: '/' });
  let reqData = '';
  req.on('data',(chunk)=>{
    reqData += chunk;
  });
  req.on('end', ()=>{
    const convertedReqData = querystring.parse(reqData);
    writeBLogs(convertedReqData);
  });
  res.end();
}

const writeBLogs = (reqData)=>{
  fs.readFile(path.join(__dirname,'/posts.json'), (error, data)=>{
    if (error){
      console.log(error)
    } else {
    const blogTime = Date.now();
    let blogData = JSON.parse(data);
    blogData[blogTime] = reqData.post;
    fs.writeFile(path.join(__dirname, '/posts.json'), JSON.stringify(blogData) , (error, data) =>{
      error?console.log(error):console.log('data succesfully saved');
    });
  }
  });
}

const serveBlogs = (res)=>{
  fs.readFile(path.join(__dirname,'/posts.json'), (error, data)=>{
    res.end(data);
  })
}

module.exports = { serveFiles, handlePosts, serveBlogs}