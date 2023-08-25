import "./App.css";
import ActivityForm from "./component/Form/Form.js";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState("");
  console.log(activities);

  function handleAddActivity(newActivity) {
    setActivities([...activities, { id: uid(6), ...newActivity }]);
  }
  return (
    <>
      <ActivityForm onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
