
class UserController{
    async createUser(req,res){
        res.status(201).json({
            message: 'User created successfully',
            user: req.body
        });
    }
    async getUser(req,res){
        res.status(200).json({
            message: 'User retrieved successfully',
            userId: req.params.id
        });
    }
    async updateUser(req,res){
        res.status(200).json({
            message: 'User updated successfully',
            userId: req.params.id,
            user: req.body
        });
    }
    async deleteUser(req,res){
        res.status(200).json({
            message: 'User deleted successfully',
            userId: req.params.id
        });
    }
    async getAllUsers(req,res){
        res.status(200).json({
            message: 'All users retrieved successfully',
            users: []
        });
    }
}


module.exports = UserController;