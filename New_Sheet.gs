function createNewSheet() {
  let newSheet;
  try {
    newSheet = SpreadsheetApp.create('Text Line Output');
  } catch(error) {
    throw error;
  }
  
  // Get ID and URL of new spreadsheet, save in properties
  const newSheetId = newSheet.getId();
  const newSheetUrl = newSheet.getUrl();
  PropertiesService.getDocumentProperties().setProperty('sheetId', newSheetId);

  // Alert user of new spreadsheet URL
  showAlertWithLink(newSheetUrl);
}

function showAlertWithLink(url) {
  const MESSAGES = {
    text_goes_to_this_file: "このファイルからのテキストがここに送信されます: ",
    open_sheet: "シートを開く",
    new_sheet_created: "新しいシートが作成されました"
  }
  var htmlOutput = HtmlService.createHtmlOutput(`
    <p style="font-family: Arial, sans-serif; text-align: left;">
      ${MESSAGES.text_goes_to_this_file}
      <a href="${url}" target="_blank" style="color: #4285F4; text-decoration: none;">${MESSAGES.open_sheet}</a>
    </p>
    <br>
    <button onclick="google.script.host.close()" style="font-family: Arial, sans-serif; background-color: #4285F4; color: white; border: none; padding: 10px 20px; cursor: pointer;">OK</button>
  `)
  .setWidth(350)
  .setHeight(150);
  
  DocumentApp.getUi().showModalDialog(htmlOutput, MESSAGES.new_sheet_created);
}