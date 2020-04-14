
# Stock Info

### [Live Link](https://mjguggen.github.io/Stock-Info/)


# Description
The Stock Info web application allows you to view and track information about publically traded companies. 

## How was it built?
- The text input calls a function that fetches data from two APIs and set states. The news section was created using a map function on the JSON data to create a seperate section for each article. 
- Error handling for the API calls was done by checking if the function returned a valid status code
- Dark mode was created by having a “mode” state that is toggled when the dark mode button is clicked. This is passed then passed on to HTML elements to update their CSS. 
## Built With
- React
- Javascript
- HTML
- CSS
- Sass/SCSS
- World Trading Data and NewsAPI APIs
- TradingView widgets
## How I would improve this project
- Add ability to save recently searched stock tickers
- Add ability to search by company name, not only ticker
- Add transitions to the nav bar
- Use Chart.js library for graphing instead of widgets to add additional customization
- Use CSSinJS for dark mode transitions

**Created by Mike Guggenbuehl**