function copyTextFromDocToSheet() {
  // ID of the Google Doc and Google Sheet
  const sheetId = FILE_IDS.SHEET_ID;
  // console.log(sheetId)

  // Access the body of the document
  const body = DocumentApp.getActiveDocument().getBody();

  // Get all text from the document
  let text = body.editAsText().getText();

  // Replace characters
  text = text.replace(/[\r\n]+/g, ''); // replace newline characters with nothing
  text = text.replace(/。/g, '。\n'); // replace '。' with '。' and a newline

  // Manually add a marker (▼) to add a new line where there is no Japanese period (。)
  text = text.replace(/▼/g, '\n');

  // Split the text into an array of lines
  const lines = text.split('\n').map(line => [line.trim()]); // note the extra brackets to create an array of arrays
  // console.log(lines)
  
  // Access the sheet
  const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0]; // get the first sheet
  // console.log(sheet.getSheetName())

  // Find the last row with content in the first column
  const lastRow = sheet.getLastRow();

  // Write all lines of text to the sheet in one go
  sheet.getRange(lastRow + 1, 1, lines.length, 1).setValues(lines);
}
