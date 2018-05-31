'use strict';

const mongoose=require('mongoose');
const Emp=mongoose.model('Emps');
const Project=mongoose.model('Projects');

exports.selectall_emps=function(req,res){
    Emp.find({},function(err,emp){
        if(err)
            res.send(err);
        res.json(emp);
    });
};

exports.add_emp=function(req,res){
    var new_Emp=new Emp(req.body);
    new_Emp.save(function(err,emp){
        if(err)
            res.send(err);
        res.json(emp);
    });
}

exports.read_emp=function(req,res){
    Emp.findById(req.params.empId,function(err,emp){
        if(err)
            res.send(err);
        res.json(emp);
    });
};

exports.update_emp=function(req,res){
    Emp.findOneAndUpdate({_id:req.params.empId},req.body,{new:true},function(err,emp){
        if(err)
            res.send(err);
        res.json(emp);
    });
};

exports.delete_emp=function(req,res){
    Emp.remove({_id:req.params.empId},function(err,emp){
        if(err)
            res.send(err);
        res.json({message:'Emp record deleted'});
    });
};

exports.count_all_emps=function(req,res){
    Emp.count({},function(err,count){
        if(err)
            res.send(err);
        res.json(count);
    });
};
//--------------------------------------------------------------------------------------
exports.selectall_projects=function(req,res){
    Project.find({},function(err,project){
        if(err)
            res.send(err);
        res.json(project);
    });
};

exports.add_project=function(req,res){
    var new_Project=new Project(req.body);
    new_Project.save(function(err,project){
        if(err)
            res.send(err);
        res.json(project);
    });
}

exports.read_project=function(req,res){
    Project.findById(req.params.projectId,function(err,project){
        if(err)
            res.send(err);
        res.json(project);
    });
};

exports.update_project=function(req,res){
    Project.findOneAndUpdate({_id:req.params.projectId},req.body,{new:true},function(err,project){
        if(err)
            res.send(err);
        res.json(project);
    });
};

exports.delete_project=function(req,res){
    Project.remove({_id:req.params.projectId},function(err,project){
        if(err)
            res.send(err);
        res.json({message:'Project record deleted'});
    });
};

exports.count_all_projects=function(req,res){
    Project.count({},function(err,count){
        if(err)
            res.send(err);
        res.json(count);
    });
};
