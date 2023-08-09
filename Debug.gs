function deleteKey() {
  accessSheetIdKey_("delete");
}

function getKey() {
  accessSheetIdKey_("get");
}

function accessSheetIdKey_(accessType="get") {
  const docProperties = PropertiesService.getDocumentProperties();
  if(accessType=="delete") {
    try {
      docProperties.deleteProperty('sheetId');
    } catch(error) {
      console.log("Failed to delete file propery 'sheetId'");
    }
    return
  }

  const sheetId = docProperties.getProperty('sheetId');
  if(!sheetId) {
    throw new Error('接続されたシートが設定されていません。セットアップ > 接続されたシートを作成を実行してください。');
  }
  const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}`;
  showAlertWithLink(sheetUrl);
}