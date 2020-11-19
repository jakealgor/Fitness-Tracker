fetch("/api/workouts/range")
.then(response => {
    return response.json();
})
.then(data => {
    populateChart(data);
});


API.getWorkoutsInRange()

function generatePalette() {
    const arr = [
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600",
    "#003f5c",
    "#2f4b7c",
    "#665191",
    "#a05195",
    "#d45087",
    "#f95d6a",
    "#ff7c43",
    "ffa600"
]

return arr;
}
function populateChart(data) {
let durations = duration(data);
let pounds = calculateTotalWeight(data);
let workouts = workoutNames(data);
const colors = generatePalette();

let line = document.querySelector("#canvas").getContext("2d");
let bar = document.querySelector("#canvas2").getContext("2d");
let pie = document.querySelector("#canvas3").getContext("2d");
let pie2 = document.querySelector("#canvas4").getContext("2d");

let lineChart = new Chart(line, {
    type: "line",
    data: {
    labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    datasets: [
        {
        label: "Workout Duration (Minutes)",
        backgroundColor: "orange",
        borderColor: "red",
        data: durations,
        fill: false
        }
    ]
    },
    options: {
    responsive: true,
    title: {
        display: true
    },
    scales: {
        xAxes: [
        {
            display: true,
            scaleLabel: {
            display: true
            }
        }
        ],
        yAxes: [
        {
            display: true,
            scaleLabel: {
            display: true
            }
        }
        ]
    }
    }
});

let barChart = new Chart(bar, {
    type: "bar",
    data: {
    labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ],
    datasets: [
        {
        label: "Pounds",
        data: pounds,
        backgroundColor: [
            "rgba(25, 100, 90, 0.2)",
            "rgba(51, 110, 200, 0.2)",
            "rgba(257, 196, 141, 0.2)",
            "rgba(74, 186, 164, 0.2)",
            "rgba(145, 99, 190, 0.2)",
            "rgba(252, 130, 67, 0.2)"
        ],
        borderColor: [
            "rgba(25, 100, 90, 1)",
            "rgba(51, 110, 200, 1)",
            "rgba(257, 196, 141, 1)",
            "rgba(74, 186, 164, 1)",
            "rgba(145, 99, 190, 1)",
            "rgba(252, 130, 67, 1)"
        ],
        borderWidth: 1
        }
    ]
    },
    options: {
    title: {
        display: true,
        text: "Lifted"
    },
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true
            }
        }
        ]
    }
    }
});

let pieChart = new Chart(pie, {
    type: "pie",
    data: {
    labels: workouts,
    datasets: [
        {
        label: "Excercises Performed",
        backgroundColor: colors,
        data: durations
        }
    ]
    },
    options: {
    title: {
        display: true,
        text: "Excercises Performed"
    }
    }
});

let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
    labels: workouts,
    datasets: [
        {
        label: "Excercises Performed",
        backgroundColor: colors,
        data: pounds
        }
    ]
    },
    options: {
    title: {
        display: true,
        text: "Excercises Performed"
    }
    }
});
}

function duration(data) {
let durations = [];
data.forEach(workout => {
    workout.exercises.forEach(exercise => {
    durations.push(exercise.duration);
    });
});return durations;
}

function calculateTotalWeight(data) {
let total = [];
data.forEach(workout => {
    workout.exercises.forEach(exercise => {
    total.push(exercise.weight);
    });
});
return total;
}

function workoutNames(data) {
let workouts = [];
data.forEach(workout => {
    workout.exercises.forEach(exercise => {
    workouts.push(exercise.name);
    });
});

return workouts;
}