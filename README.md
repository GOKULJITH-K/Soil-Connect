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
    - [Mesh Network - Simple application](#mesh-network---simple-application)
    - [Mesh Network - Vehicle Traffic](#mesh-network---vehicle-traffic)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)
  - [Acknoledgement](#acknoledgement)

## Short description

### What's the problem?

Soil conditions and nutrients monitoring using the cloud is a project aimed at enhancing soil health and crop productivity. Traditional methods of monitoring
soil conditions and nutrient levels involve manual sampling and laboratory analysis,which can be time consuming and expensive and may not provide real time data. The
challenge with soil conditions and nutrient monitoring is the need for accurate and timely information on soil conditions and nutrient levels in agricultural settings.

### How can technology help?

Our proposed solution will help the farmer in all aspects, which involve the monitoring of nutrients and conditions in the soil. The data collected from the mon-
itoring station will be stored in a cloud server for analysis. The main purpose is to monitor the level of nutrients in the soil. Also our proposed system will monitor
the parameters like nitrogen, phosphorous, potassium, temperature, pH value using various sensors. This will help a farmer to know his soil before starting farming and
precisely plan cultivation.
### The idea

Developing and deploying low cost, low power, quicker, and real time soil conditions and nutrients monitoring system at pollution affected area. For this, array sensor nodes are developed by incorporating major air nutrients and conditions sensors and NodeMCU.  This embedded system uploads the soil nutrients and conditions data to the IBM Watson IoT cloud over Wi-Fi protocol. 

## Demo video

[![Watch the video](./docs/images/YT-Thumbnail.png)](https://www.youtube.com/watch?v=G5Q1Tb0h1t)

## The architecture

![Single Node Data flow](./docs/images/Block-Diagram---Github.jpg)

1. ESP-32 from SoilConnect sensor node reads the sensor readings. 
2. It will send the readings through MQTT Protocol to IBM Watson IOT
3. Using Node Red Flows the readings are fetched from IBM Watson IOT and Stored it into IBM Cloudant DB
4. A public API Endpoint is made using Fast API, It processes and delivers the contents from Cloudant DB to Apps
5. A Dashboard is created to visualize realtime data.

## Long description

[More detail is available here](./docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.
- Sense Major nutrients and conditions.
- Sent readings seperatly to IBM Watson IOT cloud.
- Display Realtime data at Webendpoint
- Provide API to fetch Realtime and historical data.

## Getting started

You can find the details of each section by clicking the image 🖼️ below 🔻 .

[![Polmo Software](./docs/images/software-button.png)](./POLMO%20Sofware/)
[![Polmo Hardware](./docs/images/hardware-button.png)](./POLMO%20Hardware/)

## Live demo

By clicking this [link you](https://bit.ly/Team_Five) can visit the live website. 

[![VisitWebsite](https://img.shields.io/badge/Polmo-Website-a13d5e?style=social&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAixJREFUOE9Vk79rFEEUxz9vw0kQRPBHKaRQO0FJLyiC2hjQHAS9PbN38ZqITYyWnmBpLBQLJXd7ZhKJXqI2ohZiEdAq8Q8QG4s0QQu5eMjJPZmZ3c3esAw7M2/e+77v9zuCHeJmPzTZEKjrneAQ38aqLL22IemR//H3/Ac0GT9Yob1l14K6mCblM4LOVsScVU1P0io+pfhweCalWwrbkZrHaYEWZdNHi126B6ZZ7dgLLynu6jB8sYJZzsDbXDHhtKKPBJnpIW8L9I/1kQWB3UA5wpiYaFjprQiyGWFqDlMChCaXrwpBKwMoYGF7mIKqfg+Q3wonEB5EamYG6GtRuqTISo5OT0/Sj2XFV7OT3I1YqNu14wBRGloeE/SNPRe1ceroHEjg8ditm1XMXCbBvBT3DTH8BeWovyGukE2UqTuw1o0h5GQZsy1PqBUKdD8InHKXfb+JuF7ifDLXgedmNZKlosSETxG9lkU6DzjwiVlcP3nvZNwI3JOYyZG+/AsDDULQI5nJdipllvPI3MEvoB2ImryJJab0ELju2oA1Uf2q0BHYD1JLqP3UYev8DXn/d0fGxA2xls6BvAN6fXojU7zYTOVraPhR4LQKs1U19z1LmbTeNQ0u7AnY+1OFVxU1E0lex0mTcFxE26o6WpHFDSe1bS7nFZezQfhZ0NsRi2upS22oV+vP+g8OH69Lve/ga2Ll/CueJ5yYUrPsHllaJhGkxZXRSZ6vJ+I6ef8DHNju1CxiaEQAAAAASUVORK5CYII=)](https://bit.ly/Team_Five)


## Applications
Here are some animations which we are planning to build. 
### Mesh Network - Simple application
![Mesh Network Plan](docs/images/Application-Mesh-Simple-Working.gif)
### Mesh Network - Vehicle Traffic
![Mesh Network Application](docs/images/Application-Mesh-GPS-Assist.gif)

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Watson IOT](https://cloud.ibm.com/catalog?search=IOT#search_results) - The Internet of things platform
- [IBM Cloud Foundry](https://cloud.ibm.com/catalog?search=cloud%20foundry#search_results) - The Application Containers


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

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
