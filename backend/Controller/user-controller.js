import User from "../Model/user.js";

export const getusers = async (request, response) => {
  const users = await User.find();
  try {
    response.status(200).json(users);
  } catch (e) {
    response.status(409).json({ message: e.message });
  }
};

export const addusers = async (request, response) => {
  // response.send("code ");
  const user = request.body;
  // console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};



// Save data of edited user in the database
export const editUser = async (request, response) => {
  // let user = await User.findById(request.params.id);
  // user = request.body;

  // const editUser = new User(user);
  // try{
  //     await User.updateOne({id: request.params.id}, editUser);
  //     response.status(201).json(editUser);
  // } catch (error){
  //     response.status(409).json({ message: error.message});     
  // }

  const inventory = new User({
      name:request.body.name,
      age:request.body.age,
      email:request.body.email,
      mobile:request.body.mobile
  });

  User.updateOne({ _id: request.params.id }, request.body).then(result => {
    response.status(200).json({ message: "Update successful!" });
  });
}
  
  //let user = await User.findById(request.params.id);
  
  // User.findOneAndUpdate( {_id: request.params.id}
  //   ,
  //   {$set : {

  //     name:request.body.name,
  //     age:request.body.age,
  //     email:request.body.email,
  //     mobile:request.body.mobile

  //   }}, options

  //   ).then(result=>{
  //     response.status(200).json(
  //       {
  //         updated: result
  //       }
  //     )
  //   }).catch(error =>{
  //     response.status(500).json(
  //       {
  //         error:error
  //       }
  //     )
  //   })


export const deleteusers = async (request, response) => {
  try{
      await User.deleteOne({_id: request.params.id});
      response.status(201).json("User deleted Successfully");
  } catch (error){
      response.status(409).json({ message: error.message}); 
  }
}

