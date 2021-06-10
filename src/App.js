import './App.css';
import ServiceRequest from "./components/ServiceRequest/ServiceRequest";


function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY-SDK</h1>
      </header>
      <ServiceRequest />
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Employee Name</p>
           <input name="name" />
           <p>Request Type</p>
           <input RequestType="RequestType" />
           <p>Description</p>
           <input Description="Description" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
