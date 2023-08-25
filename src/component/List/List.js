export default function List({ activities }) {
  return (
    <>
      <ul>
        <li key={activities.id}>{activities.name}</li>
      </ul>
    </>
  );
}
