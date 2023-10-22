const express=require("express");
const app=express();
require('./db/config');
const User=require('./db/User');
const Product=require('./db/Product')
const cors=require("cors")

app.use(cors())
app.use(express.json());

app.post('/register',async(req,resp)=>{
    resp.send(req.body)
    const user=new User(req.body);
    console.log(req.body);
    let result= await user.save()
    // response me hmara password nhi aana chahiye 
    result=result.toObject()
    delete result.password
    
})

app.post('/login',async(req,resp)=>{
       if(req.body.email && req.body.password){
        const user= await User.findOne(req.body).select("-password")
   
   
        if(user){
            resp.send(user)
        }
        else{
            resp.send({result:"No user Found"})
        }
       } else{
        resp.send({result:"No user Found"})
       }
  
})

app.post('/addProduct',async(req,resp)=>{
    const product=new Product(req.body);
    const result=await product.save()
    resp.send(result)
    console.log(result);

})

app.get('/products',async(req,resp)=>{
    let products= await Product.find()

    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({result:"no result found"})
    }

})

app.delete("/product/:id",async(req,resp)=>{
   
   let result =await Product.deleteOne({_id:req.params.id})
    resp.send(result);

})

app.get('/product/:id',async(req,resp)=>{
    let result=await Product.findOne({_id:req.params.id});
    resp.send(result)
})

app.put('/product/:id',async(req,resp)=>{
    let result =await Product.updateOne({_id:req.params.id},{
        $set:req.body
    })
    resp.send(result)
})

// search API
app.get('/search/:key',async(req,resp)=>{
    let result=await Product.find({
"$or":[
    {productName:{$regex:req.params.key}},
     {category:{$regex:req.params.key}},
      {company:{$regex:req.params.key}}

]
    })
    resp.send(result)
});

app.listen(5000);