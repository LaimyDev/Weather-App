import React from "react";
import "./App.css";
import Titles from "./components/Titles";
import WeatherForm from "./components/Form";
import Weather from "./components/Weather";

//set API key retrieved from Open Weather website
const API_KEY = "1ebd804b908b1c4c0bef3c9d4834f7e3";

//state class with initial state
//App class is exported
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      city: null,
      country: null,
      humidity: null,
      description: null,
      error: null
    };
  }
  //using arrow function so 'this' can be used independently
  getWeather = async e => {
    //prevent page from reloading
    e.preventDefault();
    //get city from form input named city
    try {const city = e.target.elements.city.value;
    //get country from input country
    const country = e.target.elements.country.value;
    //use await function to fetch api for specific city and country while rest of the page loads
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    //convert API call to JSON
    const data = await api_call.json();
    console.log(data);
    //only of city and country are entered then run code
    if (city && country) {
      //change state initial state to new data retrieved
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    //if no city or country input then alert "error"
    else {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: "Please enter the location."
      });
    }}
    //threw a catch error which displays message "city not found" when incorrect input inserted
    catch(err) {
      this.setState({
        temperature: null,
        city: null,
        country: null,
        humidity: null,
        description: null,
        error: "City not found."
      });
    }
  };
  render() {
    return (
      //pass state data down to props in child components
      <div className="App">
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
  integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
  crossorigin="anonymous"
/>
        <Titles></Titles>
        <WeatherForm
          getWeather={this.getWeather}
          className="form"
        ></WeatherForm>
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        ></Weather>
      </div>
    );
  }
}

export default App;
