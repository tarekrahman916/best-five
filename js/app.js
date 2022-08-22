//-----Common Function------
function getInputFieldValue(inputId) {
    const inputField=document.getElementById(inputId);
    const inputFieldValueString=inputField.value ;
    const inputFieldValue=parseInt(inputFieldValueString);

    return inputFieldValue;
}

function setElementsValue(elementId,value) {
const element=document.getElementById(elementId);
      element.innerText=value;
}
