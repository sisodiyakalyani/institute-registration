const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  instituteType: { type: String, required: true },
  board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
  medium: { type: mongoose.Schema.Types.ObjectId, ref: 'Medium', required: true },
  classCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'ClassCategory', required: true },
  standard: { type: mongoose.Schema.Types.ObjectId, ref: 'Standard', required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
