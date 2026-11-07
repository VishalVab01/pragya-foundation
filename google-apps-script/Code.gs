/**
 * Pragya Foundation volunteer form receiver.
 * Bind this script to the client's spreadsheet and deploy as a web app:
 * Execute as: Me; Who has access: Anyone.
 */
const SHEET_NAME = 'Volunteer enquiries';
const HEADERS = ['Submitted at', 'Full name', 'Email', 'Mobile number', 'Current location', 'Message'];

function doPost(e) {
  try {
    const data = JSON.parse(e.parameter.payload || '{}');
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      safeCell(data['Full name']),
      safeCell(data.Email),
      safeCell(data['Mobile number']),
      safeCell(data['Current location']),
      safeCell(data.Message),
    ]);
    return callbackPage(data.token, true);
  } catch (error) {
    console.error(error);
    const data = JSON.parse((e && e.parameter && e.parameter.payload) || '{}');
    return callbackPage(data.token, false);
  }
}

function callbackPage(token, ok) {
  const message = JSON.stringify({ token: String(token || ''), ok: Boolean(ok) });
  return HtmlService.createHtmlOutput('<script>parent.postMessage(' + message + ', "*");</script>');
}

// Prevent user-provided text from being interpreted as a spreadsheet formula.
function safeCell(value) {
  const text = String(value || '').trim();
  return /^[=+@\-]/.test(text) ? "'" + text : text;
}
