import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Flight Status Broadcaster</h1>
        <p>Use this form to update the status of a flight</p>
      </header>

      <form className="update-form">
        <div className="form-group">
          <label htmlFor="flightId">Flight ID</label>
          <input type="text" is="flightId" placeholder="e.g., SWA123" />
        </div>

        <div className="form-group">
          <label htmlFor="newStatus">New Status</label>
          <select id="newStatus">
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
