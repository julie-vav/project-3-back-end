import styles from './Form.css'

function Form(props) {
    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <span>Employee Name</span>
           <input className="Name" placeholder="Your Name"/>
           <span>Request Type</span>
           <select className="RequestType">
               <option value="VPN">VPN</option>
               <option value="Mitel SoftPhone">Mitel SoftPhone</option>
               <option value="Login Access">Login Access</option>
               <option value="Payroll">Payroll</option>
           </select>
           <span>Description</span>
           <input className="Description" placeholder="System not connecting"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;