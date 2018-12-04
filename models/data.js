const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  choreComplete: { type: Date, default: Date.now },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'Children' },
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;