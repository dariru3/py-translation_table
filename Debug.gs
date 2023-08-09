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
  const ui = DocumentApp.getUi();
  try {
    const docProperties = PropertiesService.getDocumentProperties();
    const sheetId = docProperties.getProperty("sheetId");
    console.log("Sheet ID:", sheetId);
    if(sheetId) {
      const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}`;
      showAlertWithLink(sheetUrl);
    } else {
      ui.alert('No connected Sheet found. Use set up to create new Sheet.')
    }
  } catch (err) {
    console.log('Failed with error %s', err.message);
    ui.alert('An error occurred getting Sheet url: ' + error);
    return
  }
  
}