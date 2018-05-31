// // var ObjectName=require('mongodb').ObjectName;
// var ObjectID=require('mongodb').ObjectId;

// module.exports=function(app,db){
//     app.get('/count',(req,res)=>{
//         var col=req.params.col;
//         var dbo=db.db('sample_dev');
//         var c=dbo.collection('emp').find({});
//         res.send(c);
//     });


//     app.get('/empDetails/:id',(req,res)=>{
//         const id=req.params.id;
//         const details={
//             '_id':id
//         };
//         var dbo=db.db('sample_dev');
//         dbo.collection('emp').findOne(details,(err,item)=>{
//             if(err){
//                 res.send({ 'error':'An error occurred' });
//             }else{
//                 res.send(item);
//             }   
//         })
//     });
// };

'use strict';

module.exports=function(app){
    var skill=require('../controllers/skillController');
    
    app.route('/countEmp')
        .get(skill.count_all_emps);

    app.route('/emps')
        .get(skill.selectall_emps)
        .post(skill.add_emp);

    app.route('/emps/:empId')
        .get(skill.read_emp)
        .put(skill.update_emp)
        .delete(skill.delete_emp);

    app.route('/countProject')
        .get(skill.count_all_projects);

    app.route('/projects')
        .get(skill.selectall_projects)
        .post(skill.add_project);

    app.route('/projects/:projectId')
        .get(skill.read_project)
        .put(skill.update_project)
        .delete(skill.delete_project);
}