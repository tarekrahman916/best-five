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


const playerArr=[];


//Display selected Player 
const selectPlayerBtn=document.getElementsByClassName('select-btn');

for(const selectBtn of selectPlayerBtn){
    selectBtn.addEventListener('click',function(event){
        
        const playerName=event.target.parentNode.parentNode.children[1].children[0].innerText;
        
        const selectedPlayerElements=document.getElementById('selected-player');
        const li=document.createElement('li');
        li.innerText=playerName;
        
        if (playerArr.length === 5) {
            alert('You can not select more than 5 player.')
            return
        }else{
            selectedPlayerElements.appendChild(li);
        }
        
        selectBtn.classList.add('disabled');
        selectBtn.classList.remove('btn-primary');
        selectBtn.classList.add('btn-secondary');
        

        playerArr.push(playerName);
        
        
        
    })
    
}