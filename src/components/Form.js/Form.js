import styles from './Form.css'
import { useState } from "react";

function Form(props) {
    const [state, setState] = useState({
        requests: [{ name: "Your Name", request: "VPN Issues", description: ""}],
        name: "Your Name",
        request: "VPN",
        description: "System not connecting",
      });
      

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }

    function handleChange(e) {
        setState(function(prevState) {
            return {
                ...prevState, 
                requestTypes: e.target.value,
            }
        });
    }

  return (
    <div className="Form">
      {state.requests.map((s, i) => (
        <article key={i}>
          <div>{s.requestType}</div> <div>{s.description}</div> 
          </article>
      ))}
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <span>Employee Name</span>
           <input className="Name" value={state.Name}  onChange={handleChange} placeholder="Your Name"/>
           <span>Request Type</span>
           <select className="RequestType" value={state.requestType}onChange={handleChange} onChange={handleChange}>
               <option value="VPN">VPN</option>
               <option value="Mitel SoftPhone">Mitel SoftPhone</option>
               <option value="Login Access">Login Access</option>
               <option value="Payroll">Payroll</option>
           </select>
           <span>Description</span>
           <input className="Description" value={state.Description} onChange={handleChange} placeholder="System not connecting"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
  
    </div>
  );
}

export default Form;