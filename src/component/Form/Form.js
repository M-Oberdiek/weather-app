import {useState} from "react";
import { nanoid } from "nanoid";

export default function ActivityForm() {
const [activity, setActivity] = useState("")

    return (
<>
        <h3>Add new Activity:</h3>
<form>
        onAddActivity={(event) => {
          event.preventDefault();
          setActivity([...activity, { name: inputValue, checked, id: nanoid(6) }]);
          // Clears input after form submit.
          setInputValue("");
        }}


        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onClick={} />

        <label htmlFor="goodWeather">Good weather activity:</label>
        <input type="checkbox" id="goodWeather" />

        <button type="submit">Submit</button>
 
  </form> 
   </>)
}
