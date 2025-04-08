
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