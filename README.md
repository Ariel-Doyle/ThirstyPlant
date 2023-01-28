# _Thirsty Plant_

#### By _**Ariel Doyle, Tanya Prado, Anahi Sulikey, Emil Anton, and Ryan Krueger**_

#### _This is the business logic for an application as practice for writing code, working with HTML, CSS, Web APIs, Test Driven Development, JavaScript looping and arrays, JavaScript classes, object-oriented JavaScript, asynchronous JavaScript, and API calls._

## Technologies Used

- _HTML_
- _VS Code Editor_
- _CSS_
- _JavaScript_
- _Jest_
- _eslint_
- _babel_
- _webpack_
- _node package manager(npm)_
- _JSON_
- _Web APIs_
- _PlantNet API_
- _Rapid API:HousePlant API_

## Description

_This is an application for plant identification and care tips. A user can either upload a local image of a plant or enter a url (jpg or png required) to receive identification for the entered plant. With plant identification in hand, they can then enter in the common name to get water, soil, lighting, and pest conditions._

_This is JavaScript business logic as practice for writing code in line with lessons taught by [Epicodus](https://www.epicodus.com). This logic can serve as the framework for starting your own code writing journey as regards working with basic object-oriented JavaScript, JavaScript classes, JSON, and Web APIs. If you would like to follow in these lessons, please visit [Learn How To Program](https://www.learnhowtoprogram.com/intermediate-javascript-part-time)._

## Setup/Installation Requirements

- _You will require Node.js version 16.14.0 as well as node package manager (npm) version 8.3.1 in order to be compatible with the pinned versions of webpack, eslint, babel, and others. Please see [Learn How To Program: Installing node.js](https://www.learnhowtoprogram.com/intermediate-javascript/setting-up-javascript/installing-node-js) and [Learn How To Program: Test Driven Development, Lessons 1-20](https://www.learnhowtoprogram.com/intermediate-javascript-part-time/test-driven-development/test-driven-development-and-environments-with-javascript-objectives) for install information and walk-through._
-  _Access [Github](https://github.com/)._
- _Clone this repository, [ThirstyPlant](https://github.com/Ariel-Doyle/ThirstyPlant.git), to your desktop._
- _Open your command line and type >**npm install**< in order to install the packages and package versions listed in the 'package.json' file._
- _You will require an API Key in order to use this application, please see [PlantNet](https://my.plantnet.org/) and [HousePlants](https://rapidapi.com/rosoemawd/api/house-plants) to sign up for keys. Create a >**.env**< file and input your API Key into the >**.env**<, then the url requests will have access to your API key. (More information about creating and securely storing API keys can be found [here](https://www.learnhowtoprogram.com/intermediate-javascript-part-time/asynchrony-and-apis/protecting-api-keys))._ 
- _After the install, on your command line type >**npm run build**<._
- _Then, on your command line, type >**npm run start**< to open the page in your local browser._
- _Navigate to the top level of the directory, use the files within the 'js' folder to view the Business Logic, and the 'index.js' file to view the User Interface Logic._

## Known Bugs

- _Currently, the entered plant name for care information must match the request response for 'Common Name', otherwise the plant will not be pulled up. The 'Common Name' is often capitalized for the first name, but not always, making the response inconsistent._
- _As of this writing, the images pulled up for the plant care info are not displaying._

## License

_[MIT](https://choosealicense.com/licenses/mit/)_

Copyright (c) _2022_ _Ariel Doyle_ 

## Resources and Acknowledgments 
