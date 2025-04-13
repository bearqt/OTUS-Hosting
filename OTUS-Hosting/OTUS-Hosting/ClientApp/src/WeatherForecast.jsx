import React, { useEffect, useState } from 'react';

const WeatherForecast = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('/WeatherForecast')
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather Forecast</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature (°C)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.map((forecast, index) => (
                        <tr key={index}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}°C</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WeatherForecast;
