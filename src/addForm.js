import './addForm.css';
import React from "react";
import CoastItems from "./coastItems";
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {TextField,MenuItem,FormControl,Select,InputLabel} from '@material-ui/core';
export default function AddForm(props) {

    function handleChange(event) {
    props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
        console.log(props.formData);
    }

    
    const location = useLocation()
    const {fromAddComponents} = location.state

  return (
    <div className="addform">
		<form>

    <TextField id="standard-basic" label="Reference" type="text" onChange={handleChange} name="reference" value={props.formData.reference} variant="standard" />

    <TextField id="standard-basic" label="Make and Made" type="text" onChange={handleChange} name="makeNmade" value={props.formData.makeNmade} variant="standard" />

    <TextField id="standard-basic" label="Purchase Amount" type="number" onChange={handleChange} name="purchase" value={props.formData.purchase} variant="standard" />

    <TextField id="standard-basic" label="Selling Amount" type="number" onChange={handleChange} name="selling" value={props.formData.selling} variant="standard" />

    <FormControl className='matrialDropDownForm' variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={props.formData.type}
          onChange={handleChange}
          label="Type"
          name = "type"
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
          onChange={handleChange}
          label="Risk"
          name = "risk"
        >
          <MenuItem value={1}>2</MenuItem>
          <MenuItem value={2}>1</MenuItem>
        </Select>
    </FormControl>

    
    {fromAddComponents && <CoastItems components={props.components} setTotalAmount = {props.setTotalAmount} /> }
    <Link to="/addComponents"><input className='submitBtn' type="button" value="ADD COSTES"></input></Link>

		</form>
    </div>
  );
}