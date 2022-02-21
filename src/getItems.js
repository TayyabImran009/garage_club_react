import Data from './carsData'
import Item from './item'
import React from "react"

export default function GetItems(props) {

    const [validation, setvalidation] = React.useState([]);
    const [temp, setTemp] = React.useState(validation);

    React.useEffect(function() {
        console.log("Effect ran2")
        fetch("api/validations/")
            .then(res => res.json())
            .then(data => setTemp(data))
    }, [])

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("api/validations/")
            .then(res => res.json())
            .then(data => setvalidation(data))
    }, [])

    if(props.sorting == "margin"){
        temp.sort(function(a, b) {
            return b.margin - a.margin;
          });
    }else if(props.sorting == "price"){
        temp.sort(function(a, b) {
            return b.amount_purchase - a.amount_purchase;
          });
    }else{
        temp.sort(function(a, b) {
            return b.created_at - a.created_at;
          });
    }

    const itemObj = temp.map(i => {
        if(i){
            if(i.reference!=""){
                return <Item keyNumber={i.reference} detail={i.model} key={i.id} amount_purchase={i.amount_purchase} amount_sale={i.amount_sale} id={i.id} risk={i.risk} margin={i.margin} setvalidation={setvalidation} validation={validation} setTemp={setTemp} type={i.type} margin={i.margin}/>
            }
        }
    })
    function handleChange(event) {
        const m = event.target.value;
        let hold = []
        if(m==""){
            setTemp(validation);
        }else{
            validation.map((c) => {
                if(c && c.model.includes(m)){
                    hold.push(c);
                }
            })
            setTemp(hold);
        }
    }
    
    return (
        <div>
            <div className="header-div">
                <input className="header-input" type="text" placeholder="Search by car" onChange={handleChange}/>
            </div>
            {itemObj}
        </div>
    )
}