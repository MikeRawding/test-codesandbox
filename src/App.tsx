import "./styles.css";
import schools from "./schools";

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ul style={{ listStyleType: "none" }}>
        {schools.slice(0, 5).map((school) => (
          <li style={{ border: "1px solid black", margin: "2px" }}>
            <strong>{school.name}</strong>
            <br />
            <br />
            {school.type} - {school.location}
            <br />
            {school.description.substring(0, 100)}...
          </li>
        ))}
      </ul>
      <button>Left</button>
      <button>Right</button>
    </div>
  );
}
