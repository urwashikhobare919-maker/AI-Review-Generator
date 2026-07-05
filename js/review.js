// ===============================
// AI Review Generator
// review.js
// ===============================

// Paste your Google Apps Script Web App URL here
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz2GHc-lIewyeHdaEpPcIszTJyeRlQ7FcTfCyss9jNoSmFBmi0GpHnXo30Z7HImDVOx/exec";

// Elements
const loader = document.getElementById("loader");
const reviewSection = document.getElementById("reviewSection");
const reviewBox = document.getElementById("reviewBox");
const buttons = document.getElementById("buttons");
const statusText = document.getElementById("statusText");
const message = document.getElementById("message");

const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const nextBtn = document.getElementById("nextBtn");

let studentData = {};
let generatedReview = "";

// ===============================
// Load Page
// ===============================

window.onload = () => {

    const data = sessionStorage.getItem("reviewRequest");

    if (!data) {

        alert("Session expired.");

        window.location.href = "index.html";

        return;

    }

    studentData = JSON.parse(data);

    generateReview();

};

// ===============================
// Generate Review
// ===============================

async function generateReview() {

    loader.classList.remove("hidden");

    reviewSection.classList.add("hidden");

    buttons.classList.add("hidden");

    message.innerHTML = "";

    statusText.innerHTML = "Generating AI Review...";

    try {

        const response = await fetch(SCRIPT_URL, {

            method: "POST",

            headers: {

                "Content-Type":"text/plain;charset=utf-8"

            },

            body: JSON.stringify({

                action:"generateReview",

                ...studentData

            })

        });

        const data = await response.json();

        if(data.status !== "success"){

            throw new Error(data.message);

        }

        generatedReview = data.review;

        reviewBox.value = generatedReview;

        loader.classList.add("hidden");

        reviewSection.classList.remove("hidden");

        buttons.classList.remove("hidden");

        statusText.innerHTML = "Review Generated Successfully";

    }

    catch(error){

        console.log(error);

        loader.classList.add("hidden");

        statusText.innerHTML="Failed to generate review.";

        alert("Unable to generate review.");

    }

}

// ===============================
// Copy Review
// ===============================

// ===============================
// Copy Review & Open Google Review
// ===============================

const GOOGLE_REVIEW_LINK =
"https://search.google.com/local/writereview?placeid=ChIJt0TTfLiV1DsRwT1XFk-al1U";

copyBtn.addEventListener("click", async () => {

    try {

        // Copy review
        await navigator.clipboard.writeText(reviewBox.value);

        message.innerHTML = "✅ Review copied successfully.";

        const GOOGLE_REVIEW_LINK =
        "https://search.google.com/local/writereview?placeid=ChIJt0TTfLiV1DsRwT1XFk-al1U";

        // ADD THIS LINE
        console.log(GOOGLE_REVIEW_LINK);

        window.open(GOOGLE_REVIEW_LINK, "_self");

    } catch (error) {

        message.innerHTML = "Unable to copy.";

    }

});
// ===============================
// Generate Again
// ===============================

generateBtn.addEventListener("click",()=>{

    generateReview();

});

// ===============================
// Next
// ===============================

nextBtn.addEventListener("click",()=>{

    sessionStorage.setItem(

        "generatedReview",

        reviewBox.value

    );

    window.location.href="publish.html";

});