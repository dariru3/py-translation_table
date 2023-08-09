// Function that runs when the document is opened
function onOpen(e) {
  // Create a new menu
  const ui = DocumentApp.getUi();
  ui.createMenu('Translation Table Menu')
    .addItem('Translation Memory (○/▼)', 'textForTranslationMemory')
    .addItem('対訳表 (▼)', 'textForTranslationTable')
    .addSeparator()
    .addSubMenu(ui.createMenu('Set up')
      .addItem('Create connected Sheet', 'createNewSheet')
      .addItem('Get connected Sheet URL', 'getKey'))
    .addToUi();
}
