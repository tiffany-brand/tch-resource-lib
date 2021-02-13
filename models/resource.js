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

resourceSchema.index({
    title: 'text',
    author: 'text',
    description: 'text',
    tags: 'text'
}, {
    weight: {
        title: 5,
        tags: 4,
        author: 3,
        description: 1
    },
});

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;