export default function ActivityForm({ onAddActivity }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {
      name: formElements.name.value,
      goodWeather: formElements.goodWeather.checked,
    };
    onAddActivity(data);
    event.target.reset();
    formElements.name.focus();
  }

  return (
    <>
      <h3>Add new Activity:</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="goodWeather">Good weather activity:</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
