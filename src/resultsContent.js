import './addForm.css';
import './resultHeader.css';
import React from "react";
import CoastItems from "./coastItems";
export default function ResultsContent(props) {
  return (
	  <>
	<div className="resultHeader-div">
      <div className="resultHeaderIner-div">
        <i className="fa fa-check" aria-hidden="true"></i>
        <div className="resultLabel">
          <p>{props.formData.company}</p>
          <h1 className="resultHeader-heading">${props.totalAmount}</h1>
        </div>
      </div>
    </div>

    <div className="addform">

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Company:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Company" type="text"  value={props.formData.company} disabled></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Model:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Model" type="text"  value={props.formData.model} disabled></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Made:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Made" type="text"  value={props.formData.made} disabled></input>
      </div>
    </div>

    <div className="inputFieldDiv">
      <div className="inputFieldLable">
        <p>Car Price:</p>
      </div>
      <div className="inputFieldInput">
        <input placeholder="Enter Price" type="text"  value={props.formData.price} disabled></input>
      </div>
    </div>
    <CoastItems components={props.components} setTotalAmount={props.setTotalAmount}/>
    </div>
	</>
  );
}