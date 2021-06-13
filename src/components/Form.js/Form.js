import styles from './Form.css'
import { useState } from "react";

function Form(props) {
    const [state, setState] = useState({
        requests: [{ name: "Your Name", request: "VPN Issues", description: ""}],
        newRequest: {
          name: "Your Name",
          request: "VPN",
          description: "System not connecting",
        }
      });
      

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }

    function handleChange(e) {
        setState(function(prevState) {
            return {
                requests: prevState.requests, 
                newRequest: {
                  ...prevState.newRequest,
                  [e.target.name]: e.target.value
                }
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
           <input name="name" value={state.newRequest.name}  onChange={handleChange} placeholder="Your Name"/>
           <span>Request Type</span>
           <select name="request" value={state.newRequest.request}onChange={handleChange} onChange={handleChange}>
               <option value="VPN">VPN</option>
               <option value="Mitel SoftPhone">Mitel SoftPhone</option>
               <option value="Login Access">Login Access</option>
               <option value="Payroll">Payroll</option>
           </select>
           <span>Description</span>
           <input name="description" value={state.newRequest.description} onChange={handleChange} placeholder="System not connecting"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
  
    </div>
  );
}

export default Form;