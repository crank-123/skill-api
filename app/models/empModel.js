'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var EmpSchema=new Schema({
    _id:{
        type:Number,
        required:'Enter emp id'
    },
    name:{
        type:String,
        required:'Enter emp name'
    },
    phone:{
        type:Number,
        default:9876543210
    },
    email:{
        type:String,
        default:'abc@abc.com'
    },
    city:{
        type:String,
        default:'Mumbai'
    }

});

module.exports=mongoose.model('Emps',EmpSchema);