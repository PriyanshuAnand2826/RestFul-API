require('dotenv').config()
const express=require('express')
const app=express();
const Post=require('./models/Post')

const db=require('./config/db')
db().then((data)=>{
  console.log('server connected to db');
}).catch((err)=>{
  console.log(err,'Connection failed')
})

app.use(express.json())

//post api to post the data 
app.post('/api/post',(req,resp)=>{
   const{title,description}=req.body;
   const post=new Post({title,description})
   post.save().then((data)=>{
    resp.json({mesaage:'Data post successfully'})
   }).catch((err)=>{
    resp.json(err)
   })
})

//api to get the data 
app.get('/api/post',(req,resp)=>{
  Post.find().then((data)=>{
    console.log(data);
    resp.json(data)
  }).catch((err)=>{
    resp.json(err)
  })
})

app.put('/api/post/:id',(req,res)=>{
  const ID=req.params.id;
  const updateObj=req.body
  Post.findByIdAndUpdate(ID,updateObj).then((data)=>{
    res.json(data)
  }).catch((err)=>{
    res.json(err)
  })
})





app.listen(3000,()=>{
  console.log('server is running on port 3000')
})