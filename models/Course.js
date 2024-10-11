const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const curriculumSchema = new Schema({
  week: Number,
  content: String,
  downloadLink: String
});

const courseSchema = new Schema({
  name: String,
  about: String,
  rating: { type: Number, min: 1, max: 5 },
  instructor: String,
  lastUpdated: Date,
  language: String,
  level: { type: String, enum: ['Beginner', 'Mid', 'Advance'] },
  curriculum: [curriculumSchema],
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  resources: [String],
  permission: { type: Boolean, default: true },
  info: String
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
