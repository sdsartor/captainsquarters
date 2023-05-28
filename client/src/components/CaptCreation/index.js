import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

//Captin Object
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
    background: ""
  }
 

let chooseOneArr = []
let chooseTwoArr = []

//Creates Form for Captain Name and Handles submission
const captainNameFunc = () => {

    let cptNameUserInput = document.getElementById('captainNameInput')  
    Captain.name = cptNameUserInput.value
    console.log(Captain.name)
}

//Gets  Background Choice
const captainBackgroundFunc = () => {
let backgroundArr = document.getElementsByName('background')
let submitButton = document.getElementById('captainBackgroundSubmitButton')
let corePowers = []
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
                console.log(chooseOneArr)
                console.log(chooseTwoArr)
            }
            console.log(choice)
        }          
        } 
        console.log(corePowers)
        //submitButton.disabled = true
    }
    

// const captainStatModButtonDisplayFunc = () => {
//     let div1 = document.getElementById('chooseOneDiv')
//     let div2 = document.getElementById('chooseTwoDiv')
//     let i
//     for (i=0;i< chooseTwoArr.length; i++) {
//         if (chooseTwoArr.length > 0){
//             div2.style= {display: this.state ? 'block' : 'none' } 
//         }
//     }
//     for (i=0;i<chooseOneArr.length;i++) {
//         if (chooseOneArr.length > 0) {
//             div1.style= "none"
//         }
//     else div1.style={display: 'none'}
//     }


//     console.log(div1)
//     console.log(div2)
//     //div1.style= {display: 'none'}
    
// }


//Code to not allow More than one stat change


const captainChooseOneStatModsFunc = () => {
    let statModArr = document.getElementsByName('chooseOne')
    let submitButton = document.getElementById('captainChooseOneStatModsSubmitButton')
    const NewCaptain = {
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
    let i
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
    
}
const captainChooseTwoStatModsFunc = () =>{
    let statModArr = document.getElementsByName('chooseTwo')
    let submitButton = document.getElementById('captainChooseTwoStatModsSubmitButton')
    const NewCaptain = {
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
    let choiceArr=[]
        let i
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
}   


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
    </main>
  );
  };

export default CaptCreation;