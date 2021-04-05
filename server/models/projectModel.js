const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
    poster: {
        type: String,
        required: true,
      },
    githublink: {
        type: String,
        required: true,
      },
    demolink: {
        type: String,
        required: true,
      },
    description: {
        type: String
      }

});

module.exports = mongoose.model('Project', projectSchema);