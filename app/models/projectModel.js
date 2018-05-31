'use strict';

const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var ProjectSchema=new Schema({
    _id:{
        type:Number,
        required:'Enter project id'
    },
    name:{
        type:String,
        required:'Enter project name'
    },
    lead_id:{
        type:Number,
        default:1
    },
    start_date:{
        type:Date,
        default:Date.now,
    },
    end_date:{
        type:Date,
        default:Date.now,
    }
});

module.exports=mongoose.model('Projects',ProjectSchema);