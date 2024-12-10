import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Ojas Jogdand",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Sundar Pichaii",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Satya Nadela",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/posts",function(req,res){
    res.json(posts);
});

app.get("/posts/:id",function(req,res){
   const id=req.params.id;
   const idd=parseInt(id);
   for(let i=0;i<posts.length;i++)
   {
     if(posts[i].id===idd)
     {
       res.json(posts[i]);
       break;
     }
   }
});

app.post("/posts",function(req,res){
  const obj=new Object();
  lastId++;
  obj.id=lastId;
  obj.title=req.body.title;
  obj.content=req.body.content;
  obj.author=req.body.author;
  obj.date=req.body.date;
  posts.push(obj);
  res.json(obj);
});

app.patch("/posts/:id",function(req,res){
  const id=req.params.id;
  const idd=parseInt(id);
  for(var i=0;i<posts.length;i++)
  {
    if(posts[i].id===idd)
    {
       if(req.body.title!==undefined)
       {
         posts[i].title=req.body.title;
       }
         if(req.body.content!==undefined)
         {
           posts[i].content=req.body.content;
         }
           if(req.body.author!==undefined)
           {
             posts[i].author=req.body.author;
           }
             if(req.body.date!==undefined)
             {
               posts[i].date=req.body.date;
             }
             break;
            }              
  }
  res.json(posts[i]);
});

app.delete("/posts/:id",function(req,res){
  const id=req.params.id;
  const idd=parseInt(id);
  for(let i=0;i<posts.length;i++)
  {
    if(posts[i].id===idd)
    {
      posts.splice(i,1);
      break;
    }
  }
  res.json(posts);
});
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
