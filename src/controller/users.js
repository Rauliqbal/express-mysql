const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
   try {
      const [data] = await UsersModel.getAllUsers();

      res.json({
         message: "Get All Users",
         data: data,
      });
   } catch (error) {
      res.status(500).json({
         message: "Server Error",
         serverMessage: error,
      });
   }
};

const createNewUser = (req, res) => {
   console.log(req.body);
   res.json({
      message: "Create new Users",
      status: "success",
   });
};

const updateUser = (req, res) => {
   const { id } = req.params;
   console.log(req.params);
   res.json({
      message: "update user",
      data: req.body,
   });
};

const deleteUser = (req, res) => {
   const { id } = req.params;
   res.json({
      message: "Delete user",
      data: {
         id: id,
         name: "Rauliqbal",
         email: "raul@gmail.com",
      },
   });
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
