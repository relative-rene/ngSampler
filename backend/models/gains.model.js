const mongoose = require('mongoose');
const samplerConn = mongoose.createConnection('mongodb://127.0.0.1:27017/sampler', { useNewUrlParser: true, useUnifiedTopology: true });

const profileSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: String,
    exercise_list: [String],
    exercise_log: [String],
    weight: String,
    height: String,
    body_fat_percent: String,
    lean_body_mass: String,
    fat_free_mass_index: String
}, { collection: 'profiles' });

const exerciseSchema = new mongoose.Schema({
    name: String,
    movements: { type: [String], enum: ['Isometric', 'Concentric', 'Eccentric'] },
    muscle_group: { type: String, enum: ['Chest', 'Back', 'Core', 'Legs', 'Sub'] }
}, {
    collection: 'exercises'
});

const exerciseLogSchema = new mongoose.Schema({
    exercise_id: String,
    profile_id: String,
    set_for_session: Number,
    total_reps_for_session: Number,
    session_weight: Number,
    date_of_session: Date,
    exercise_pr: Number,
}, { collection: 'logs' });

const Profile = samplerConn.model('Profile', profileSchema);
const Exercise = samplerConn.model('Exercise', exerciseSchema);
const ExerciseLog = samplerConn.model('ExerciseLog', exerciseLogSchema);

module.exports = { Exercise, ExerciseLog, Profile }