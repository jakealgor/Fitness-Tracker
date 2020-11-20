const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter the type of exercise"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter the excersize name"
                },
                duration: {
                    type: Number,
                    required: "Enter a time lenght for the excersize"
                },
                distance: {
                    type: Number,
                    required: "Enter a distance"
                },
                weight: {
                    type: Number,
                    required: "Enter the weight"
                },
                reps: {
                    type: Number,
                    required: "Enter amount of reps"
                },
                sets: {
                    type: Number,
                    required: "Enter the amount of sets"
                },
            }
        ]
    },

    {
        toJSON: {
            virtuals: true
        }
    }
)
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;