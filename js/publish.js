// ===============================
// publish.js
// ===============================

// Replace with your Google Review link
const GOOGLE_REVIEW_URL = "https://www.google.com/maps/search/?api=1&query=CodeLine+AI+Bansi+Nagar+Nagpur";

// Elements
const reviewText = document.getElementById("reviewText");
const copyBtn = document.getElementById("copyBtn");
const googleBtn = document.getElementById("googleBtn");
const newBtn = document.getElementById("newBtn");
const message = document.getElementById("message");

// Load review
window.onload = () => {

    const review = sessionStorage.getItem("generatedReview");

    if (!review) {

        alert("No review found.");

        window.location.href = "index.html";

        return;

    }

    reviewText.value = review;

};

// Copy Review
copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(reviewText.value);

        message.innerHTML = "✅ Review copied successfully.";

    } catch {

        message.innerHTML = "❌ Unable to copy review.";

    }

});

// Open Google Review
googleBtn.addEventListener("click", () => {

    if (GOOGLE_REVIEW_URL.includes("PASTE")) {

        alert("Please add your Google Review URL.");

        return;

    }

    window.open(GOOGLE_REVIEW_URL, "_blank");

});

// Generate New Review
newBtn.addEventListener("click", () => {

    sessionStorage.removeItem("generatedReview");
    sessionStorage.removeItem("reviewRequest");

    window.location.href = "index.html";

});