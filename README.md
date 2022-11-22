# your-comfort-zone

This project is done within the Wild Code School 20 week Full Stack Web Development Training Programme.

The aim of the project is to create a website that allows users to find a place to get informed, but without the overly negative part of the news. Basically a digital space to get the news without the blues. Therefore we want to filter the news from the Guardian (through Newscatcher API https://newscatcherapi.com/ ) to only present positive news.

The news are accompanied by different fun elements, which are pulled in using more APIs. These aim to support the relaxing characteristic of our project. 

# Demo 
Link to the website through Netlify: 

# Feature list: 
* Designed welcome section using parallax scroll elements
* fitlered newssection showing news articles 
* topic selection buttons to switch topics of the displayed news 
* news open in Modal on click for more information
* infinite scrolling of news (following https://www.youtube.com/watch?v=NZKUirTtxcg)
* Multi-page integration using React Router Dom 
* Nasas photo of the day integration, every day there is a new image coming from the NASA API
* Fox photo integration, on click it changes using the Fox API
* Dall-E2 integration, on input it generates an image using the openAPI
* navigation - links to Home, About using NavLink (React Router Dom) - links to Nasa, Fox and Dall-E2 using HashLink (React Router Hash)
* About-us page

# Installation
1. clone repository 
2. run ```bash
npm install
```

# Build with
* React

## APIs used
* Newscatcher API - Search multi-language worldwide news articles published online with NewsCatcher's News API - https://newscatcherapi.com/ 
* NASA API - Astronomy Picture of The Day. One of the most popular API from NASA that shows different space pictures every day. - https://apod.nasa.gov/apod/astropix.html
* Fox API - The RandomFox API provides access to random images of a fox or group of foxes. - https://randomfox.ca
* DALL·E2 API - Starting November 2022, developers are now able to build apps with the AI Image Creator DALL·E - https://openai.com/dall-e-2

## Packages used
* axios: https://www.npmjs.com/package/axios
* openAI: https://openai.com/api/
* React Router Dom: https://www.npmjs.com/package/react-router-dom/v/5.2.0
* React Router Hash: https://www.npmjs.com/package/react-router-hash-link 
* React Scroll Parallax: https://react-scroll-parallax.damnthat.tv/docs/intro

# Acknowledgments
## Videos that helped building the page 
Infinite Scrolling With React - Tutorial - by Web Dev Simplified - https://www.youtube.com/watch?v=NZKUirTtxcg 

## Other Ressources
* loading indecator from: http://ajaxloadingimages.net/svg
