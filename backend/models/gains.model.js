const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
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

const exerciseSchema = new Schema({
    name: String,
    movements: { type: [String], enum: ['Isometric', 'Concentric', 'Eccentric'] },
    muscle_group: { type: String, enum: ['Chest', 'Back', 'Core', 'Legs', 'Sub'] }
}, {
    collection: 'exercises'
});

const exerciseLogSchema = new Schema({
    exercise_id: String,
    profile_id: String,
    set_for_session: Number,
    total_reps_for_session: Number,
    session_weight: Number,
    date_of_session: Date,
    exercise_pr: Number,
}, { collection: 'logs' });

const Profile = model('Profile', profileSchema);
const Exercise = model('Exercise', exerciseSchema);
const ExerciseLog = model('ExerciseLog', exerciseLogSchema);

module.exports = { Exercise, ExerciseLog, Profile }