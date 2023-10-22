const mongoose=require('mongoose');
try{
    mongoose.connect('mongodb://127.0.0.1:27017/e-comm')
    console.log("connected"); 
}catch(err){
    console.log(err);

}