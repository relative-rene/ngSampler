export interface IprofileCollection {
    first_name: string;
    last_name: string;
    age: string;
    exercise_list: Array<string>;
    exercise_log: Array<string>;
    weight: number;
    height: number;
    body_fat_percent: number;
    lean_body_mass: number;
    fat_free_mass_index: number;
    _id:string;
}

export interface IexerciseCollection {
    name:string;
    movement: MovementEnum;
    muscle_group:MuscleGroupEnum;
}

export interface IlogCollection {
    exercise_id: string,
    profile_id: string,
    set_for_session: number,
    total_reps_for_session: number,
    session_weight: number,
    date_of_session: Date,
    exercise_pr: number,
}

enum MovementEnum {
    Isometric,
    Concentric,
    Eccentric,
}

enum MuscleGroupEnum {
    Chest,
    Back,
    Core,
    Legs,
    Sub
}