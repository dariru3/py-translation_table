// Function that runs when the document is opened
function onOpen(e) {
  // Create a new menu
  const ui = DocumentApp.getUi();
  ui.createMenu('Translation Table Menu')
    .addItem('Sentence format to Sheet (○/▼)', 'copyTextFromDocToSheet')
    .addItem('Free format to Sheet (▼)', 'copyTextFromDocToSheet')
    .addSubMenu(ui.createMenu('Set up')
      .addItem('Create target Sheet', 'createSheet'))
    .addToUi();
}
