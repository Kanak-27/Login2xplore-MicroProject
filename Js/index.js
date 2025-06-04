var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var shipmentDBName = "DELIVERY-DB";
var shipmentRelationName = "SHIPMENT-TABLE";
var connToken = "90934595|-31949211808032992|90956710";

$("#shipmentNo").focus();

function saveRecNo2LS(jsonObj) {
  var lvData = JSON.parse(jsonObj.data);
  localStorage.setItem("recno", lvData.rec_no);
}

function getShipmentIdAsJsonObj() {
  var shipmentNo = $("#shipmentNo").val();
  var jsonStr = {
    id: shipmentNo,
  };
  return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
  saveRecNo2LS(jsonObj);
  var record = JSON.parse(jsonObj.data).record;
  $("#description").val(record.description);
  $("#source").val(record.source);
  $("#destination").val(record.destination);
  $("#shipDate").val(record.shippingDate);
  $("#deliveryDate").val(record.expectedDeliveryDate);
}

function resetForm() {
  $("#shipmentNo").val("");
  $("#description").val("");
  $("#source").val("");
  $("#destination").val("");
  $("#shipDate").val("");
  $("#deliveryDate").val("");
  $("#shipmentNo").prop("disabled", false);
  $("#save").prop("disabled", false);
  $("#change").prop("disabled", true);
  $("#reset").prop("disabled", true);
  $("#shipmentNo").focus();
}

function validateData() {
  var shipmentNo = $("#shipmentNo").val();
  var description = $("#description").val();
  var source = $("#source").val();
  var destination = $("#destination").val();
  var shipDate = $("#shipDate").val();
  var deliveryDate = $("#deliveryDate").val();

  if (shipmentNo === "") {
    alert("Shipment-No. is missing");
    $("#shipmentNo").focus();
    return "";
  }
  if (description === "") {
    alert("Description is missing");
    $("#description").focus();
    return "";
  }
  if (source === "") {
    alert("Source is missing");
    $("#source").focus();
    return "";
  }
  if (destination === "") {
    alert("Destination is missing");
    $("#destination").focus();
    return "";
  }
  if (shipDate === "") {
    alert("Shipping-Date is missing");
    $("#shipDate").focus();
    return "";
  }
  if (deliveryDate === "") {
    alert("Expected-Delivery-Date is missing");
    $("#deliveryDate").focus();
    return "";
  }

  var jsonStrObj = {
    id: shipmentNo,
    description: description,
    source: source,
    destination: destination,
    shippingDate: shipDate,
    expectedDeliveryDate: deliveryDate,
  };
  return JSON.stringify(jsonStrObj);
}

function saveData() {
  var jsonStrObj = validateData();
  if (jsonStrObj === "") return;

  var putRequest = createPUTRequest(
    connToken,
    jsonStrObj,
    shipmentDBName,
    shipmentRelationName
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    putRequest,
    jpdbBaseURL,
    jpdbIML
  );
  jQuery.ajaxSetup({ async: true });

  resetForm();
  $("#shipmentNo").focus();
}

function getShipment() {
  var shipmentIdJsonObj = getShipmentIdAsJsonObj();
  var getRequest = createGET_BY_KEYRequest(
    connToken,
    shipmentDBName,
    shipmentRelationName,
    shipmentIdJsonObj
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    getRequest,
    jpdbBaseURL,
    jpdbIRL
  );
  jQuery.ajaxSetup({ async: true });

  if (resJsonObj.status === 400) {
    $("#save").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#description").focus();
  } else if (resJsonObj.status === 200) {
    $("#shipmentNo").prop("disabled", true);
    fillData(resJsonObj);
    $("#change").prop("disabled", false);
    $("#reset").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#description").focus();
  }
}

function changeData() {
  $("#change").prop("disabled", true);
  var jsonChg = validateData();
  var updateRequest = createUPDATERecordRequest(
    connToken,
    jsonChg,
    shipmentDBName,
    shipmentRelationName,
    localStorage.getItem("recno")
  );
  jQuery.ajaxSetup({ async: false });
  var resJsonObj = executeCommandAtGivenBaseUrl(
    updateRequest,
    jpdbBaseURL,
    jpdbIML
  );
  jQuery.ajaxSetup({ async: true });
  resetForm();
  $("#shipmentNo").focus();
}
