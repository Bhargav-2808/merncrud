import User from "../Model/user.js";

export const getusers =  async (request, response) => {
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
  console.log(user);
  const newUser = User(user);
  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
