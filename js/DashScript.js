function calculateBMR(weight, height, age, gender) {
    if (!weight || !height || !age) {
        return NaN;
    }

    if (gender === "male") {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

function calculateProtein(weight, goal) {
    let proteinMultiplier = 1.5;
    if (goal === "Build Muscle") {
        proteinMultiplier = 2.0;
    } else if (goal === "Improve Endurance") {
        proteinMultiplier = 1.2;
    } else if (goal === "Lose Weight") {
        proteinMultiplier = 1.0;
    }
    return weight * proteinMultiplier;
}

const urlParams = new URLSearchParams(window.location.search);

const username = urlParams.get('username') || "Guest";
const weight = parseFloat(urlParams.get('weight'));
const height = parseFloat(urlParams.get('height'));
const age = parseInt(urlParams.get('age')) || 25;
const exerciseFrequency = urlParams.get('exerciseFrequency') || "Not specified";
const sleepDuration = urlParams.get('sleepDuration') || "Not specified";
const waterIntake = urlParams.get('waterIntake') || "Not specified";
const foodAllergies = urlParams.get('foodAllergies') || "None";
const mealplan = urlParams.get('mealplan') || "Not specified";
const healthGoal = urlParams.get('healthGoal') || "General Health";

if (isNaN(weight) || isNaN(height)) {
    alert("Invalid weight or height value. Please check the URL parameters.");
} else {
    document.getElementById("username").textContent = username;
    document.getElementById("weight").textContent = weight;
    document.getElementById("height").textContent = height;
    document.getElementById("age").textContent = age;
    document.getElementById("exerciseFrequency").textContent = exerciseFrequency;
    document.getElementById("sleepDuration").textContent = sleepDuration;
    document.getElementById("waterIntake").textContent = waterIntake;

    const gender = "male";
    const bmrValue = calculateBMR(weight, height, age, gender);
    document.getElementById("bmrValue").textContent = isNaN(bmrValue)
        ? "Invalid BMR calculation"
        : bmrValue.toFixed(2);

    const proteinValue = calculateProtein(weight, healthGoal);
    document.getElementById("proteinValue").textContent = proteinValue.toFixed(2);

    const goalDetails = document.getElementById("goalDetails");
    document.getElementById("goal").textContent = healthGoal;

    let goalText = '';
    switch (healthGoal) {
        case "Lose Weight":
            goalText = `<p id=\"goaltext\">To lose weight, focus on a calorie deficit with a high protein intake to preserve muscle. Combine cardio and strength training to optimize fat loss while maintaining muscle. Aim for 15-20% calorie deficit, and adjust macros accordingly. Eat protein-rich foods like lean meats, fish, eggs, tofu, and legumes, and prioritize complex carbs like whole grains, fruits, and vegetables. Drink plenty of water and limit processed foods and added sugars. Be consistent and patient, as losing weight takes time and effort.</p>`;
            break;
        case "Build Muscle":
            goalText = `<p id=\"goaltext\">To build muscle, maintain a calorie surplus with a high protein intake, focusing on strength training exercises like squats, deadlifts, and bench presses for effective muscle growth. Aim for a balanced intake of protein-rich foods such as chicken, fish, eggs, and legumes, along with complex carbohydrates and healthy fats. Ensure a progressive overload in your workouts, allowing muscles to adapt and grow over time. Prioritize recovery with adequate sleep and hydration. Consistency and patience are key to achieving muscle-building goals.</p>`;
            break;
        case "Improve Endurance":
            goalText = "<p id=\"goaltext\">To improve endurance, focus on steady-state cardio, stay hydrated, and fuel with carbs. Include interval training and cross-training to enhance cardiovascular health and muscle endurance. Monitor progress and adjust intensity for optimal results.</p>";
            break;
        default:
            goalText = `<p id=\"goaltext\">For general health, prioritize a balanced diet, regular exercise, hydration, and consistent sleep. Focus on consuming a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Additionally, limit processed foods and added sugars, and aim for 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise each week. Stay hydrated by drinking plenty of water and limit sedentary activities. Make sure to get enough sleep, aiming for 7-9 hours each night. Manage stress by practicing relaxation techniques such as deep breathing, yoga, or meditation. Make time for activities that bring you joy, such as hobbies, reading, or spending time with friends and family. By following these guidelines, you can maintain a healthy lifestyle and reduce your risk of chronic diseases.</p>`;
        }
    goalDetails.innerHTML = goalText;
}

const Datas = {
    calories: [2200, 2400, 2100, 1500, 2300, 2200, 2400],
    protein: [120, 150, 100, 60, 140, 125, 155]
};

const ctxCalories = document.getElementById('weeklyCaloriesChart').getContext('2d');
new Chart(ctxCalories, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Calories Intake (kcal)',
            data: Datas.calories,
            borderColor: 'rgb(255, 99, 132)',
            fill: false,
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxProtein = document.getElementById('weeklyProteinChart').getContext('2d');
new Chart(ctxProtein, {
    type: 'bar',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Protein Intake (g)',
            data: Datas.protein,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

