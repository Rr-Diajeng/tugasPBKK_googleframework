function doGet(e) {
  var x = HtmlService.createTemplateFromFile("index");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function checkLogin(username, password) {
  // Validate input
  if (typeof username !== 'string' || typeof password !== 'string') {
    return 'Input Error: Username or Password is undefined';
  }

  var url = 'https://docs.google.com/spreadsheets/d/1NyXHe-FFO_vuA27tYhkjU_ri7VYDOExZLQFNZeKhhcQ/edit#gid=0';
  var ss = SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  var getLastRow = webAppSheet.getLastRow();
  var found_record = '';

  for (var i = 1; i <= getLastRow; i++) {
    if (webAppSheet.getRange(i, 1).getValue().toUpperCase() == username.toUpperCase() && 
        webAppSheet.getRange(i, 2).getValue().toUpperCase() == password.toUpperCase()) {
      found_record = 'TRUE';
    }    
  }

  if (found_record == '') {
    found_record = 'FALSE'; 
  }
  
  return found_record;
}

function AddRecord(usernamee, passwordd, email, phone) {
  var url = 'https://docs.google.com/spreadsheets/d/1NyXHe-FFO_vuA27tYhkjU_ri7VYDOExZLQFNZeKhhcQ/edit#gid=0';
  var ss= SpreadsheetApp.openByUrl(url);
  var webAppSheet = ss.getSheetByName("DATA");
  webAppSheet.appendRow([usernamee,passwordd,email,phone]);
  
}
