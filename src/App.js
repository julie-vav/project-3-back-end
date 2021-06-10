import './App.css';
import ServiceRequest from "./components/ServiceRequest/ServiceRequest";
import Form from "./components/Form/Form";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>MY-SDK</h1>
      </header>
      <ServiceRequest />
      <Form />
    </div>
  );
}

export default App;
