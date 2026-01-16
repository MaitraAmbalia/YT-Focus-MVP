import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },

  bio: { type: String, default: "" },

  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  
  streak: { type: Number, default: 0 },
  lastStudyDate: { type: Date },

  activityLog: [{
    date: { type: String }, 
    count: { type: Number, default: 0 } 
  }],

  stats: {
    totalMinutes: { type: Number, default: 0 },
    videosCompleted: { type: Number, default: 0 },
    quizzesPassed: { type: Number, default: 0 }
  },

  certificates: [{
    courseId: String,
    courseTitle: String,
    thumbnail: String,
    issuedAt: { type: Date, default: Date.now },
    imageUrl: String 
  }]
}, {
  timestamps: true
});
export default mongoose.model('User', userSchema);
