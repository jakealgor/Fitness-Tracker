let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
useNewUrlParser: true,
useFindAndModify: false
});

let workoutSeed = [
{
    day: new Date(new Date().setDate(new Date().getDate() - 10)),
    exercises: [
    {
        type: "cardio",
        name: "Jogging",
        duration: 30,
        distance: 3
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    exercises: [
    {
        type: "weights",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 8)),
    exercises: [
    {
        type: "weights",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 7)),
    exercises: [
    {
        type: "weights",
        name: "Bicep Curl",
        weight: 90,
        reps: 10,
        sets: 3
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 6)),
    exercises: [
    {
        type: "weights",
        name: "Bench Press",
        weight: 255,
        reps: 10,
        sets: 3
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 5)),
    exercises: [
    {
        type: "weights",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
    {
        type: "weights",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
    {
        type: "weights",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
    {
        type: "weights",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
    {
        type: "cardio",
        name: "Stair Climber",
        duration: 15,
        distance: 1,
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
    {
        type: "weights",
        name: "Inclinded BenchPress",
        duration: 20,
        weight: 200,
        reps: 8,
        sets: 4
    }
    ]
},
{
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
    {
        type: "weights",
        name: "Declined BenchPress",
        duration: 20,
        weight: 200,
        reps: 8,
        sets: 4
    }
    ]
},
];

db.Workout.deleteMany({})
.then(() => db.Workout.collection.insertMany(workoutSeed))
.then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});
