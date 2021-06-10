import styles from './Form.css'

function Form(props) {
    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <fieldset>
         <label>
           <p>Employee Name</p>
           <input name="name" placeholder="Your Name"/>
           <p>Request Type</p>
           <input RequestType="RequestType" placeholder="VPN Issues" />
           <p>Description</p>
           <input Description="Description" placeholder="System not connecting"/>
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;