import {useState} from "react";

export default function ActivityForm() {
const [activity, setActivity] = useState()

    return (
<>
        <h3>Add new Activity:</h3>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onClick={} />

        <label htmlFor="goodWeather">Good weather activity:</label>
        <input type="checkbox" id="goodWeather" />

        <button type="submit">Submit</button>
 
  </>  )
}
