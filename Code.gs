function createNewSheet() {
  const newSheet = SpreadsheetApp.create('Text Line Output');
  // Get ID and URL of new spreadsheet, save in properties
  const newSheetId = newSheet.getId();
  const newSheetUrl = newSheet.getUrl();
  PropertiesService.getDocumentProperties().setProperty('sheetId', newSheetId);

  // Alert user of new spreadsheet URL
  const ui = DocumentApp.getUi();
  ui.alert('A new sheet has been created.', 'Text from this file will be sent here:\n' + newSheetUrl, ui.ButtonSet.OK)

  // Share URL in document as well
  const doc = DocumentApp.getActiveDocument();
  doc.getBody().appendParagraph('\n\n' + 'New spreadsheet URL: ' + newSheetUrl);
}

function textForTranslationMemory() {
  copyTextFromDocToSheet_('translation memory')
}

function textForTranslationTable() {
  copyTextFromDocToSheet_()
}

function copyTextFromDocToSheet_(formatType) {
  // ID of the Google Doc and Google Sheet
  const sheetId = PropertiesService.getDocumentProperties().getProperty('sheetId');
  
  // Access the body of the document
  const body = DocumentApp.getActiveDocument().getBody();
  
  // Get all text from the document
  let text = body.editAsText().getText();
  
  // Replace characters
  text = text.replace(/[\r\n]+/g, ''); // replace newline characters with nothing
  text = text.replace(/▼/g, '\n'); // Manually add a marker (▼) to add a new line where there is no Japanese period (。)

  if(formatType == 'translation memory') {
    text = text.replace(/。/g, '。\n'); // replace '。' with '。' and a newline 
  }
  
  // Split the text into an array of lines
  const lines = text.split('\n');
  console.log(lines)
  
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