
import { nanoid } from "nanoid";
import { useRef } from "react";

export default function ActivityForm({ onAddActivity }) {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setActivity([...activity, { name: inputValue, checked, id: nanoid(6) }]);
    setInputValue("");
    
  };
  onAddActivity();

  const App = () => {
    const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <h3>Add new Activity:</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input ref={ref} type="text" id="name" onChange={handleFormSubmit} />

        <label htmlFor="goodWeather">Good weather activity:</label>
        <input type="checkbox" id="goodWeather" onChange={handleFormSubmit} />

        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}
