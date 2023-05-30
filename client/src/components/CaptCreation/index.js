import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

//Captain Object
const Captain = {
    name: "",
    level: 15,
    move: 6,
    fight: 3,
    shoot: 2,
    armor: 9,
    will: 3,
    health: 16,
    gear: [],
    slots: 6,
    background: "",
    corePowers: [],
    generalPowers: []
  }
//2nd Captain Object for backtracking purposes  
let NewCaptain = {
    name: Captain.name,
    level: Captain.level,
    move: Captain.move,
    fight: Captain.fight,
    shoot: Captain.shoot,
    armor: Captain.armor,
    will: Captain.will,
    health: Captain.health,
    background: Captain.background,
    corePowers: []
}

let CaptainWithCorePowers={}

//Declared Variables for global scope 
let corePowers = []
let chooseOneArr = []
let chooseTwoArr = []
let allPowers = ["Adrenaline Surge","Armor Plates","Camouflage","Fling","Regenerate","Restructure Body","Toxic Claws","Toxic Secretions",
                 "Camouflage","Control Robot","Data Knock","Energy Shield","Power Spike","Quick Step","Target Lock","Temporary Upgrade",
                 "Control Animal","Dark Energy","Heal","Life Leach","Mystic Trance","Puppet Master","Suggestion","Void Blade",
                 "Control Robot","Create Robot","Drone","Electromagnetic Pulse","Remote Firing","Remote Guidance","Repair Robot","Re-wire Robot",
                 "Bait and Switch","Bribe","Cancel Power","Concealed Firearm","Data Jump","Fortune","Haggle","Quick-Step",
                 "Break Lock","Destroy Weapon","Lift","Psionic Fire","Psychic Shield","Pull","Suggestion","Wall of Force",
                 "Anti-gravity Projection", "Data Jump", "Data Knock", "Data Skip", "Drone", "Electromagnetic Pulse", "Holographic Wall", "Transport",
                 "Armoury","Command","Coordinated Fire","Energy Shield","Fortune","Power Spike","Remote Firing","Target Designation",
]
let generalPowers = []

//Creates Form for Captain Name and Handles submission
const captainNameFunc = () => {

    //Grabs the input
    let cptNameUserInput = document.getElementById('captainNameInput')  
    //Changes Captain Name to input
    Captain.name = cptNameUserInput.value
}

