const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: String,
    exercise_list: [String],
    execise_log: [String],
    weight: Number,
    height: Number,
    body_fat_percent: Number,
    lean_body_mass: Number,
    fat_free_mass_index: Number
})

const exerciseSchema = new Schema({
    name: String,
    movement: { type: String, enum: ['Isometric', 'Concentric', 'Eccentric']},
    muscle_group: { type: String, enum: ['Chest', 'Back', 'Core', 'Legs', 'Sub']}
    }
);

const exerciseLogSchema = new Schema({
    exercise_id: String,
    profile_id: String,
    set_for_session: Number,
    total_reps_for_session: Number,
    session_weight: Number,
    date_of_session: Date,
    exercise_pr: Number,
})



const Profile = model('Profile', profileSchema);
const Exercise = model('Exercise', exerciseSchema);
const ExerciseLog = model('ExerciseLog', exerciseLogSchema);

module.exports = { Exercise, ExerciseLog, Profile }