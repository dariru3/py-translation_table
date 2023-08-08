// Function that runs when the document is opened
function onOpen(e) {
  // Create a new menu
  const ui = DocumentApp.getUi();
  ui.createMenu('Translation Table Menu')
    .addItem('Format Text to Sheet', 'copyTextFromDocToSheet')
    .addToUi();
}
