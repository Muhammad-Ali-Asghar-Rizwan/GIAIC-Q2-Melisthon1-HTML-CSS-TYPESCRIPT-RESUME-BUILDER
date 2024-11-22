function addNewWEField() {
   
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", "3")
    newNode.setAttribute('placeholder' , 'Enter here')
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');


    let weOb = document.getElementById("we")
    let weAddButtonOb = document.getElementById("weAddButton")
   



    weOb?.insertBefore(newNode,weAddButtonOb)
}


function addNewAQField() {
   
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('aqField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", "3")
    newNode.setAttribute('placeholder' , 'Enter here')
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');


    let aqOb = document.getElementById("aq")
    let aqAddButtonOb = document.getElementById("aqAddButton")


    aqOb?.insertBefore(newNode,aqAddButtonOb)
}


// skill

function skillsdNewField() {
   
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('skillField')
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", "3")
    newNode.setAttribute('placeholder' , 'Enter here')
    newNode.setAttribute('style', 'background-color: rgb(245, 243, 243);');


    let skillOb = document.getElementById("skill")
    let  skillAddButtonOb = document.getElementById("skillAddButton")


    skillOb?.insertBefore(newNode,skillAddButtonOb)
}


// GENRATING CV

function generateCV() {
    // console.log("genrating CV");
    let nameField= document.getElementById("nameField").value;

    let nameT1 = document.getElementById('nameT')

    nameT1?.innerHTML= nameField
    
    // direct

    document.getElementById('nameT2')?.innerHTML = nameField

    // contact
    document.getElementById('contactT')?.innerHTML = document.getElementById(
        "contactField"
    ).value
    
    // address
    document.getElementById('addressT')?.innerHTML = document.getElementById(
        "addressField").value



         // address
    document.getElementById('fbT')?.innerHTML = document.getElementById(
        "fbField").value


        
         // address
    document.getElementById('instaT')?.innerHTML = document.getElementById(
        "instaField").value



         // address
    document.getElementById('linkeT')?.innerHTML = document.getElementById(
        "linkeField").value



        // objecttive
        document.getElementById('objectiveT')?.innerHTML = document.getElementById(
            
            'objectiveFied').value



            // work exp
            let wes = document.getElementsByClassName('weField')

            let str = ""

            for (let e of wes) {
                str = str + `<li> ${e.value} </li>`;
            }

            document.getElementById('weT')?.innerHTML = str



            // aq 

            let aqs = document.getElementsByClassName('aqField')

            let str1 = ""

            for (let e of aqs) {
                str1 +=   `<li> ${e.value} </li>`;
            }

            document.getElementById('aqT')?.innerHTML = str1




            

            // skills

            let skill = document.getElementsByClassName('skillField')

            let str2 = ""

            for (let e of skill) {
                str2 +=   `<li> ${e.value} </li>`;
            }

            document.getElementById('skillT')?.innerHTML = str2

            

            // image
            let file = document.getElementById('imgField').files[0]

            console.log(file);
            
            let reader = new FileReader()

            reader.readAsDataURL(file)
            
            console.log(reader.result);

            // set image

            // 
            
            reader.onloadend = function () {
                document.getElementById('imgT').src= reader.result
            }
            


            document.getElementById('cv-form')?.style.display = "none"
            document.getElementById('cvtemplate')?.style.display = "block"

}


// print CV

function printCV(){
window.print()
}