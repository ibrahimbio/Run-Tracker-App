import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



const RecordRun = () => {

    const [selectedDate, setSelectedDate] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');

    //Handler function to update distance state when input changes
    const handleDistanceChange = (event) => {
        setDistance(event.target.value)
    };

    //Handler function to update time state when input changes

    const handleTimeChange = (event) => {
      setTime(event.target.value)
    };

    // Handle function to handle form submission
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

        // Log the data to the console upon successfull submission

        console.log(data);
      })
    }


  return (
    <div>
    <h1> Add a new run you absolute champion.</h1>
    <br />
    <h2>When did you achieve this incredible feat?</h2>
    {/* DatePicker component for selecting the date */}
    < DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}/>
    <br />
    <h2>How many kilometers did you complete like it ain't no thang?</h2>
    {/* Input field for entering the distance */}
    <input type="number" id='time' onChange={handleTimeChange} value={time} />
    <br />
    <br />
    <br />
    {/* Buttion to trigger the form submission  */}
    <button onClick={handleSubmit}>Save</button>

    </div>
  )
}

export default RecordRun
