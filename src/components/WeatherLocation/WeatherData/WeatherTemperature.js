import React from 'react';
import WeatherIcons from 'react-weathericons';
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
} from './../../../constants/weathers'

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [FOG]: "day-fog",
    [RAIN]: "day-rain",
    [SNOW]: "snow",
    [WINDY]: "windy"
}

const getWeatherState = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if(icon)
         return <WeatherIcons className="wicon"  name={icon} size={sizeIcon}></WeatherIcons>
    else 
        return <WeatherIcons className="wicon" name={"rain"} size={sizeIcon}></WeatherIcons>

}

const WeatherTemperature = ( { temperature , weatherState } ) => (
    <div className="weatherTemperatureCont">
        {
            getWeatherState(weatherState)
        }
       <span className="temperature" >{ `${temperature}`}</span>
       <span className="temperatureType" >{`C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired, 
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;