let {Schema,model, default: mongoose}=require('mongoose');
let adminSchema=Schema({
    name:{type:String},
    email:{type:Number},
    adminpass:{type:String},
    contact:{type:String}

});
module.exports=model("admindata",adminSchema);