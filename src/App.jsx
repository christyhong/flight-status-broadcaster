import { useState } from "react";
import "./App.css";

function App() {
  const [flightId, setFlightId] = useState("");
  const [newStatus, setNewStatus] = useState("ON TIME");

  const [apiResponse, setApiResponse] = useState("null");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="container">
      <header>
        <h1>Flight Status Broadcaster</h1>
        <p>Use this form to update the status of a flight</p>
      </header>

      <form className="update-form">
        <div className="form-group">
          <label htmlFor="flightId">Flight ID</label>
          <input
            type="text"
            is="flightId"
            placeholder="e.g., SWA123"
            value={flightId}
            onChange={(e) => setFlightId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="newStatus">New Status</label>
          <select
            id="newStatus"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="ON TIME">ON TIME</option>
            <option value="DELAYED">DELAYED</option>
            <option value="GROUNDED">GROUNDED</option>
            <option value="IN FLIGHT">IN FLIGHT</option>
            <option value="LANDED">LANDED</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Update Flight Status
        </button>
      </form>

      <div className="response-area">
        <h2>API Response</h2>
        <pre></pre>
      </div>
    </div>
  );
}

export default App;
