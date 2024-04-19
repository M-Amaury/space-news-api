import React, {useEffect, useState} from "react";
import axios from "axios";
import './SpaceFlight.css';

const SpaceFlight = () => {
    const [flights, setFlights] = useState([])
  
      // SpaceX launches: https:/api.spacexdata.com/v2/launches
    useEffect(() => {
        //Make a Get request to the SpaceX API
        axios
          .get("https://api.spacexdata.com/v2/launches")
          .then((response) => {
            setFlights(response.data)
        })
        .catch((error) => {
          console.log("Error while fetching from the SpaceX API", error)
        })
    }, [])
  
    return (
        <div className="space-flight-container"> {/* Added a container div */}
          {flights.map((flight) => (
            <div key={flight.flight_number} className="flight-item"> {/* Added a container div */}
              <img
                src={flight.links.mission_patch_small}
                alt={flight.mission_name}
                className="flight-image"
              />
              <div className="flight-details">
                <h2>{flight.mission_name}</h2>
                <p>Flight Number: {flight.flight_number}</p>
                <p>Launch date: {flight.launch_date_utc}</p>
                <p>Launch Year: {flight.launch_year}</p>
                <p>Flight Details: {flight.details}</p>
                <a href={flight.links.article_link}>Read more details about the launch</a>
              </div>
            </div>
          ))}
        </div>
      );
    };
    
  export default SpaceFlight;
  