import { useState } from "react";
import { nanoid } from "nanoid";

export default function ActivityForm({ onAddActivity }) {
  const [activity, setActivity] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setActivity([...activity, { name: inputValue, checked, id: nanoid(6) }]);
    setInputValue("");
  };
  onAddActivity();

  return (
    <>
      <h3>Add new Activity:</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleFormSubmit} />

        <label htmlFor="goodWeather">Good weather activity:</label>
        <input type="checkbox" id="goodWeather" onChange={handleFormSubmit} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
