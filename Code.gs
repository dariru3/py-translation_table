function copyTextFromDocToSheet() {
  // ID of the Google Doc and Google Sheet
  const docId = fileIds.docId;
  const sheetId = fileIds.sheetId;
  
  // Access the body of the document
  const body = DocumentApp.openById(docId).getBody();
  
  // Get all text from the document
  let text = body.editAsText().getText();
  
  // Replace characters
  text = text.replace(/[\r\n]+/g, ''); // replace newline characters with nothing
  text = text.replace(/。/g, '。\n'); // replace '。' with '。' and a newline
  
  // Split the text into an array of lines
  const lines = text.split('\n');
  
  // Access the sheet
  const sheet = SpreadsheetApp.openById(sheetId).getSheets()[0]; // get the first sheet
  
  // Find the last row with content in the first column
  const lastRow = sheet.getLastRow();
  
  // Write each line of text to a separate cell in the first column
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    sheet.getRange(lastRow + i + 1, 1).setValue(line);
  }
}