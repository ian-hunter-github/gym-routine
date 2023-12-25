// Import the types
import * as TYPES from './Types';

// Set initial weights
const squatWeightKg = 80;
const benchPressWeightKg = 50;
const deadliftWeightKg = 80;
const overheadPressWeightKg = 30;
const bentoverRowsWeightKg = 50;

// Define workout sequences

const fiveByFiveProgram: TYPES.Program = new TYPES.Program('5x5 Program', [
    new TYPES.Workout('Workout A', '5x5 Squat, 5x5 Bench Press, 5x5 Bentover Row', [
        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, [
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
        ]),
        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, [
            new TYPES.WeightLiftingSet(benchPressWeightKg, 5),
            new TYPES.WeightLiftingSet(benchPressWeightKg, 5),
            new TYPES.WeightLiftingSet(benchPressWeightKg, 5),
            new TYPES.WeightLiftingSet(benchPressWeightKg, 5),
            new TYPES.WeightLiftingSet(benchPressWeightKg, 5),
        ]),

        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, [
            new TYPES.WeightLiftingSet(bentoverRowsWeightKg, 5),
            new TYPES.WeightLiftingSet(bentoverRowsWeightKg, 5),
            new TYPES.WeightLiftingSet(bentoverRowsWeightKg, 5),
            new TYPES.WeightLiftingSet(bentoverRowsWeightKg, 5),
            new TYPES.WeightLiftingSet(bentoverRowsWeightKg, 5),
        ]),

        new TYPES.CardioActivity(TYPES.CardioActivityEnum.RUNNING, 'Speed to suit distance', 5, undefined)

    ]),
    new TYPES.Workout('Workout B', '5x5 Squat, 5x5 Overhead Press, 1x5 Deadlift', [
        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, [
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
            new TYPES.WeightLiftingSet(squatWeightKg, 5),
        ]),
        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.OVERHEAD_PRESS, [
            new TYPES.WeightLiftingSet(overheadPressWeightKg, 5),
            new TYPES.WeightLiftingSet(overheadPressWeightKg, 5),
            new TYPES.WeightLiftingSet(overheadPressWeightKg, 5),
            new TYPES.WeightLiftingSet(overheadPressWeightKg, 5),
            new TYPES.WeightLiftingSet(overheadPressWeightKg, 5),
        ]),

        new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.DEADLIFT, [
            new TYPES.WeightLiftingSet(deadliftWeightKg, 5),
        ]),
    ])
])

// const madcowProgram: TYPES.Program = new TYPES.Program('MadCow Program', [
//     new TYPES.Workout('Week 1 - Workout A', '5x5 Squat, 5x5 Bench Press, 5x5 Bentover Row', [

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, benchPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, benchPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, benchPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, benchPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENCH_PRESS, benchPressWeightKg, 5),

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, bentoverRowsWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, bentoverRowsWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, bentoverRowsWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, bentoverRowsWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.BENTOVER_ROW, bentoverRowsWeightKg, 5),

//    ]),
//     new TYPES.Workout('Week 1 - Workout B', '4x5 Squat, 4x5 Overhead Press, 4x5 Deadlift', [

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.SQUAT, squatWeightKg, 5),

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.OVERHEAD_PRESS, overheadPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.OVERHEAD_PRESS, overheadPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.OVERHEAD_PRESS, overheadPressWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.OVERHEAD_PRESS, overheadPressWeightKg, 5),

//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.DEADLIFT, deadliftWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.DEADLIFT, deadliftWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.DEADLIFT, deadliftWeightKg, 5),
//         new TYPES.WeightLiftingActivity(TYPES.WeightLiftingActivityEnum.DEADLIFT, deadliftWeightKg, 5),
 
//      ])
//     // ... additional weeks and workouts
// ]);

const cardioProgram: TYPES.Program = new TYPES.Program('Cardio Program', [
    new TYPES.Workout('Cardio Workouts', 'Cardio workouts', [
        new TYPES.CardioActivity(TYPES.CardioActivityEnum.RUNNING, '', 30 * 60),
        new TYPES.CardioActivity(TYPES.CardioActivityEnum.CYCLING, '', 45 * 60),
        new TYPES.CardioActivity(TYPES.CardioActivityEnum.JUMP_ROPE, '', 15 * 60),
    ])
]);

// const pushPullLegsSequence: TYPES.Workout[] = [
//     new TYPES.Workout('Push Day', 'Bench Press, Overhead Press, Tricep Exercises'),
//     new TYPES.Workout('Pull Day', 'Deadlift, Bentover Row, Bicep Exercises'),
//     new TYPES.Workout('Leg Day', 'Squat, Lunges, Leg Press'),
//     // ... additional push, pull, and legs workouts
// ];

// const upperLowerSequence: TYPES.Workout[] = [
//     new TYPES.Workout('Upper Body Day', 'Bench Press, Rows, Shoulder Press'),
//     new TYPES.Workout('Lower Body Day', 'Squat, Deadlift, Leg Curls'),
//     // ... additional upper and lower body workouts
// ];

// const highIntensityCardioSequence: TYPES.Workout[] = [
//     new TYPES.Workout('High-Intensity Cardio', '30 minutes of sprint intervals'),
//     new TYPES.Workout('Boxing Workout', '20 minutes of boxing drills'),
//     // ... additional high-intensity cardio workouts
// ];

// const lowIntensityCardioSequence: TYPES.Workout[] = [
//     new TYPES.Workout('Low-Intensity Cardio', '45 minutes of brisk walking'),
//     new TYPES.Workout('Swimming Session', '30 minutes of swimming'),
//     // ... additional low-intensity cardio workouts
// ];

// Create programs

// const fiveByFiveProgram = new TYPES.Program('5x5 Program', fiveByFiveSequence);
// const madcowProgram = new TYPES.Program('Madcow 5x5', [madcowSequence]);
// const cardioProgram = new TYPES.Program('Cardio Program', [cardioSequence]);
// const pushPullLegsProgram = new TYPES.Program('Push/Pull/Legs', [pushPullLegsSequence]);
// const upperLowerProgram = new TYPES.Program('Upper/Lower Split', [upperLowerSequence]);
// const highIntensityCardioProgram = new TYPES.Program('High-Intensity Cardio', [highIntensityCardioSequence]);
// const lowIntensityCardioProgram = new TYPES.Program('Low-Intensity Cardio', [lowIntensityCardioSequence]);

const stockPrograms = {
    "FIVE_BY_FIVE": fiveByFiveProgram,
    //"MADCOW_PROGRAM": madcowProgram,
    "CARDIO_PROGRAM": cardioProgram
}


// User data with the programs

export const userData: TYPES.UserData = {
    name: 'John Doe',
    age: 30,
    weightKg: 75,
    heightCm: 180,
    currentProgram: stockPrograms["FIVE_BY_FIVE"],
    currentWorkout: undefined
};
