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

  const sheetId = checkSheetId_();
  const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}`;
  showAlertWithLink(sheetUrl);
}

function checkSheetId_() {
  const sheetId = PropertiesService.getDocumentProperties().getProperty('sheetId');
  if(!sheetId) {
    throw new Error('接続されたシートが設定されていません。セットアップ > 接続されたシートを作成を実行してください。')
  } else {
    return sheetId;
  }
}