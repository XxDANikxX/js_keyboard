
function keys(){
    let div = document.body.getElementsByClassName('keyboard')
    let row_number = 0    

    for (let i = 0; i < div.length; i++) {
        innerHtml = ''
        for (let i = 0; i < 6; i++) {

            row_number += 1
            innerHtml += `<div class="row${row_number}" style="

            width: 98%; 
            height:65px; 
            display:flex; 
            gap: 10px; 
            flex-direction: row; 
            justify-content: center;

            "></div>`
        } 
        div[i].innerHTML = innerHtml
    }

    let first = document.body.getElementsByClassName('row1')
    let key_number = 0
    
    for (let i = 0; i < first.length; i++) {

        let name = ['Esc','f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12', 'Delete']
        
        name.forEach(element => {
            key_number += 1

            first[i].innerHTML += `<div id="key${key_number}" style="

            width:65px; 
            height:100%; 
            border: 1px solid black; 
            margin-left:15px; 
            display:flex; 
            align-items:center; 
            justify-content: center;
            border-radius:5px;
            background: lightgray; 
            color:black;
            box-shadow: 2px 2px 2px 2px black

            ">${element}</div>`

        })   

    }


    
    let second = document.body.getElementsByClassName('row2')
    
    for (let i = 0; i < second.length; i++) {

        const name = ['`~ ', '1 !', '2 @', '3 #', '4 $', '5 %', '6 ^', '7 &', '8 *', '9 (', '0 )', '-_', '=+', '←', 'Home']

        name.forEach(element =>{
            key_number += 1
            
            if (key_number !== 28) {
                second[i].innerHTML += `<div id="key${key_number}" style="

                width:65px; 
                height:100%; 
                border: 1px solid black; 
                display:flex;
                margin-left:1px; 
                align-items:center; 
                justify-content: center;
                border-radius:5px; 
                background: #acacac; 
                color:black;
                box-shadow: 2px 2px 2px 2px black

                ">${element}</div>`  
            }
            else{
                second[i].innerHTML += `<div id="key${key_number}" style="

                width:140px; 
                height:100%; 
                border: 1px solid black; 
                display:flex;margin-left:1px; 
                align-items:center; 
                justify-content: center;
                border-radius:5px;
                background: #acacac; 
                color:black;
                box-shadow: 2px 2px 2px 2px black

                ">${element}</div>`  
            }   

        })
            
    }

    let third = document.body.getElementsByClassName('row3')

    for (let i = 0; i < third.length; i++) {   
        const name = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[{', ']}', '|', 'PgUp'] 

        name.forEach(element => {
            
            key_number += 1
            let width = 65

            if (key_number === 30){
                width = 100
            }
            if(key_number === 43){
                width = 100
            }

            third[i].innerHTML += `<div id="key${key_number}" style="

            width:${width}px; 
            height:100%; 
            border: 1px solid black;
            margin-left:1px; 
            display:flex; 
            align-items:center; 
            justify-content: center;
            border-radius:5px; 
            background: #8a8a8a; 
            color: black;
            box-shadow: 2px 2px 2px 2px black

            ">${element}</div>` 

        })     

    }
    let fourth = document.body.getElementsByClassName('row4');

    for (let i = 0; i < fourth.length; i++) {

        const name = ['Caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '; :', '"', 'Enter', 'PgDn']
        
        name.forEach(element =>{
            key_number += 1
            let width = 65


            if (key_number === 45){
                width = 130
            } 
            if (key_number === 57){
                width = 160
            }

            fourth[i].innerHTML += `<div id="key${key_number}" style="

            width:${width}px; 
            height:100%; 
            border: 1px solid black; 
            display:flex; 
            align-items:center; 
            justify-content: center;
            margin-left:0px;
            border-radius:5px; 
            background: #696969; 
            color:black;
            box-shadow: 2px 2px 2px 2px black

            ">${element}</div>`

        })   

    }

    let fifth = document.body.getElementsByClassName('row5')

    for (let i = 0; i < fifth.length; i++) {

        const name = ['↑Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ', <', '. >', '/ ?', '↑Shift', '↑', 'End']

        name.forEach(element =>{

            key_number += 1
            let width = 65

            if (key_number === 59){
                width = 150
            } 
            if (key_number === 70){
                width = 130
            }

            fifth[i].innerHTML += `<div id="key${key_number}" style="

            width:${width}px;
            height:100%;
            border: 1px solid black; 
            margin-left:1px; 
            display:flex; 
            align-items:center; 
            justify-content: center;
            border-radius:5px; 
            background: #444444;
            color:white;
            box-shadow: 2px 2px 2px 2px black

            ">${element}</div>`

        })
            
    }

    let six = document.body.getElementsByClassName('row6')

    for (let i = 0; i < six.length; i++) {
        let innerHtml = ''
        const name = ["Crtl", 'Win','Alt', '______', 'Alt', 'Fn', 'Ctrl', '←', '↓', '→']

        name.forEach(element => {
            key_number += 1
            let width = 65

            if  (key_number === 76){
                width = 500
            }
            
            six[i].innerHTML += `<div id="key${key_number}" style="

            width:${width}px; 
            height:100%; 
            border: 1px solid black; 
            margin-left:4px; 
            display:flex; 
            align-items:center; 
            justify-content: center;
            border-radius:5px; 
            background: #303030; 
            color:white; 
            box-shadow: 2px 2px 2px 2px black

            ">${element}</div>`

        })

    }

}

// Ховер для клавишь "при наводке меняется цвет"
function hover() {
    for (let i = 1; i < 83; i++) {
        let hover = document.getElementById(`key${i}`)
        
        hover.addEventListener('mouseover',(event) =>{
            event.target.style.backgroundColor = 'black'
            event.target.style.color = 'white'
            event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
        })
        if (i <= 14){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor ='lightgray'
                event.target.style.color = 'black'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })
        }
        if (i > 14 && i <= 29){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor =' #acacac'
                event.target.style.color = 'black'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })
        }
        if (i > 29 && i <= 44){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor =' #8a8a8a'
                event.target.style.color = 'black'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })
        }
        if(i > 44 && i <= 58){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor =' #696969'
                event.target.style.color = 'black'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })                
        }
        if(i > 58 && i <= 72){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor =' #444444'
                event.target.style.color = 'white'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })                
        }
        if(i > 72){
            hover.addEventListener('mouseout', (event) =>{
                event.target.style.backgroundColor =' #303030'
                event.target.style.color = 'white'
                event.target.style.transition = "background-color 0.2s ease, color 0.3s ease"
            })                
        }
    }
}

