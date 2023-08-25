import "./App.css";
import ActivityForm from "./component/Form/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activity, setActivity] = useState("");

  function handleAddActivity(newActivity) {
    setActivity.map([...activity, { id: uid(), ...newActivity }]);
  }
  return (
    <>
      <ActivityForm onAddAvtivity={handleAddActivity} />
    </>
  );
}

export default App;
