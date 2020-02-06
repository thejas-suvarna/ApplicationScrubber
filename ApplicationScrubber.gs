function myFunction() {
  // Open a form by ID and log the responses to each question.
  var form = FormApp.openById('1OewgIl6MRY1ZP6jrwAIflv-siCJ7Y4SRiT7AIRcPljI'); //original form witnames
  var newForm = FormApp.openById('1HFcLbgeC9glJGpGNM-Q12U7Mvi6ua3gJurpEc9pdFMM'); //new form without names, use form id from forms.google.com/xxxx
  resp = form.getResponses();
  numResp = newForm.getResponses();
  for (var i=numResp.length; i < resp.length; i++){ // submit only new responses generated since previous sync
    var items = resp[i].getItemResponses();
    var resp1 = newForm.createResponse();
    for (var j = 0; j < items.length; j++) {
      if(j != 0 /* || j != 3 || j != 4 || j != 17 */){ //j values represent order of fields in form, take out these numbers
        resp1.withItemResponse(items[j]);
      }
    }
    try{
      resp1.submit();
    }
    catch(e){
      Logger.log(e);
    }
  }
}