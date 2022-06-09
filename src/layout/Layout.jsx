import React from 'react';
import CallDifferentiator from '../components/CallManagement/CallDifferentiator';
import NavbarDifferentiator from '../components/Navbar/NavbarDifferentiator';

const Layout = (props) => {

	const style = {
		width: "100%",
		background: "#2B2E43",
	}

	return(
		<>
			<NavbarDifferentiator  />
			<CallDifferentiator />
			<div style={style}>
				{props.children}
			</div>
		</>
	)
}

export default (Layout);