function press() {

    for (let i = 1; i < 83; i++) {

        shift_on_off = false
        let input = document.querySelector('.text')
        let pressed_keys = document.querySelector(`#key${i}`)


        pressed_keys.addEventListener('click', (event)=>{
            if (!shift_on_off){
                let name = ['','','', '', '', '', '', '', '', '', '', '', '', '', '','`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '', '','', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', '', '', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', '', '','', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', '', '', "", '','', ' ', '', '', '', '', '', '' ]
                
                for (let c = 1; c < name.length; c++) {

                    if (c == i){
                        input.value += name[c]
                        event.target.style.backgroundColor = 'white'
                        event.target.style.color = 'black'

                    }
                    // delete button
                    if (i == 14){
                        input.value = ''
                    }

                }
            }
        })         

    }
}

function backspace() {
    let field = document.querySelector('.text')
    let backspace = document.querySelector('#key28')
    backspace.addEventListener('click', () =>{
        str = ''
        for (let i = 0; i < field.value.length; i++) {
            let text = field.value
            field.value = text.slice(0, -1)
            break
        }
    })
}

function shift() {
    
    for (let i = 1; i < 83; i++) {

        shift_on_off = false
        let input = document.querySelector('.text')
        let pressed_keys = document.querySelector(`#key${i}`)
        let shift = ['','','', '', '', '', '', '', '', '', '', '', '', '', '','~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '', '','', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', '', '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '', '','', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', '', '', "", '','', ' ', '', '', '', '', '', '']
        
        const upper_case2 = document.getElementById('key70')

        upper_case2.addEventListener('click', () =>{
            shift_on_off = true
        })
        
        pressed_keys.addEventListener('click', (event) =>{
            if (shift_on_off) {
                for (let x = 1; x < shift.length; x++) {
                    if (x == i){    

                        input.value += shift[x]
                        event.target.style.backgroundColor = 'white'
                        event.target.style.color = 'black'
                        shift_on_off = false
                        
                    }
                }
            }

        })
    
        const upper_case1 = document.getElementById('key59')

        upper_case1.addEventListener('click', () =>{
            shift_on_off = true
        })

        pressed_keys.addEventListener('click', (event) =>{
            if (shift_on_off) {
                for (let x = 1; x < shift.length; x++) {
                    if (x == i){
                        
                        input.value += shift[x]
                        event.target.style.backgroundColor = 'white'
                        event.target.style.color = 'black'
                        shift_on_off = false
                    
                    }
                }
            }
        })
    }

}





keys()
hover()
press()
backspace()
shift()