/**
 * AI Review Request System — Backend (Google Apps Script)
 * ---------------------------------------------------------
 * Receives student details from index.html and logs each submission
 * to a Google Sheet, so staff have a record of who was asked to review
 * and can follow up if needed.
 *
 * SETUP:
 * 1. Create a new Google Sheet. Copy its ID from the URL:
 *    https://docs.google.com/spreadsheets/d/THIS_PART_IS_THE_ID/edit
 * 2. Paste that ID into SHEET_ID below.
 * 3. In the Apps Script editor: Deploy > New deployment > type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL and paste it into SCRIPT_URL in index.html.
 */

const SHEET_ID = "PASTE_YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Submissions";

const HEADERS = [
  "Timestamp", "Name", "City", "Phone", "Email", "Course", "Batch"
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Basic validation — mirrors the front-end checks, but never trust the client alone.
    const name = (data.name || "").toString().trim();
    const city = (data.city || "").toString().trim();
    const course = (data.course || "").toString().trim();

    if (name.length < 2 || city.length < 2 || course.length < 1) {
      return jsonResponse({ status: "error", message: "Missing required fields." });
    }

    const sheet = getOrCreateSheet();

    sheet.appendRow([
      new Date(),
      name,
      city,
      (data.phone || "").toString().trim(),
      (data.email || "").toString().trim(),
      course,
      (data.batch || "").toString().trim()
    ]);

    return jsonResponse({ status: "ok" });

  } catch (err) {
    return jsonResponse({ status: "error", message: err.message });
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Optional: run this once manually from the Apps Script editor
 * to pre-create the sheet and headers before your first real submission.
 */
function setupSheet() {
  getOrCreateSheet();
}
