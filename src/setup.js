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
	const [components, setComponents] = React.useState(Data)
	const [formData, setFormData] = React.useState({company: "", model: "", made: "", price: ""})
	const [totalAmount, setTotalAmount] = React.useState(0)
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
					<AddComponents components={components} setComponents={setComponents} />
				</Route>

				<Route exact path="/result" >
					<ResultNav/>
					<ResultsContent components={components} setComponents={setComponents} formData={formData} setFormData={setFormData} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
				</Route>

			</Switch>
		</Router>
	);
}