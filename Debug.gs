function deleteKey() {
  try {
  // Delete the doc property 'sheetId'.
  const docProperties = PropertiesService.getDocumentProperties();
  docProperties.deleteProperty('sheetId');
  } catch (err) {
    // TODO (developer) - Handle exception
    console.log('Failed with error %s', err.message);
  }
}

function getKey() {
  try {
    const docProperties = PropertiesService.getDocumentProperties();
    const sheetId = docProperties.getProperty("sheetId");
    console.log("Sheet ID:", sheetId);
    if(!sheetId) {
      throw new Error('接続されたシートが設定されていません。セットアップ > 接続されたシートを作成を実行してください。'
);
    }
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}`;
    showAlertWithLink(sheetUrl);
  } catch (err) {
    throw new Error('An error occurred getting Sheet url: ' + err);
  }
}