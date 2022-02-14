import './item.css';
import React from "react"

import SwipeToDelete from 'react-swipe-to-delete-component';
// Import styles of the react-swipe-to-delete-component
import 'react-swipe-to-delete-component/dist/swipe-to-delete.css';

export default function Item(props) {


const itemDiv = document.querySelectorAll(".outer-div");

function deleteItemBtn(event){
	const targetDiv = event.currentTarget;
	targetDiv.nextElementSibling.classList.toggle ('hide');
}

function DeleteBtn(){
	console.log("Swiped",props.id)
	// fetch('api/validations/'+props.id, { method: 'DELETE' })

	props.setvalidation(preData=>{
		return preData.map((c) => {
			if(c && c.id != props.id){
				return c
			}
		})
	})

	props.setTemp(preData=>{
		return preData.map((c) => {
			if(c && c.id != props.id){
				return c
			}
		})
	})
}

  return (
	<SwipeToDelete key={props.id} onDelete={DeleteBtn} >
		<div className="outer-div">
			<div className="item-div">
				<h1 className="item-image">1</h1>
				<div className="item-detail-div">
					<p>{props.keyNumber}</p>
					<p>{props.detail}</p>
				</div>
				<div className="item-tag">
					<p>{props.amount_sale}</p>
				</div>
			</div>
			<button className="deleteBtn hide">Delete</button>
		</div>
	</SwipeToDelete>
  );
}