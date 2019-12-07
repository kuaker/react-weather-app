import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTempature from './WeatherTemperature';
import PropTypes from 'prop-types';
import './style.css';

import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
} from '../../../constants/weathers';

const WeatherData = ({ data:{temperature, weatherState, humidity, wind} }) => {

   return <div  className="weatherDataCont" >
        <WeatherTempature 
            temperature={temperature} 
            weatherState={weatherState} 
         />

        <WeatherExtraInfo humidity={humidity} wind={wind} />

    </div>
};

WeatherData.protoTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherData;