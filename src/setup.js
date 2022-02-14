import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Nav from './nav';
import Nav2 from './nav2';
import Header from './header';
import GetItems from './getItems';
import AddForm from './addForm';
import AddComponents from './addComponents';
import Data from './componentsData';
import ResultNav from './resultNav';
import ResultsContent from './resultsContent';
import React from "react"
export default function Setup() {
	const [components, setComponents] = React.useState([]);
	React.useEffect(function() {
		console.log("Featch components");
        fetch("api/costs/")
            .then(res => res.json())
            .then(data =>{
				let temp = [];
				console.log("data",data);
				data.map(i => {
					let temp2 = {"id":i.id, "quantity":0, "name":i.description, "prince":i.amount};
					temp.push(temp2);
				})
				console.log(temp);
				setComponents(temp);
			})
    }, [])
	const [formData, setFormData] = React.useState({reference: "", makeNmade: "", purchase: "", selling: "", type:"", risk:""});
	const [totalAmount, setTotalAmount] = React.useState(0);
	return (
		<Router>
			<Switch>
				<Route exact path="/" >
					<Nav url="/" />
					<Header title="GET YOUR CAR" />
					<GetItems />
				</Route>

				<Route exact path="/add" >
					<Nav2 url="/add" />
					<Header title="ADD DATA" />
					<AddForm components={components} setComponents={setComponents} formData={formData} setFormData={setFormData} setTotalAmount={setTotalAmount}/>
				</Route>

				<Route exact path="/addComponents" >
					<Nav2 url="/addComponents"/>
					<Header title="ADD Components" />
					<AddComponents components={components} setComponents={setComponents}/>
				</Route>

				<Route exact path="/result" >
					<ResultNav/>
					<ResultsContent components={components} setComponents={setComponents} formData={formData} setFormData={setFormData} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
				</Route>

			</Switch>
		</Router>
	);
}