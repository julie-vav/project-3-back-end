import './Form.css'
import { useState } from "react";

function Form(props) {
    const [state, setState] = useState({
        requests: [{ name: "", request: "", description: ""}],
        newRequest: {
          name: "",
          request: "VPN",
          description: "System not connecting",
        }
      });
      

    function addRequest(e) {
        e.preventDefault();
        alert('You have submitted the form.')
        setState({
          requests: [...state.requests, state.newRequest],
          newRequest: {
            name: "",
            request: "VPN",
            description: "",
          }
        });
      }

    function handleChange(e) {
        setState(prevState => ({
                requests: prevState.requests, 
                newRequest: {
                  ...prevState.newRequest,
                  [e.target.name]: e.target.value
                }
        }));
    }

  return (
    <div className="Form">
      {state.requests.map((s, i) => (
        <article key={i}>
          <div>{s.request}</div> <div>{s.description}</div> 
          </article>
      ))}
      <form onSubmit={addRequest}>
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