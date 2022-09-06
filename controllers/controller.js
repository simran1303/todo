 const taskData = require('../model/taskData')

//get data

 exports.getData = async (req, res)=>{
   //  const result= await taskData.getTask();
   const result = await taskData.findAll()
   //console.log(result)

   const data =result.map(data =>{
      return data.dataValues
   })
   console.log(data)
    return res.status(200).send(data);
 }


// create 

 exports.postData = async (req, res)=>{
    const {task} = req.body;

    const data= await taskData.create({task :task});
    return res.status(200).send({'message':'data is added successfully', ...data.dataValues});
 };


// get by id
 exports.getById = async (req, res)=>{
    const {id} = req.params;
    
    const data= await taskData.findByPk(id);
    return res.status(200).send(data);
 };


// update
 exports.putData = (req, res)=>{
    const {id} = req.params;
    const {task} = req.body;
    taskData.findByPk(id)
    .then(findData =>{
      findData.task = task 
      return findData.save()
    })
    .catch(err =>{
      console.log(err)
    })

    return res.status(200).send({'message':'data is updated successfully'});

 }



 exports.deleteData = (req, res)=>{
    const {id} = req.params;
    
    taskData.findByPk(id)
    .then(findData =>{
      return findData.destroy()
    })
    .catch(err =>{
      console.log(err)
    })
 
    return res.status(200).send({'message':'data is deleted successfully'});

 };