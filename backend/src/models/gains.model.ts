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

export const ProfileModel = samplerConn.model('Profile', profileSchema);
export const ExerciseModel = samplerConn.model('Exercise', exerciseSchema);
export const ExerciseLogModel = samplerConn.model('ExerciseLog', exerciseLogSchema);


// Profile Actions
export const createProfile = (values: Record<string, any>) => ProfileModel.create(values);
export const getAllProfiles = () => ProfileModel.find();
export const getProfileById = (id: string) => ProfileModel.findById({ _id: id });
export const getAProfilesExerciseList = (id: string) => ProfileModel.find({ _id: id }, { exercises: 1 });
export const patchAProfileById = (id: string, values: Record<string, any>) => ProfileModel.findOneAndUpdate({ _id: id }, values);
export const deleteProfileById = (id: string) => ProfileModel.findOneAndRemove({ _id: id });

// Exercise Actions
export const createExercise = (values: Record<string, any>) => ExerciseModel.create(values);
export const getAllExercises = () => ExerciseModel.find();
export const getOneExerciseById = (id: string) => ExerciseModel.findById({ _id: id });
export const patchAnExerciseById = (id: string, values: Record<string, any>) => ExerciseModel.findOneAndUpdate({ _id: id }, values);
export const deleteOneById = (id: string) => ExerciseModel.findOneAndRemove({ _id: id });

// ExerciseLog Actions
export const getAllExerciserLogs = () => ExerciseLogModel.find();
export const createExerciseLog = (profileId: string, values: Record<string, any>) => values["profile_id"] = profileId && ExerciseLogModel.create(values);
export const getExerciseLogById = (logId:string)=> ExerciseLogModel.findById({_id:logId})
export const patchExerciseLogById = (id: string, values: Record<string, any>) => ExerciseLogModel.findOneAndUpdate({ _id: id, values });
export const deleteExerciseLogById = (id: string) => ExerciseLogModel.findOneAndRemove({ _id: id });
