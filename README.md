# Soil Connect - Soil conditions and nutrients monitoring system
Soil conditions and nutrients monitoring system

[![VisitWebsite](https://img.shields.io/badge/Visit-Website-a13d5e?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAixJREFUOE9Vk79rFEEUxz9vw0kQRPBHKaRQO0FJLyiC2hjQHAS9PbN38ZqITYyWnmBpLBQLJXd7ZhKJXqI2ohZiEdAq8Q8QG4s0QQu5eMjJPZmZ3c3esAw7M2/e+77v9zuCHeJmPzTZEKjrneAQ38aqLL22IemR//H3/Ac0GT9Yob1l14K6mCblM4LOVsScVU1P0io+pfhweCalWwrbkZrHaYEWZdNHi126B6ZZ7dgLLynu6jB8sYJZzsDbXDHhtKKPBJnpIW8L9I/1kQWB3UA5wpiYaFjprQiyGWFqDlMChCaXrwpBKwMoYGF7mIKqfg+Q3wonEB5EamYG6GtRuqTISo5OT0/Sj2XFV7OT3I1YqNu14wBRGloeE/SNPRe1ceroHEjg8ditm1XMXCbBvBT3DTH8BeWovyGukE2UqTuw1o0h5GQZsy1PqBUKdD8InHKXfb+JuF7ifDLXgedmNZKlosSETxG9lkU6DzjwiVlcP3nvZNwI3JOYyZG+/AsDDULQI5nJdipllvPI3MEvoB2ImryJJab0ELju2oA1Uf2q0BHYD1JLqP3UYev8DXn/d0fGxA2xls6BvAN6fXojU7zYTOVraPhR4LQKs1U19z1LmbTeNQ0u7AnY+1OFVxU1E0lex0mTcFxE26o6WpHFDSe1bS7nFZezQfhZ0NsRi2upS22oV+vP+g8OH69Lve/ga2Ll/CueJ5yYUrPsHllaJhGkxZXRSZ6vJ+I6ef8DHNju1CxiaEQAAAAASUVORK5CYII=)](https://bit.ly/Team_Five)
[![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/get-started/) 
![GitHub repo size](https://img.shields.io/github/repo-size/GOKULJITH-K/SoilConnect) 

SoilConnect is a low cost IoT based real time Soil condition and nutrients monitoring system. It uses advanced sensing technologies to collect Soil information from the real world sensors and provides real time data visualization, machine learning based Soil health prediction.
## Contents

- [SoilConnect - Soil conditions and nutrients Monitoring System](#soilconnect---soil-conditions-and-nutrients-monitoring-system)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Getting started](#getting-started)
  - [Live demo](#live-demo)
  - [Applications](#applications)
    - [Data Analysis](#data-analysis)
    - [Data Visualization](#data-visualisation)
    - [Farmer Assist](#farmer-assist)
    - [Weather Forecast](#weather-forecast)
  - [Authors](#authors)
  - [License](#license)
  - [Acknoledgement](#acknoledgement)

## Short description

### What's the problem?

Manual sampling and laboratory analysis are the traditional methods for monitoring soil conditions and nutrient levels, but they can be time-consuming and expensive, and may not give real-time data. Agricultural settings require accurate and timely information about soil conditions and nutrient levels, which is a challenge with soil conditions and nutrient monitoring. Farmers who are unable to obtain the weather details may face losses in farming, which is why it is crucial to understand weather forecasting in a timely manner. Farmers should obtain adequate information about soil and crop details to enhance crop productivity.We are working to address some of the challenges farmers encounter. 

### How can technology help?

Our proposed solution will help the farmer in all aspects, including monitoring nutrients and soil conditions. The data obtained from the monitoring system will be archived on a cloud server for evaluation. The main goal is to keep track of the level of nutrients in the soil. Various sensors will be used to monitor parameters such as nitrogen, phosphorous, potassium, temperature, and pH value in our proposed system. Farmers will be able to accurately plan cultivation by knowing their soil before starting farming. The sensor data has been incorporated into our website. The soil analysis feature on our website allows for the display of results for various parameters and the visualization of the analyzed data. There is also a section designed to educate farmers. Details about the importance of these parameters are provided in that section, and we will also provide crop information to enhance productivity. The forecasting section is where they will receive the five-day weather forecast in advance. 

### The idea

Developing and deploying low-cost, low-power, quicker, and real-time soil conditions and nutrients monitoring systems in farm lands For this, sensor nodes are developed by incorporating major soil nutrients and conditions sensors and ESP-32. This embedded system uploads the soil nutrients and conditions data to the IoT cloud over Wi-Fi protocol. The data from the cloud is fetched using an API, and using JavaScript, the data is analysed and displayed on our website.

## Demo video

[![Watch the video]()]()

## The architecture

![Data Flow]()

1. ESP-32 from SoilConnect sensor node reads the sensor readings. 
2. It will send the readings through MQTT Protocol to IoT Cloud
3. Using API it delivers the contents from IoT Cloud to website and processed
5. A Dashboard is created to visualize realtime data.

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.
- Sense Major nutrients and conditions.
- Sent readings seperatly to IoT cloud.
- Display Realtime data at Webendpoint
- Provide API to fetch Realtime and historical data.

## Getting started

You can find the details of each section by clicking the image 🖼️ below 🔻 .

[![SoilConnect Software](./docs/images/software-button.png)](./Soil-connect/SOILCONNECT-Sofware/)
[![SoilConnect Hardware](./docs/images/hardware-button.png)](./Soil-connect/SOILCONNECT-Hardware/)

## Live demo

By clicking this [link you]() can visit the live website. 

[![VisitWebsite](https://img.shields.io/badge/soilconnect-a13d5e?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAixJREFUOE9Vk79rFEEUxz9vw0kQRPBHKaRQO0FJLyiC2hjQHAS9PbN38ZqITYyWnmBpLBQLJXd7ZhKJXqI2ohZiEdAq8Q8QG4s0QQu5eMjJPZmZ3c3esAw7M2/e+77v9zuCHeJmPzTZEKjrneAQ38aqLL22IemR//H3/Ac0GT9Yob1l14K6mCblM4LOVsScVU1P0io+pfhweCalWwrbkZrHaYEWZdNHi126B6ZZ7dgLLynu6jB8sYJZzsDbXDHhtKKPBJnpIW8L9I/1kQWB3UA5wpiYaFjprQiyGWFqDlMChCaXrwpBKwMoYGF7mIKqfg+Q3wonEB5EamYG6GtRuqTISo5OT0/Sj2XFV7OT3I1YqNu14wBRGloeE/SNPRe1ceroHEjg8ditm1XMXCbBvBT3DTH8BeWovyGukE2UqTuw1o0h5GQZsy1PqBUKdD8InHKXfb+JuF7ifDLXgedmNZKlosSETxG9lkU6DzjwiVlcP3nvZNwI3JOYyZG+/AsDDULQI5nJdipllvPI3MEvoB2ImryJJab0ELju2oA1Uf2q0BHYD1JLqP3UYev8DXn/d0fGxA2xls6BvAN6fXojU7zYTOVraPhR4LQKs1U19z1LmbTeNQ0u7AnY+1OFVxU1E0lex0mTcFxE26o6WpHFDSe1bS7nFZezQfhZ0NsRi2upS22oV+vP+g8OH69Lve/ga2Ll/CueJ5yYUrPsHllaJhGkxZXRSZ6vJ+I6ef8DHNju1CxiaEQAAAAASUVORK5CYII=)](https://bit.ly/Team_Five)


## Applications
Here are some animations which we are planning to build. 
### Data Analysis 
![Data Analysis](docs/images/Application-Mesh-Simple-Working.gif)
### Data Visualization
![Data Visualization](docs/images/Application-Mesh-GPS-Assist.gif)
### Farmer Assist
![Farmer Assist](docs/images/Application-Mesh-GPS-Assist.gif)
### Weather Forecast
![Weather Forecast](docs/images/Application-Mesh-GPS-Assist.gif)


## Authors

<a href="https://github.com/GOKULJITH-K/SoilConnect/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=GOKULJITH-K/SoilConnect" />
</a>

- **GOKULJITH K** - [GitHub](https://github.com/GOKULJITH-K)


## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknoledgement

We sincerly inform our gratitudes to
- [Freepik] (https://freepik.com) - For design files and templates
- All family, friends, collegues who helped and appreciated us in this journey.
