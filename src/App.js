import { useState } from "react";
import './App.css';
import ServiceRequest from "./components/ServiceRequest/ServiceRequest";
import Form from "./components/Form/Form";

export default function App() {
  const [state, setState] = useState({
    requestTypes: [{ requestType: "VPN Issues", description: "System not connecting"}]
  });
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

