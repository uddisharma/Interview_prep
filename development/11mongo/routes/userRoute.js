const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUserById, addMultipleUsers, updateUser, updateAll, deleteUser, getUserByEmail } = require('../controllers/userController');

router.post("/add", addUser);
router.post("/addmultiple", addMultipleUsers);

router.get("/getall", getUsers)
router.get("/get/:id", getUserById)
router.get("/getbyemail/:email", getUserByEmail) // using Indexing


//When deciding between PUT and PATCH, consider whether you're replacing the entire resource (use PUT) or just updating specific fields (use PATCH).

router.put("/update/:id", updateUser)  // need whole data to update
router.patch("/updateall", updateAll)  // need only data to update


router.delete("/delete/:id", deleteUser)


module.exports = router