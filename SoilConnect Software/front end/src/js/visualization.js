const channelId = 2220496;
const apiKey = 'ABVRZGB60RF742Y5';

const fields = [
  { number: 1, name: 'Nitrogen', filterValues: [0, 255] },
  { number: 2, name: 'Phosphorus', filterValues: [0, 255] },
  { number: 3, name: 'Potassium', filterValues: [0, 255] },
  { number: 4, name: 'Temperature', filterValues: [0, 125] },
  { number: 5, name: 'pH', filterValues: [0, 25, 24, 14, 18] },
  // Add more fields as needed
];

const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=30`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const pieChartElement = document.getElementById('lineChart');
    const pieChart = new Chart(pieChartElement, {
      type: 'line',
      data: {
        labels: fields.map(field => field.name),
        datasets: [{
          data: fields.map(field => getMostRepeatedValue(data.feeds, field.number, field.filterValues)),
          backgroundColor: fields.map(() => getRandomColor()),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function getMostRepeatedValue(feeds, fieldNumber, filterValues) {
  const values = feeds
    .map(entry => parseFloat(entry[`field${fieldNumber}`]))
    .filter(value => !filterValues.includes(value));

  const frequencyMap = {};
  let maxFrequency = 0;
  let mostRepeatingValue;

  values.forEach(value => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    if (frequencyMap[value] > maxFrequency) {
      maxFrequency = frequencyMap[value];
      mostRepeatingValue = value;
    }
  });

  return mostRepeatingValue;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
fetch(url)
.then(response => response.json())
.then(data => {
const pieChartElement = document.getElementById('barChart');
const pieChart = new Chart(pieChartElement, {
type: 'bar',
data: {
labels: fields.map(field => field.name),
datasets: [{
data: fields.map(field => getMostRepeatedValue(data.feeds, field.number, field.filterValues)),
backgroundColor: fields.map(() => getRandomColor()),
}],
},
options: {
responsive: true,
maintainAspectRatio: false,
},
});
})
.catch(error => {
console.error('Error fetching data:', error);
});

function getMostRepeatedValue(feeds, fieldNumber, filterValues) {
const values = feeds
.map(entry => parseFloat(entry[`field${fieldNumber}`]))
.filter(value => !filterValues.includes(value));

const frequencyMap = {};
let maxFrequency = 0;
let mostRepeatingValue;

values.forEach(value => {
frequencyMap[value] = (frequencyMap[value] || 0) + 1;
if (frequencyMap[value] > maxFrequency) {
maxFrequency = frequencyMap[value];
mostRepeatingValue = value;
}
});

return mostRepeatingValue;
}

function getRandomColor() {
const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    const pieChartElement = document.getElementById('polarAreaChart');
    const pieChart = new Chart(pieChartElement, {
      type: 'polarArea',
      data: {
        labels: fields.map(field => field.name),
        datasets: [{
          data: fields.map(field => getMostRepeatedValue(data.feeds, field.number, field.filterValues)),
          backgroundColor: fields.map(() => getRandomColor()),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function getMostRepeatedValue(feeds, fieldNumber, filterValues) {
  const values = feeds
    .map(entry => parseFloat(entry[`field${fieldNumber}`]))
    .filter(value => !filterValues.includes(value));

  const frequencyMap = {};
  let maxFrequency = 0;
  let mostRepeatingValue;

  values.forEach(value => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    if (frequencyMap[value] > maxFrequency) {
      maxFrequency = frequencyMap[value];
      mostRepeatingValue = value;
    }
  });

  return mostRepeatingValue;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}     
fetch(url)
  .then(response => response.json())
  .then(data => {
    const pieChartElement = document.getElementById('doughnutChart');
    const pieChart = new Chart(pieChartElement, {
      type: 'doughnut',
      data: {
        labels: fields.map(field => field.name),
        datasets: [{
          data: fields.map(field => getMostRepeatedValue(data.feeds, field.number, field.filterValues)),
          backgroundColor: fields.map(() => getRandomColor()),
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function getMostRepeatedValue(feeds, fieldNumber, filterValues) {
  const values = feeds
    .map(entry => parseFloat(entry[`field${fieldNumber}`]))
    .filter(value => !filterValues.includes(value));

  const frequencyMap = {};
  let maxFrequency = 0;
  let mostRepeatingValue;

  values.forEach(value => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    if (frequencyMap[value] > maxFrequency) {
      maxFrequency = frequencyMap[value];
      mostRepeatingValue = value;
    }
  });

  return mostRepeatingValue;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}                 

