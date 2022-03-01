import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const NavbarMenu = () => {
	const {store, actions} = useContext(Context);
	return (
		<Navbar className="bg-light">

			<Link to="/">
				<Navbar.Brand className="px-5">
					<Image src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png" height="60px" alt="Star-wars-logo" />
				</Navbar.Brand>
			</Link>
			<div className="ml-auto float-sm-right w-100 col-md-8 offset-md-8">
				<Dropdown>
					<Dropdown.Toggle variant="primary" id="dropdown-basic">
						Favorites {'  '}<span className='span-favorites'>{store.favorites.length}</span>
					</Dropdown.Toggle>

					<Dropdown.Menu>{store.favorites.map((favorite, idx) => {
						return (
							<Dropdown.Item key={idx}>
								{favorite} <span className="x" onClick={(idx) => { actions.removeFavorite(favorite) }}>X</span>
							</Dropdown.Item>
						)
					})}
					</Dropdown.Menu>
				</Dropdown>
			</div>

		</Navbar>
	);
};
