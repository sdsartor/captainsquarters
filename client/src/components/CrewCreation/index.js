import React from 'react';
let crewStats = require('../../crewStats.json')
let crew = {
    name:"",
    members: []
}
let count = 0

let chosenArr = crew.members

const displayPotentialCrewMembers = () => {
    let i
    let j
    let statStatement
    let keysArr
    let valuesArr
    let value
    let key
    let potentialCrewMemberDiv = document.createElement('div')
    potentialCrewMemberDiv.id = 'potentialCrewMemberDiv'

    
   
     
    for(i=0; i<crewStats.length;i++){

        //Gets Keys and values of crewStats.stats
        keysArr = Object.keys(crewStats[i].stats)
        valuesArr = Object.values(crewStats[i].stats)

        let displayDiv = document.getElementById('displayDiv')
        
        let nameDisplay = document.createElement('h3')
        nameDisplay.id = 'nameDisplay'
        nameDisplay.className= 'nameDisplay'
        nameDisplay.textContent = crewStats[i].name
        
        let soldierType = document.createElement('h3')
        soldierType.id = 'soldierType'
        soldierType.textContent= crewStats[i].soldierType
        
        potentialCrewMemberDiv.append(nameDisplay,soldierType)
        
        //Creates the stats statement for each stat
        for(j=0; j<keysArr.length;j++){        
            key = keysArr[j]
            value = valuesArr[j]
            statStatement = `${key}: ${value}`
            
            let statDisplay = document.createElement('p')
            statDisplay.id = 'statDisplay'
            statDisplay.textContent = statStatement
            potentialCrewMemberDiv.append(statDisplay)
        }

        //Creates Add button
        let addButton = document.createElement('button')
        addButton.id=`${nameDisplay.textContent}`
        addButton.className = `addButton`
        addButton.setAttribute('type','submit')
        addButton.textContent = 'Add Crew Member'
        addButton.onclick = function() {addCrewMember(nameDisplay.textContent)}
        
        potentialCrewMemberDiv.append(addButton)
        displayDiv.append(potentialCrewMemberDiv)
    }
}

const addCrewMember = (test) => {
    let i
    let choice

    chosenArr = crew.members

    for(i=0;i<crewStats.length;i++){
        if (test===crewStats[i].name){
            choice = crewStats[i]
        
            if (chosenArr.length<8){
                if (count < 4 && choice.soldierType === 'specialist') {
                    chosenArr.push(choice)
                }
                else if (choice.soldierType==='standard') {
                    chosenArr.push(choice)
                }
                else {console.log('You have too many Specialists. Max 4')}   
            }
            else {console.log('You have too many Crew Members. Max 8')}
        }
    }
    if (choice.soldierType === "specialist"){
        if(count !== 4){
            count ++
            console.log(count)
        }
    }
    else{ 
        console.log('This is a standard Trooper')
    }
    console.log(chosenArr)
}


//Creates Form for Captain Name and Handles submission
const crewNameFunc = () => {

    //Grabs the input
    let crewNameUserInput = document.getElementById('crewNameInput')  
    //Changes Captain Name to input
    crew.name = crewNameUserInput.value
    
    displayYourCrewFunc()
    displayPotentialCrewMembers()
}

const displayYourCrewFunc = () => {
    
    //Grab Div
    let yourCrewDiv = document.getElementById('yourCrewDiv')
    let yourCrewDivMessage = document.getElementById('yourCrewDivMessage')
    let i

    let yourCrewNameDisplay = document.createElement('p')
    yourCrewNameDisplay.textContent = `${crew.name}`
    
    for (i=0;i<chosenArr.length;i++){
    let yourCrewMembersDisplay = document.createElement('p')
    }
    yourCrewDiv.append(yourCrewNameDisplay)


}


//Function to create CrewCreation Page
const CrewCreation = () => {
    return (
        <main>
            <div id='Introduction'>
                <h2>Whats a Captain without a Crew?  Here you can create and name a crew for your Captain:</h2>
                <p>A crew can have up to 8 members, not including your captain and first mate.</p>
                <p>Each crew is allowed up to 4 Specialists and as many standard crew members as desired.</p>
            </div>
            <div id='crewNameForm'>
                <p>Give your crew a name:</p>
                <input id = 'crewNameInput' type = 'text'></input>
                <button
                id = 'crewNameSubmitButton'
                type = 'submit'
                onClick = {crewNameFunc}
                >Submit 
                </button>
            </div>
            <div  id='displayDiv'></div>
            <div id='yourCrewDiv'>
                <h2>Your Crew:</h2>
                <p id='yourCrewDivMessage'></p>
            </div>        
        </main>
    );
    };
  
  export default CrewCreation;