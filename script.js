let displayBox = document.querySelector('.display-box');
let keys = document.querySelectorAll('.key')

keys.forEach(element=>{
    element.addEventListener('click', e=>{
        
        
        if(!isNaN(element.textContent) || element.classList.contains('operator')){

            displayBox.textContent+=element.textContent
            
        }
         if(element.classList.contains('equal')){
           
            
            try{
                
                displayBox.textContent = eval(displayBox.textContent)
            } catch{
                displayBox.textContent = 'Error!'
            }
            
        }
        // if(displayBox.textContent === 'Error!'){
        //     displayBox.textContent = ''
        // }
    

        if(element.classList.contains('clear')){
            displayBox.textContent=''
        }

         if (element.classList.contains("backspace")) {
          displayBox.textContent = displayBox.textContent.slice(0, -1);
        }

        
    })
})