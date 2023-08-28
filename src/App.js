import "./App.css";
import ActivityForm from "./component/Form/Form.js";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./component/List/List.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activitiy", {
    defaultValue: [],
  });

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(6), ...newActivity }]);
  }

  const isGoodWeather = true;

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather !== isGoodWeather
  );

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={isGoodWeather} />
      <hr />
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
