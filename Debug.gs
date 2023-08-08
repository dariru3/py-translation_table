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