const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
    title: { type: String, required: true },
    author: [String],
    description: String,
    date: { type: Date, default: Date.now },
    tags: [String],
    files: [String],
    image: String,
    links: [String]
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;