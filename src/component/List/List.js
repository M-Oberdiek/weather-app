export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  const liStyle = {
    backgroundImage: isGoodWeather
      ? "linear-gradient(to right, white, yellow"
      : "linear-gradient(to right, white, blue",
  };
  return (
    <>
      <h3>
        {isGoodWeather
          ? "The weather is awesome! Go outside and:"
          : "Bad weather outside! Here is what you can do now:"}
      </h3>
      <ul>
        {activities.map((activity) => {
          return (
            <li style={liStyle} key={activity.id}>
              {activity.name}{" "}
              <button
                className="deleteButton"
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
