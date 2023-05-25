import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


//Creates Form for Captain Name and Handles submission
const captainNameFunc = () => {
  let captNameDiv = document.createElement('div')
  captNameDiv.id = 'captNameDiv'

  let prompt1 = document.createElement('p')
  prompt1.innerText = "Name Your Captain:"
  document.body.appendChild(prompt1)

  let captainNameForm = document.createElement('input')
  captainNameForm.setAttribute('type',"text")
  document.body.appendChild(captainNameForm)
  
  
  let btn = document.createElement('button')
  btn.setAttribute('type','submit')
  btn.innerHTML='Submit'
  document.body.appendChild(btn)

  btn.addEventListener('click', function() {
      let captainName = captainNameForm.value
      crewChoices.captain.name = captainName
      console.log(crewChoices.captain.name)
  })
}

//Radio Buttons for Background Choices
const captainBackgroundButtonCreator = (array) => {
  for (i=0; i<array.length; i++) {

      //Capitalizes First Letter
      let str = array[i]
      let str2 = str.charAt(0).toUpperCase() + str.slice(1)

      //Creates a label for each item in the array
      let label = document.createElement("label")
      label.htmlFor = 'radio'
      label.innerHTML = str2

      //Creates a space in the name for "Robotics Expert"
      if (label.innerHTML === "RoboticsExpert") {
          label.innerHTML = 'Robotics Expert'
      }

      //Appends to the body
      document.body.appendChild(label)

      //Creates a radio button to go with each label
      let radio = document.createElement("input")
      radio.setAttribute("type","radio")
      radio.id = 'captBackgroundRadio'
      radio.value = label.innerHTML
      document.body.appendChild(radio)
      radio.addEventListener('click',captainBackgroundChoiceFunc)
      //Line Break
      let br = document.createElement("br")
      document.body.appendChild(br)  
      
      radio.addEventListener('change', () => {
          let div = document.getElementById('skillDiv')
          document.body.removeChild(div)
      })
  }
}



let backgroundsArr = Object.keys(backgroundChoice)


  return (
    <div>
        <div className = "captNameForm">
          <script>{captainNameFunc}</script>
        </div>
        <div className = 'backgroundSelector'>
            <p>Select Your Captain's Background:</p>
            <script>{captainBackgroundButtonCreator(backgroundsArr)}</script>
        </div>                
    </div>
  );


export default captainCreation;