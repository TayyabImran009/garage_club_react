import './addForm.css';
import React from "react";
import CoastItems from "./coastItems";
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
export default function AddForm(props) {

    function handleChange(event) {
    props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    
    const location = useLocation()
    const {fromAddComponents} = location.state

  return (
    <div className="addform">
		<form>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Company:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Company" type="text" onChange={handleChange} name="company" value={props.formData.company}></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Model:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Model" type="text" onChange={handleChange} name="model" value={props.formData.model}></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Made:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Made" type="text" onChange={handleChange} name="made" value={props.formData.made}></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Car Price:</p>
       
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Price" type="text" onChange={handleChange} name="price" value={props.formData.price}></input>
      </div>
    </div>
    {fromAddComponents && <CoastItems components={props.components} setTotalAmount = {props.setTotalAmount} /> }
    <Link to="/addComponents"><input className='submitBtn' type="button" value="ADD COSTES"></input></Link>

		</form>
    </div>
  );
}