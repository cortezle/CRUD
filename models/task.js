var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema ({
    title: String,
    descripcion: String,
    estado: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tasks',TaskSchema);
