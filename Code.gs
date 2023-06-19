function copyTextFromDocToSheet() {
  // ID of the Google Doc and Google Sheet
  var docId = fileIds.docId;
  var sheetId = fileIds.sheetId;
  
  // Access the body of the document
  var body = DocumentApp.openById(docId).getBody();
  
  // Get all text from the document
  var text = body.editAsText().getText();
  
  // Replace characters
  text = text.replace(/[\r\n]+/g, ''); // replace newline characters with nothing
  text = text.replace(/。/g, '。\n'); // replace '。' with '。' and a newline
  
  // Split the text into an array of lines
  var lines = text.split('\n');
  console.log(lines)
  
  // Access the sheet
  var sheet = SpreadsheetApp.openById(sheetId).getSheets()[0]; // get the first sheet
  
  // Find the last row with content in the first column
  var lastRow = sheet.getLastRow();
  
  // Write each line of text to a separate cell in the first column
  for (var i = 0; i < lines.length; i++) {
    sheet.getRange(lastRow + i + 1, 1).setValue(lines[i]);
  }
}