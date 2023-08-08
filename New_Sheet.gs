function createNewSheet() {
  let newSheet;
  try {
    newSheet = SpreadsheetApp.create('Text Line Output');
  } catch(error) {
    const ui = DocumentApp.getUi();
    ui.alert('An error occurred creating a new Sheet: ' + error);
    return
  }
  
  // Get ID and URL of new spreadsheet, save in properties
  const newSheetId = newSheet.getId();
  const newSheetUrl = newSheet.getUrl();
  PropertiesService.getDocumentProperties().setProperty('sheetId', newSheetId);

  // Alert user of new spreadsheet URL
  showAlertWithLink(newSheetUrl);

  // Add URL in document
  const doc = DocumentApp.getActiveDocument();
  const body = doc.getBody();
  body.appendParagraph('\n\n' + 'New spreadsheet URL: ');
  const link = body.appendParagraph(newSheetUrl).setLinkUrl(newSheetUrl);
  link.merge();
}

function showAlertWithLink(url) {
  var htmlOutput = HtmlService.createHtmlOutput('<p style="font-family: Arial, sans-serif; text-align: left;">Text from this file will be sent here:<br><br><a href="' + url + '" target="_blank" style="color: #4285F4; text-decoration: none;">Open Sheet</a></p><br><button onclick="google.script.host.close()" style="font-family: Arial, sans-serif; background-color: #4285F4; color: white; border: none; padding: 10px 20px; cursor: pointer;">OK</button>')
      .setWidth(300)
      .setHeight(150);
  DocumentApp.getUi().showModalDialog(htmlOutput, 'New Sheet Created');
}
