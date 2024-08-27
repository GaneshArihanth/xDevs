const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bgarihanth:Gan12345@cluster1.z7q6q.mongodb.net/todo_list")

const todo = mongoose.model("todos", {
    title: String,
    description: String,
    completed: Boolean
})

module.exports = {
    todo
}