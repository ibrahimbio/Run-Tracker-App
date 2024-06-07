import React, { useEffect, useState } from 'react'; // Import necessary React hooks
import DatePicker from "react-datepicker"; // Import DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import Request from '../helpers/request'; // Import custom Request helper

const RecordRun = () => {

    // State for storing the selected date, defaulting to the current date
    const [selectedDate, setSelectedDate] = useState(Date.now());
    // State for storing the distance input by the user
    const [distance, setDistance] = useState('');
    // State for storing the time input by the user
    const [time, setTime] = useState('');

    // Handler function to update distance state when input changes
    const handleDistanceChange = (event) => {
        setDistance(event.target.value);
    }

    // Handler function to update time state when input changes
    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    // Handler function to handle form submission
    const handleSubmit = () => {
        // Prepare the data to be sent in the POST request
        let data = {
            "date": selectedDate,
            "distance": distance,
            "time": time
        }
        // Create a new instance of the Request helper
        const request = new Request();
        // Send a POST request to the server with the data
        request.post("http://localhost:9000/api/runs", data)
        .then(() => {
            // Log the data to the console upon successful submission
            console.log(data);
        })
    }

    return(
        <div>
            <h1>Add a new run you absolute champion.</h1>
            <br/>
            <h2>When did you achieve this incredible feat?</h2>
            {/* DatePicker component for selecting the date */}
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
            <br/>
            <h2>How many kilometres did you complete like it ain't no thang?</h2>
            {/* Input field for entering the distance */}
            <input type="number" id="dist" onChange={handleDistanceChange} value={distance}/>
            <br/>
            <h2>How long did this incredible achievement take?</h2>
            {/* Input field for entering the time */}
            <input type="number" id="time" onChange={handleTimeChange} value={time}/>
            <br/>
            <br/>
            <br/>
            {/* Button to trigger the form submission */}
            <button onClick={handleSubmit}>Save</button>
        </div>
    )
}

export default RecordRun; // Export the RecordRun component as default
