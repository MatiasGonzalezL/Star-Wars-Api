import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import {Row, Col} from "react-bootstrap";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import PeopleView from "./views/CharactersView";
import PlanetsView from "./views/PlanetsView";
import VehiclesView from "./views/VehiclesView";

import { NavbarMenu } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardPeople } from "./component/CardPeople";
import { CardPlanets } from "./component/CardPlanets";
import { CardVehicles } from "./component/CardVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMenu />
					<Switch>
						<Route exact path="/">
							<div>
								<h1>
									El Universo de Star Wars
								</h1>
							</div>
							<Row>
								<h1>Personajes</h1>
								<CardPeople/>
							</Row>
							<Row>
								<h1>Planetas</h1>
								<CardPlanets/>
							</Row>
							<Row>
								<h1>Vehiculos</h1>
								<CardVehicles/>
							</Row>
						</Route>
						<Route exact path="/PeopleView/:id">
							<div>
								<h1>
									Personajes
								</h1>
							</div>
							<PeopleView />
						</Route>
						<Route exact path="/PlanetsView/:id">
							<div>
								<h1>
									Planetas
								</h1>
							</div>
							<PlanetsView />
						</Route>
						<Route exact path="/VehiclesView/:id">
							<div>
								<h1>
									Vehiculos
								</h1>
							</div>
							<VehiclesView />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
