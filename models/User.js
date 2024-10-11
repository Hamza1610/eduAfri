const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProgressSchema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  status: { type: String, enum: ['In Progress', 'Completed'], default: 'In Progress' }
});

const userSchema = new Schema({
  name: String,
  email: String,
  takenCourses: [userProgressSchema],
  inProgressCourses: [userProgressSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
