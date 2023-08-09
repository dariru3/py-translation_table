// Function that runs when the document is opened
function onOpen(e) {
  // Create a new menu
  const ui = DocumentApp.getUi();
  ui.createMenu('Translation Table Menu')
    .addItem('Translation Memory (○/▼)', 'textForTranslationMemory')
    .addItem('対訳表 (▼)', 'textForTranslationTable')
    .addSeparator()
    .addSubMenu(ui.createMenu('セットアップ')
      .addItem('接続されたシートを作成を実行', 'createNewSheet')
      .addItem('接続されたシートのURLを表す', 'getKey'))
    .addToUi();
}
