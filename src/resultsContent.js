import './addForm.css';
import './resultsContent.css';
import './resultHeader.css';
import React from "react";
import CoastItems from "./coastItems";
import {TextField,MenuItem,FormControl,Select,InputLabel} from '@material-ui/core';
export default function ResultsContent(props) {

  const margin = (props.formData.selling - props.formData.purchase) - props.totalAmount;
  return (
	  <>
	<div className="resultHeader-div">

      {margin > 0 ? 
      <div className="resultHeaderIner-div"> 
        <i className="fa fa-check" aria-hidden="true"></i>
          <div className="resultLabel">
            <p>{props.formData.company}</p>
            <h1 className="resultHeader-heading">${margin}</h1>
          </div>
      </div>
      :
      <div className="resultHeaderIner-div-pink"> 
        <i className="fa fa-x" aria-hidden="true"></i>
          <div className="resultLabel">
            <p>{props.formData.company}</p>
            <h1 className="resultHeader-heading">${margin}</h1>
          </div>
      </div>
      }
    </div>
    <div className="addform">

    
    <TextField id="standard-basic" label="Reference" type="text"  name="reference" value={props.formData.reference} variant="standard" disabled/>

    <TextField id="standard-basic" label="Make and Made" type="text"  name="makeNmade" value={props.formData.makeNmade} variant="standard" disabled/>

    <div className="inputWithIcion">
      <TextField id="standard-basic" label="Purchase Amount" type="number"  name="purchase" value={props.formData.purchase} variant="standard" disabled/>
      {props.inputIcion.purchase ? 
      <i className="fa fa-check inputIcion inputTcionChecked" id="purchaseIcion" aria-hidden="true"></i> :
      <i className="fa fa-check inputIcion" id="purchaseIcion" aria-hidden="true"></i>
      }
    </div>

    <div className="inputWithIcion">
      <TextField id="standard-basic" label="Selling Amount" type="number"  name="selling" value={props.formData.selling} variant="standard" disabled/>
      {props.inputIcion.sell ?
        <i className="fa fa-check inputIcion inputTcionChecked" id="sellIcion" aria-hidden="true"></i>:
        <i className="fa fa-check inputIcion" id="sellIcion" aria-hidden="true"></i>
      }
    </div>

    <FormControl className='matrialDropDownForm' variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel >
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.formData.type}
          label="Type"
          name = "type"
          disabled
          >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B">B</MenuItem>
        </Select>
    </FormControl>


    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Risk</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.formData.risk}
          label="Risk"
          name = "risk"
          disabled
        >
          <MenuItem value={1}>2</MenuItem>
          <MenuItem value={2}>1</MenuItem>
        </Select>
    </FormControl>
    <CoastItems components={props.components} setTotalAmount={props.setTotalAmount}/>
    </div>
	</>
  );
}