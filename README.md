# 🤖 AI Review Generator

An AI-powered review generation system that helps institutes generate natural, human-like Google reviews for students. The system uses Google Apps Script as the backend and Google Gemini AI to personalize reviews based on student details and existing reference reviews.

---

## 📌 Features

- ✅ Student Registration Form
- ✅ Course Selection
- ✅ AI Generated Human-like Reviews
- ✅ Uses Reference Reviews from Google Sheets
- ✅ Personalized with Student Name & City
- ✅ Random Review Selection
- ✅ Prevents Duplicate Review Usage
- ✅ Copy Review to Clipboard
- ✅ Open Google Review Page
- ✅ Admin Dashboard
- ✅ Analytics
- ✅ Business Management
- ✅ Google Sheets Database
- ✅ Google Apps Script Backend
- ✅ Mobile Responsive UI

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Google Apps Script

### AI

- Google Gemini API

### Database

- Google Sheets

---

# 📂 Project Structure

```
AI-Review-Generator/

│
├── index.html
├── review.html
├── publish.html
├── README.md
├── Code.gs
│
├── css/
│ ├── review.css
│ └── publish.css
│
├── js/
│ ├── review.js
│ └── publish.js
│
└── admin/
├── dashboard.html
├── analytics.html
├── businesses.html
├── reviews.html
├── users.html
├── reports.html
├── logs.html
├── settings.html
├── login.html
├── dashboard.js
└── dashboard.css
```

---

# 🚀 Workflow

```
Student Details

↓

Course Selection

↓

Reference Review Selected

↓

Gemini AI Rewrites Review

↓

Name & City Added

↓

Natural Human Review Generated

↓

Copy Review

↓

Open Google Review

↓

Paste & Publish
```

---

# 🧠 AI Review Generation

The system:

- Selects a random review from the Review Database.
- Ensures the selected review has never been used before.
- Uses Gemini AI to rewrite the review.
- Adds:
  - Student Name
  - City
  - Course
- Makes the review look natural by adding:
  - Small grammar mistakes
  - Mixed uppercase/lowercase words
  - Informal writing style
  - Human typing style
- Keeps the review within 25–30 words.

---

# 📊 Google Sheets

The project uses multiple sheets.

## Students

Stores student details.

Columns

```
Date
Name
City
Phone
Email
Course
Batch
ReviewID
GeneratedReview
```

---

## ReviewDatabase

Stores reference reviews.

Columns

```
ReviewID
Course
Review
Status
UsedBy
UsedDate
```

Status

```
Available
Used
```

---

## Businesses

Stores businesses.

Columns

```
ID
Business Name
Category
Review Link
Logo
Status
```

---

# 🔥 Duplicate Prevention

Once a review is selected,

```
Available

↓

Used

↓

Never Used Again
```

This prevents duplicate Google Reviews.

---

# 📱 Responsive Design

Works on

- Desktop
- Laptop
- Tablet
- Mobile

---

# 🔐 Admin Panel

Features

- Dashboard
- Review Analytics
- Business Management
- Student Logs
- Export Reports
- User Management

---

# 📈 Dashboard

Displays

- Total Reviews
- Today's Reviews
- Businesses
- Available Reviews
- Used Reviews

---

# 📋 Requirements

- Google Account
- Google Sheets
- Google Apps Script
- Google Gemini API Key
- Modern Browser

---

# ⚙ Installation

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/AI-Review-Generator.git
```

### 2. Open Project

```
VS Code
```

### 3. Deploy Google Apps Script

- Create a new Apps Script project.
- Copy all `.gs` files.
- Add Gemini API Key.
- Deploy as Web App.
- Copy the Web App URL.

### 4. Update JavaScript

In

```
js/review.js
```

Replace

```javascript
const SCRIPT_URL = "YOUR_WEB_APP_URL";
```

---

# Future Improvements

- OTP Verification
- WhatsApp Integration
- QR Code Reviews
- Multi-Business Support
- AI Sentiment Analysis
- Review Approval Workflow
- Email Notifications

---

# Author

**Urwashi Khobare**

B.Tech Computer Science & Engineering

Priyadarshini College of Engineering, Nagpur

---

# License

This project is developed for educational purposes and final-year academic submission.
