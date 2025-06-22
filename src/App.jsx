import { useState } from "react";
import "./App.css";

function App() {
  const [flightId, setFlightId] = useState("SWA123");
  const [newStatus, setNewStatus] = useState("DELAYED");

  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setApiResponse(null);
    setError(null);

    const apiUrl =
      "https://3r0nd76tc8.execute-api.us-east-1.amazonaws.com/prod/update-status";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flightId: flightId,
          newStatus: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error(
          "Network response was not ok. Is the flightId correct?"
        );
      }

      const data = await response.json();
      setApiResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <header>
        <h1>Flight Status Broadcaster</h1>
        <p>Use this form to update the status of a flight</p>
      </header>

      <form className="update-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="flightId">Flight ID</label>
          <input
            type="text"
            id="flightId"
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

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Flight Status"}
        </button>
      </form>

      <div className="response-area">
        <h2>API Response</h2>
        {isLoading && <p>Loading...</p>}
        {error && <div className="error-message">Error: {error}</div>}
        {apiResponse && <pre>{JSON.stringify(apiResponse, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
