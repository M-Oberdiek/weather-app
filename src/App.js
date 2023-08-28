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
        console.log(data);
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
    (activity) => activity.goodWeather === weather?.isGoodWeather
  );

  const handleDeleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <>
      <h2>
        {weather
          ? `${weather.condition} ${weather.temperature} °C`
          : "Loading Weather..."}
      </h2>
      <List
        onDeleteActivity={handleDeleteActivity}
        activities={filteredActivities}
        isGoodWeather={weather?.isGoodWeather}
      />
      <hr />
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
