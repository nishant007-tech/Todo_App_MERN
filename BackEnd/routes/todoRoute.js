const router = require('express').Router();

const todoModel = require('../models/todo');

router.post('/createtodo', async (req, res) => {

    try {
        const newTodo = new todoModel({
            todoData: req.body.data
        });
        await newTodo.save();
        return res.json(newTodo);
    } catch (error) {
        console.log(error)
    }
});
router.get('/gettodos', async (req, res) => {
    try {
        const todos = await todoModel.find();
        return res.json(todos);
    } catch (err) {
        console.log(err)
    }
});


router.delete('/deletetodo/:id', async (req, res) => {
    try {
        await todoModel.findByIdAndDelete(req.params.id);
        return res.json({ todoId: req.params.id })
    } catch (err) {
        console.log(err)
    }
});
router.post('/edittodo', async (req, res) => {
    try {
        let todo = await todoModel.findById(req.body.id);
        todo.todoData = req.body.data;
        await todo.save();
        const todos = await todoModel.find();
        return res.json(todos);
    } catch (err) {
        console.log(err)
    }
});
router.post('/completetodo', async (req, res) => {
    try {
        let todo = await todoModel.findById(req.body.id);
        todo.isCompleted = !todo.isCompleted;
        await todo.save();
        const todos = await todoModel.find();
        return res.json(todos);
    } catch (err) {
        console.log(err)
    }
});
router.delete('/deleteAllTodos', async (req, res) => {
    try {
        await todoModel.remove();
        const todos = await todoModel.find();
        return res.json(todos);
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;