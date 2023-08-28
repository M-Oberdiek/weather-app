import "./App.css";
import ActivityForm from "./component/Form/Form.js";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./component/List/List.js";
import { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState();
  const [activities, setActivities] = useLocalStorageState("activitiy", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(6), ...newActivity }]);
  }

  //const isGoodWeather = false;
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://example-apis.vercel.app/api/weather/europe"
        );
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    const weatherInterval = setInterval(fetchWeather, 5000);

    fetchWeather();
    return () => clearInterval(weatherInterval);
  }, []);

  const filteredActivities = activities.filter(
    (activity) => activity.goodWeather === weather.isGoodWeather
  );

  return (
    <>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
      />
      <hr />
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
