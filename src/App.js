import "./App.css";
import ActivityForm from "./component/Form/Form.js";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import List from "./component/List/List.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: 0,
  });
  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(6), ...newActivity }]);
  }
  return (
    <>
      <List activities={activities} />
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
