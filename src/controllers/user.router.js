const User = require("../models/User");

class UserController{
    async createUser(req,res){

        const { name, email, password } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const response = await User.create({ name, email, password });
        
        if (!response) {
            return res.status(500).json({ message: 'Error creating user' });
        }

        res.status(201).json({
            message: 'User created successfully',
            user: response
        });

    }
    async getUser(req,res){
        const {id} = req.params;
        const response = await User.findOne({ where: { id } });
        if (!response) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({
            message: 'User retrieved successfully',
            user: response
        });
    }
    async updateUser(req,res){
        const {id} = req.params;
        const { name, email, password } = req.body;
        const response = await User.update({name, email, password}, { where: { id } });
        if (!response) {
            return res.status(500).json({ message: 'Error updating user' });
        }
        res.status(200).json({
            message: 'User updated successfully',
            user: response
        });
    }
    async deleteUser(req,res){
        const {id}  = req.params;
        const response = await User.destroy({ where: { id } });
        if (!response) {
            return res.status(500).json({ message: 'Error deleting user' });
        }
        res.status(200).json({
            message: 'User deleted successfully',
            user: response
        });
    }
    async getAllUsers(req,res){
        const response = await User.findAll({});
        if (!response) {
            return res.status(500).json({ message: 'Error retrieving users' });
        }
        res.status(200).json({
            message: 'Users retrieved successfully',
            users: response
        });
    }
}


module.exports = UserController;