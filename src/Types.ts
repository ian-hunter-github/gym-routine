// types.ts

export enum CardioActivityEnum {
    RUNNING = 'RUNNING',
    HIIT = 'HIIT',
    CYCLING = 'CYCLING',
    JUMP_ROPE = 'JUMP_ROPE',
    BOXING_DRILLS = 'BOXING_DRILLS',
    BRISK_WALKING = 'BRISK_WALKING',
    SWIMMING = 'SWIMMING',
}

export enum WeightLiftingActivityEnum {
    SQUAT = 'SQUAT',
    BENCH_PRESS = 'BENCH_PRESS',
    DEADLIFT = 'DEADLIFT',
    BENTOVER_ROW = 'BENTOVER_ROW',
    OVERHEAD_PRESS = 'OVERHEAD_PRESS',
    TRICEP_EXERCISES = 'TRICEP_EXERCISES',
    BICEP_EXERCISES = 'BICEP_EXERCISES',
    ROWS = 'ROWS',
    SHOULDER_PRESS = 'SHOULDER_PRESS',
    LEG_CURLS = 'LEG_CURLS',
}

// Exercise Names Mapping
export const ExerciseNamesMap = { 
    [WeightLiftingActivityEnum.SQUAT]: { full: 'Squat', short: 'SQT' },
    [WeightLiftingActivityEnum.BENCH_PRESS]: { full: 'Bench Press', short: 'BPR' },
    [WeightLiftingActivityEnum.DEADLIFT]: { full: 'Deadlift', short: 'DLF' },
    [WeightLiftingActivityEnum.BENTOVER_ROW]: { full: 'Bentover Row', short: 'BRW' },
    [WeightLiftingActivityEnum.OVERHEAD_PRESS]: { full: 'Overhead Press', short: 'OVP' },
    [CardioActivityEnum.RUNNING]: { full: 'Running', short: 'RUN' },
    [CardioActivityEnum.HIIT]: { full: 'High-Intensity Interval Training', short: 'HIIT' },
    [CardioActivityEnum.CYCLING]: { full: 'Cycling', short: 'CYCL' },
    [CardioActivityEnum.JUMP_ROPE]: { full: 'Jump Rope Exercises', short: 'JUMP' },
    [WeightLiftingActivityEnum.TRICEP_EXERCISES]: { full: 'Tricep Exercises', short: 'TRI' },
    [WeightLiftingActivityEnum.BICEP_EXERCISES]: { full: 'Bicep Exercises', short: 'BIC' },
    [WeightLiftingActivityEnum.ROWS]: { full: 'Rows', short: 'ROW' },
    [WeightLiftingActivityEnum.SHOULDER_PRESS]: { full: 'Shoulder Press', short: 'SHP' },
    [WeightLiftingActivityEnum.LEG_CURLS]: { full: 'Leg Curls', short: 'LC' },
    [CardioActivityEnum.BOXING_DRILLS]: { full: 'Boxing Drills', short: 'BOX' },
    [CardioActivityEnum.BRISK_WALKING]: { full: 'Brisk Walking', short: 'BW' },
    [CardioActivityEnum.SWIMMING]: { full: 'Swimming', short: 'SWIM' },
};

export enum WeightUnit {
    KG = 'Kg',
    LB = 'lb',
}

export enum SetState {
    NOT_STARTED = 'NOT_STARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    COMPLETED = 'COMPLETED',
}

export type NamesType = {
    full: string;
    short: string;
};

export interface ICardioSet {

    postRestSecs: number;

    state: SetState | undefined;

    success: boolean | undefined;
    
}

export class Running implements ICardioSet {

    constructor(public distanceKm : number) {}

    state: SetState | undefined;
    success: boolean | undefined;
    postRestSecs: number = 0;

};

export interface IActivity {

    preRestSecs: number;

    postRestSecs: number;

    state: SetState | undefined;

    success: boolean | undefined;

    name: string;

}

export class WeightLiftingSet {

    postRestSecs: number = 0;
    state: SetState | undefined;
    success: boolean | undefined;

    constructor(public weightKg : number, public reps: number) {}

}

export class WeightLiftingActivity implements IActivity {

    preRestSecs: number = 0;
    postRestSecs: number = 0;
    state: SetState | undefined;
    success: boolean | undefined;

    constructor(public name: WeightLiftingActivityEnum, public sets: WeightLiftingSet[]) {}

}

export class CardioActivity implements IActivity {

    preRestSecs: number = 0;
    postRestSecs: number = 0;
    state: SetState = SetState.NOT_STARTED;
    success: boolean | undefined;

    constructor(
        public name: CardioActivityEnum,
        public description: string,
        public expectedDistanceM: number | undefined = undefined,
        public expectedTimeSecs:  number | undefined = undefined,
        public expectedReps:      number | undefined = undefined) {}

}

export type WarmUp = string[];
export type CoolDown = string[];

export class Workout {
    title: string;
    description: string | undefined;
    warmUp: WarmUp = [];
    activities: IActivity[];
    coolDown: CoolDown = [];

    constructor(title: string, description: string, activities : IActivity[]) {
        this.title = title;
        this.description = description;
        this.activities = activities
    }
}

export class Program {

    title: string;
    workouts: Workout[];

    constructor(title: string, workouts: Workout[]) {
        this.title = title;
        this.workouts = workouts;
    }
}

export class UserData {
    name: string = '';
    age: number = 0;
    weightKg: number | undefined;
    heightCm: number | undefined;
    currentProgram: Program | undefined;
    currentWorkout: Workout | undefined;
};