//Gets  Background Choice
const captainBackgroundFunc = () => {
let backgroundArr = document.getElementsByName('background')
let submitButton = document.getElementById('captainBackgroundSubmitButton')
let i = 0
    for (i=0;i < backgroundArr.length; i++) {    
        if (backgroundArr[i].checked === true){
            let choice = backgroundArr[i]
            Captain.background = choice.value
            
            if (choice.value === 'Biomorph') {
                Captain.health += 1
                corePowers = [
                    "Adrenaline Surge",
                    "Armor Plates",
                    "Camouflage",
                    "Fling",
                    "Regenerate",
                    "Restructure Body",
                    "Toxic Claws",
                    "Toxic Secretions"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []
            }
            if (choice.value === 'Cyborg') {
                Captain.health += 1
                corePowers= [
                    "Camouflage",
                    "Control Robot",
                    "Data Knock",
                    "Energy Shield",
                    "Power Spike",
                    "Quick Step",
                    "Target Lock",
                    "Temporary Upgrade"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []
        }
            if (choice.value === 'Mystic') {
                Captain.health += 1
                Captain.will += 2
                corePowers= [
                    "Control Animal",
                    "Dark Energy",
                    "Heal",
                    "Life Leach",
                    "Mystic Trance",
                    "Puppet Master",
                    "Suggestion",
                    "Void Blade"
                    ]
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
            if (choice.value === 'Robotics Expert') {
                Captain.will += 1
                corePowers= [
                    "Control Robot",
                    "Create Robot",
                    "Drone",
                    "Electromagnetic Pulse",
                    "Remote Firing",
                    "Remote Guidance",
                    "Repair Robot",
                    "Re-wire Robot"
                    ]
                chooseTwoArr = ["Move", "Fight", "Shoot", "Health"]
                chooseOneArr = []
            }
            if (choice.value === 'Rogue') {
                Captain.health += 1;
                Captain.will += 1;
                corePowers= [
                    "Bait and Switch",
                    "Bribe",
                    "Cancel Power",
                    "Concealed Firearm",
                    "Data Jump",
                    "Fortune",
                    "Haggle",
                    "Quick-Step"
                    ];
                chooseTwoArr = ["Move", "Fight", "Shoot"]
                chooseOneArr = []        
            }
            if (choice.value === 'Psionicist') {
                Captain.health += 1;
                Captain.will += 2;
                corePowers = [
                    "Break Lock",
                    "Destroy Weapon",
                    "Lift",
                    "Psionic Fire",
                    "Psychic Shield",
                    "Pull",
                    "Suggestion",
                    "Wall of Force"
                    ];
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
            if (choice.value === 'Tekker') {
                Captain.will += 2;
                corePowers = [
                    "Anti-gravity Projection", 
                    "Data Jump", 
                    "Data Knock", 
                    "Data Skip", 
                    "Drone", 
                    "Electromagnetic Pulse", 
                    "Holographic Wall", 
                    "Transport"
                    ];
                chooseTwoArr = ["Move", "Fight", "Shoot", "Health"]
                chooseOneArr = []
            }
            if (choice.value === 'Veteran') {
                Captain.health += 1
                Captain.fight += 1
                corePowers = [
                    "Armoury",
                    "Command",
                    "Coordinated Fire",
                    "Energy Shield",
                    "Fortune",
                    "Power Spike",
                    "Remote Firing",
                    "Target Designation"
                    ]
                chooseOneArr = ["Move", "Fight", "Shoot"]
                chooseTwoArr = []
            }
        }          
        } 
        //submitButton.disabled = true
        captainCorePowersFunc()
        getPowersWithoutCorePowers()
        
    }

//Logic for a Captain with one Stat Mod Choice    
const captainChooseOneStatModsFunc = () => {

    //Grabbing Elements/Declaring Variables
    let statModArr = document.getElementsByName('chooseOne')
    let submitButton = document.getElementById('captainChooseOneStatModsSubmitButton')
    let i
    
    //Checks if a radio button is checked and increase stat dependent on choice
    for (i=0;i < statModArr.length; i++) {    
        if (statModArr[i].checked === true){
            let choice = statModArr[i]
            if (choice.value === "Move") {
                NewCaptain.move += 1
            }
            if (choice.value === "Fight") {
                NewCaptain.fight += 1
            }
            if (choice.value === "Shoot") {
                NewCaptain.shoot += 1
            }
        }
    }
    //submitButton.disabled=true
    console.log(NewCaptain)
    return NewCaptain
}
//Logic for a Captain with two Stat Mod Choices
const captainChooseTwoStatModsFunc = () =>{
    
    //Grabbing Elements
    let statModArr = document.getElementsByName('chooseTwo')
    let submitButton = document.getElementById('captainChooseTwoStatModsSubmitButton')
    
    //Creates a new Captain Object based on the original one for backtracking purposes
    NewCaptain = {
        name: Captain.name,
        level: Captain.level,
        move: Captain.move,
        fight: Captain.fight,
        shoot: Captain.shoot,
        armor: Captain.armor,
        will: Captain.will,
        health: Captain.health,
        background: Captain.background
    }

    //Checks for checked boxes and creates an array based on choices
    let choiceArr=[]
    let i

        //Checks for Choices and increases stats based on what choices are made
        for (i=0;i < statModArr.length; i++) {    
            if (statModArr[i].checked === true){
                choiceArr.push(statModArr[i].value)
            }
        }
        if (choiceArr.length === 2) {
            if (choiceArr[0]==="Move" || choiceArr[1]==='Move'){
                NewCaptain.move += 1
            }
            if (choiceArr[0]==="Fight" || choiceArr[1]==='Fight'){
                NewCaptain.fight += 1
            }
            if (choiceArr[0]==='Shoot' || choiceArr[1]==='Shoot'){
                NewCaptain.shoot += 1
            }
            if (choiceArr[0]==='Health' || choiceArr[1]==='Health'){
                NewCaptain.health += 1
            }
        }
        else 
        console.log("Please Select Two and resubmit")    
        //submitButton.disabled=true
    console.log(NewCaptain)
    console.log(Captain) 
    return NewCaptain
}
//Logic to create a checkbox list of core powers based on background
const captainCorePowersFunc = () => {

    // Grabs the corePowers Div
    let corePowersDiv = document.getElementById('chooseCorePowers')

    //Clears the div for backtracking purposes i.e. if they change background powers
    corePowersDiv.textContent = ""
    
    //Variable Declaration for For Loops
    let i=0
    
    
    //Creates p for div "Choose 5 Core Powers"
    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 3 Core Powers:' 
    corePowersDiv.append(paragraph)

    // Creates Checkboxes and Labels according to Core powers passed in array
    for (i=0;i<corePowers.length;i++){
        let corePowersCheckboxes = document.createElement('input')
        let corePowersCheckboxesLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        corePowersCheckboxes.value = corePowers[i]
        corePowersCheckboxes.setAttribute('type','checkbox');
        corePowersCheckboxes.name = 'corePowersCheckboxes'
        corePowersCheckboxes.className = 'corePowersCheckboxes'

        //Creates labels for the Checkboxes
        corePowersCheckboxesLabels.name = 'corePowersCheckboxesLabels'
        corePowersCheckboxesLabels.htmlFor = 'corePowersCheckboxes'
        corePowersCheckboxesLabels.className = 'corePowersCheckboxesLabels'
        corePowersCheckboxesLabels.textContent = corePowers[i]
        
        //Appends the Checkbox and Label along with a line break
        corePowersDiv.append(corePowersCheckboxes)
        corePowersDiv.append(corePowersCheckboxesLabels)
        corePowersDiv.append(lineBreak)
    }

    // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    corePowersDiv.append(submitButton)
    submitButton.onclick = function() {addCorePowers()};
}
//Logic to read choices and add chosen core powers to Captain
const addCorePowers = (event) => {

    //Grabs the Dynamically Made CheckBoxes
    let corePowersArr = document.getElementsByClassName('corePowersCheckboxes')
    
    //Declared Varibles
    let choiceArr=[]
    let i

    //Makes a new model based on the old one for backtracking purposes
    CaptainWithCorePowers = {
        name: NewCaptain.name,
        level: NewCaptain.level,
        move: NewCaptain.move,
        fight: NewCaptain.fight,
        shoot: NewCaptain.shoot,
        armor: NewCaptain.armor,
        will: NewCaptain.will,
        health: NewCaptain.health,
        background: NewCaptain.background,
        corePowers: [],
        generalPowers: []
    }
    
        //Checks for Checked boxes, adds them to an array if checked
    for (i=0;i < corePowersArr.length; i++) {    
        if (corePowersArr[i].checked === true){
            choiceArr.push(corePowersArr[i].value)
        }
    }
        if (choiceArr.length === 3) {
            CaptainWithCorePowers.corePowers = choiceArr
        }
        else {
            console.log("Please Select 3 and resubmit")    
            //submitButton.disabled=true
        }
    console.log(choiceArr)
    console.log(CaptainWithCorePowers)
    console.log(NewCaptain)
    console.log(Captain)
}

const getPowersWithoutCorePowers = () => {
    let i
    let j
    generalPowers = [] 
    for (i=0; i<allPowers.length;i++){
    generalPowers.push(allPowers[i])
    }

    for (i = generalPowers.length - 1; i >= 0; i--) {
        for (j = 0; j < corePowers.length; j++) {
            if (generalPowers[i] === corePowers[j]) {
                generalPowers.splice(i, 1);
            }
        }
    }
    console.log(generalPowers)
    captainChooseGeneralPowers()
}

const captainChooseGeneralPowers = () => {
    let generalPowersDiv = document.getElementById('chooseGeneralPowers')
    generalPowersDiv.textContent = ''
    let i

    //Creates p for div "Choose 5 Core Powers"
    let paragraph = document.createElement('p')
    paragraph.textContent='Choose 2 General Powers:' 
    generalPowersDiv.append(paragraph)

    // Creates Checkboxes and Labels according to Core powers passed in array
    for (i=0;i<generalPowers.length;i++){
        let generalPowersCheckboxes = document.createElement('input')
        let generalPowersCheckboxesLabels = document.createElement('label')
        let lineBreak = document.createElement('br')

        //Creates Checkboxes based on the powers of the background chosen
        generalPowersCheckboxes.value = generalPowers[i]
        generalPowersCheckboxes.setAttribute('type','checkbox');
        generalPowersCheckboxes.name = 'generalPowersCheckboxes'
        generalPowersCheckboxes.className = 'generalPowersCheckboxes'

        //Creates labels for the Checkboxes
        generalPowersCheckboxesLabels.name = 'generalPowersCheckboxesLabels'
        generalPowersCheckboxesLabels.htmlFor = 'generalPowersCheckboxes'
        generalPowersCheckboxesLabels.className = 'generalPowersCheckboxesLabels'
        generalPowersCheckboxesLabels.textContent = generalPowers[i]
        
        //Appends the Checkbox and Label along with a line break
        generalPowersDiv.append(generalPowersCheckboxes)
        generalPowersDiv.append(generalPowersCheckboxesLabels)
        generalPowersDiv.append(lineBreak)
    }

    // Submit Button
    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.textContent = 'Submit'
    generalPowersDiv.append(submitButton)
    submitButton.onclick = function () {addGeneralPowers()};
}

const addGeneralPowers = () => {
    //Grabs the Dynamically Made CheckBoxes
    let generalPowersArr = document.getElementsByClassName('generalPowersCheckboxes')
    
    //Declared Varibles
    let choiceArr=[]
    let i

    //Makes a new model based on the old one for backtracking purposes
    let CaptainWithGeneralPowers = {
        name: CaptainWithCorePowers.name,
        level: CaptainWithCorePowers.level,
        move: CaptainWithCorePowers.move,
        fight: CaptainWithCorePowers.fight,
        shoot:CaptainWithCorePowers.shoot,
        armor: CaptainWithCorePowers.armor,
        will: CaptainWithCorePowers.will,
        health: CaptainWithCorePowers.health,
        background: CaptainWithCorePowers.background,
        corePowers: CaptainWithCorePowers.corePowers,
        generalPowers: []
    }
    
        //Checks for Checked boxes, adds them to an array if checked
    for (i=0;i < generalPowersArr.length; i++) {    
        if (generalPowersArr[i].checked === true){
            choiceArr.push(generalPowersArr[i].value)
        }
    }
        if (choiceArr.length === 2) {
            CaptainWithGeneralPowers.generalPowers = choiceArr
        }
        else {
            console.log("Please Select 2 and resubmit")    
            //submitButton.disabled=true
        }
    console.log(choiceArr)
    console.log(CaptainWithCorePowers)
    console.log(NewCaptain)
    console.log(CaptainWithGeneralPowers)    
}

//Function to create CaptainCreation Page
const CaptCreation = () => {
  return (
    <main>
        <div>
            <p>
                Captain Stats: <br/>
                Name: Captain {Captain.name} <br/>
                Level: 15,<br/>
                Background: {Captain.background}<br/>
                Move: {Captain.move} <br/>
                Fight: {Captain.fight} <br/>
                Shoot: {Captain.shoot} <br/>
                Armor: {Captain.armor} <br/>
                Will: {Captain.will} <br/>
                Health: {Captain.health} <br/>
                Core Powers: {Captain.corePowers} <br/>
            </p>
        </div>

        <div className = "captNameForm">
          <p>Name your Captain:</p>
          <input id = 'captainNameInput' type = 'text'></input>
          <button
          id = 'captainNameSubmitButton'
          type = 'submit'
          onClick = {captainNameFunc}
          >Submit 
          </button>
        </div>
        
        <div className = 'backgroundSelector'>
            <p>Select Your Captain's Background:</p>
            <input value='Biomorph' name='background' type = 'radio' id='biomorph' />
                <label htmlFor = 'biomorph'>Biomorph</label><br/>
            <input value='Cyborg' name='background' type = 'radio' id='cyborg' />
                <label htmlFor = 'cyborg'>Cyborg</label><br/>
            <input value='Mystic' name='background' type = 'radio' id='mystic' />
                <label htmlFor = 'mystic'>Mystic</label><br/>
            <input value='Robotics Expert' name='background' type = 'radio' id='roboticsExpert' />
                <label htmlFor = 'roboticsExpert'>Robotics Expert</label><br/>
            <input value='Rogue' name='background' type = 'radio' id='rogue' />
                <label htmlFor = 'rogue'>Rogue</label><br/>
            <input value='Psionicist' name='background' type = 'radio' id='psionicist' />
                <label htmlFor = 'psionicist'>Psionicist</label><br/>
            <input value='Tekker' name='background' type = 'radio' id='tekker' />
                <label htmlFor = 'tekker'>Tekker</label><br/>
            <input value='Veteran' name='background' type = 'radio' id='veteran' />
                <label htmlFor = 'veteran'>Veteran</label><br/>
            <button
            id = 'captainBackgroundSubmitButton'
            type = 'submit'
            onClick = {captainBackgroundFunc}
            >Submit 
            </button>
        </div>
        
        <div  id="chooseOneDiv">
            <p>Choose One: </p>
            <input value="Move" type='radio' name="chooseOne"></input> 
                <label htmlFor ='chooseOne'>Move</label><br/>
            <input value="Fight" type='radio' name="chooseOne"></input> 
                <label htmlFor ='chooseOne'>Fight</label><br/>
            <input value="Shoot" type='radio' name="chooseOne"></input> 
                <label htmlFor ='chooseOne'>Shoot</label><br/>
            <button
            id = 'captainChooseOneStatModsSubmitButton'
            type = 'submit'
            onClick = {captainChooseOneStatModsFunc}
            >Submit 
            </button>
        </div>    
        
        <div  id="chooseTwoDiv">    
            <p>Choose Two: </p>
            <input value="Move" type='checkbox' name="chooseTwo" ></input> 
                <label htmlFor ='chooseTwo'>Move</label><br/>
            <input value="Fight" type='checkbox' name="chooseTwo"></input> 
                <label htmlFor ='chooseTwo'>Fight</label><br/>
            <input value="Shoot" type='checkbox' name="chooseTwo"></input> 
                <label htmlFor ='chooseTwo'>Shoot</label><br/>
            <input value="Health" type='checkbox' name="chooseTwo"></input> 
                <label htmlFor ='chooseTwo'>Health</label><br/>
            <button
            id = 'captainChooseTwoStatModsSubmitButton'
            type = 'submit'
            onClick = {captainChooseTwoStatModsFunc}
            >Submit 
            </button>
        </div>
        
        <div id='chooseCorePowers'>
            {/* <p>Choose 5 Powers:</p>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[0]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[1]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[2]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[3]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[4]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[5]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[6]}</label>
            <input type="checkbox" name='corePowers'></input>
            <label htmlFor='corePowers'>{corePowers[7]}</label> */}
            {/* <button
            id = 'captainChooseCorePowers'
            type = 'submit'
            onClick = {addCorePowers}
            >Submit 
            </button> */}
        </div>
        <div id='chooseGeneralPowers'>
        </div>                
    </main>
  );
  };

export default CaptCreation;