// Javascript code for from submission 
const scriptURL='https://script.google.com/macros/s/AKfycbyKVCwh9tTmx18MLzzK30o_xj29WxLfXLiwcnrdmZosyIXqpM9QiioUYqoxz8jHcPFcRQ/exec'
const form=document.forms['contactform']

form.addEventListener('submit',e=> {
e.preventDefault()
fetch(scriptURL,{method:'POST',body: new FormData(form)})
.then(response=> console.log('sucees',response))
.catch(error=> console.error('Error',error.message))

})

//Soil Analysis using Javascript


const channelId = 2220496;
const apiKey = 'ABVRZGB60RF742Y5';
const fieldThresholds =  [{ fieldNumber: 1, fieldName: 'Nitrogen',field:'Field crop cultivation',fieldhigh:'we can find that the soil contains excess quantity of nutrients for field crop cultivation we should maintain the ratio of npk',fieldlow:'we can find that the soil does not have an adequate quantity of nutrients for Field crop cultivation,',veg:'vegetable cultivation', veghigh:'we can find that the soil contains excess quantity of nutrients for vegetable cultivation we should maintain the ratio of npk', veglow:'we can find that the soil does not have an adequate quantity of nutrients for vegetable cultivation',unit:'mg/kg' ,thresholds: [201, 300,101,150], avoid: [255, 0] },
  { fieldNumber: 2, fieldName: 'Phosphorus',field:'Field crop cultivation',fieldhigh:'we can find that the soil contains excess quantity of nutrients for field crop cultivation we should maintain the ratio of npk',fieldlow:'we can find that the soil does not have an adequate quantity of nutrients for vegetable cultivation',veg:'vegetable cultivation',veghigh:'we can find that the soil contains excess quantity of nutrients for vegetable cultivation we should maintain the ratio of npk',veglow:'we can find that the soil does not have an adequate quantity of nutrients for vegetable cultivation',unit:'mg/kg' , thresholds: [61, 90,11,20], avoid: [255, 0] },
  { fieldNumber: 3, fieldName: 'Potassium',field:'Field crop cultivation',fieldhigh:'we can find that the soil contains excess quantity of nutrients for field crop cultivation we should maintain the ratio of npk',fieldlow:'we can find that the soil does not have an adequate quantity of nutrients for vegetable cultivation',veg:'vegetable cultivation',veghigh:'we can find that the soil contains excess quantity of nutrients for vegetable cultivation we should maintain the ratio of npk',veglow:'we can find that the soil does not have an adequate quantity of nutrients for vegetable cultivation',unit:'mg/kg' , thresholds: [161,240,101,150], avoid: [255, 0] },
  { fieldNumber: 4, fieldName: 'Temperature',veg:'Perfect range of nitrification, plant growth, and planting.',veghigh:'It is not the perfect range for nitrification, plant growth, and planting.',unit:'°C' , thresholds: [19, 30], avoid: [255, 0] },
  { fieldNumber: 5, fieldName: 'pH',veg:'Perfect range for plant growth and planting',veghigh:'Should decrease the amount of pH',fieldlow:'Should increase the amount of pH',unit:'' , thresholds: [6.6, 7.5], avoid: [14, 18, 24, 25] }

]; // Replace with the field numbers, names, thresholds, and avoid values you're interested in

const dataDisplayElement = document.getElementById('dataDisplay');

let currentRow = null;

fieldThresholds.forEach((fieldInfo, index) => {
  const { fieldNumber,field,fieldhigh,fieldlow,veg,veghigh,veglow,unit, fieldName, thresholds, avoid } = fieldInfo;
  const url = `https://api.thingspeak.com/channels/${channelId}/fields/${fieldNumber}.json?api_key=${apiKey}&results=30`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temperatureData = data.feeds.map(entry => parseFloat(entry[`field${fieldNumber}`]));

      // Filter out repeated values to avoid
      const filteredTemperatureData = temperatureData.filter(temperature => !avoid.includes(temperature));

      // Find the most repeating value
      const frequencyMap = {};
      let maxFrequency = 0;
      let mostRepeatingValue;

      filteredTemperatureData.forEach(temperature => {
        frequencyMap[temperature] = (frequencyMap[temperature] || 0) + 1;
        if (frequencyMap[temperature] > maxFrequency) {
          maxFrequency = frequencyMap[temperature];
          mostRepeatingValue = temperature;
        }
      });

      // Create a card for each field's message
      const card = document.createElement('div');
      card.className = 'card';

      const fieldNameText = document.createElement('h2');
      fieldNameText.textContent = fieldName;
      card.appendChild(fieldNameText);

      const temperatureText = document.createElement('p');
      temperatureText.textContent = `${fieldName} value: ${mostRepeatingValue} ${unit} `;
      card.appendChild(temperatureText);

      // Check temperature against different thresholds using if-else statements
      let resultMessage;
      if (mostRepeatingValue > thresholds[1]) {
        resultMessage = `Value of ${fieldName} is higher than optimum value.${veghigh}`;
      } else if (mostRepeatingValue < thresholds[2]) {
        resultMessage = `value of ${fieldName} is low for ${field} and ${veg}`;
      } else if (mostRepeatingValue > thresholds[0] && mostRepeatingValue < thresholds[1] ) {
        resultMessage = `Value of ${fieldName} is optimum for ${veg}`;
      } else if (mostRepeatingValue > thresholds[2] && mostRepeatingValue < thresholds[3]){
        resultMessage = `Value of ${fieldName} is optimum for ${field}`;
      } else if(mostRepeatingValue > thresholds[3] && mostRepeatingValue < thresholds[1]){
        resultMessage = `value of ${fieldName} is lower than optimum value for ${veg}.${veglow} and ${fieldhigh}` ;
      } else{
        resultMessage = `value of ${fieldName} is lower than optimum value.${fieldlow}`
      }

      const resultMessageText = document.createElement('p');
      resultMessageText.textContent = resultMessage;
      card.appendChild(resultMessageText);

      // Create a div element with the class "destination-col" for each card
      const destinationCol = document.createElement('div');
      destinationCol.className = 'destination-col';
      destinationCol.appendChild(card);

      // Create a new row for every three cards
      if (index % 3 === 0) {
        currentRow = document.createElement('div');
        currentRow.className = 'row';
        dataDisplayElement.appendChild(currentRow);
      }

      // Append the card to the current row
      currentRow.appendChild(destinationCol);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'Error fetching data';
      dataDisplayElement.appendChild(errorMessage);
    });
});