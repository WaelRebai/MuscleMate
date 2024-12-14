function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const username = getQueryParam('username');

if (username) {
    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
} else {
    console.warn("Username parameter is missing from the URL.");
}

const form = document.getElementById("questionnaireForm");
const steps = document.querySelectorAll(".step");
const progressBar = document.getElementById("progressBar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

let currentStep = 0;

function updateStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
    progressBar.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
    prevBtn.disabled = currentStep === 0;
    nextBtn.style.display = currentStep === steps.length - 1 ? "none" : "inline-block";
    submitBtn.style.display = currentStep === steps.length - 1 ? "inline-block" : "none";
}

prevBtn.addEventListener("click", () => {
    if (currentStep > 0) currentStep--;
    updateStep();
});

nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) currentStep++;
    updateStep();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const queryParams = new URLSearchParams();

    if (username) {
        queryParams.append("username", username);
    }

    formData.forEach((value, key) => {
        queryParams.append(key, value);
    });

    const redirectURL = `Dashboard.html?${queryParams.toString()}`;
    console.log(`Redirecting to: ${redirectURL}`);

    window.location.href = redirectURL;
});

updateStep();

