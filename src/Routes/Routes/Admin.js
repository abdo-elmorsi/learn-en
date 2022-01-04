import React from 'react'
import Cookies from 'js-cookie'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { encryptName } from "../../helpers/encryptions";

const AdminRoute = ({ path, component: Component, ...rest }) => {
	const User = Cookies.get(encryptName("User")) || null;
	const Admin = Cookies.get(encryptName("Admin")) || null;
	console.log("user" + User)
	console.log("Admin" + Admin)

	return (
		<>
			{/* redirect to home */}
			{User !== null &&
				<Route
					{...rest}
					component={(props) =>
						path === "/login" || path === "/admin" ? <Redirect to="/" /> : <Component {...props} />
						// path === "/login" ? (<Redirect to="/" />) : (
						// path === "/admin" ? (<Redirect to="/" />) : <Component {...props} />
						// )
					}
				/>
			}
			{/* redirect to admin */}
			{Admin !== null &&
				<Route
					{...rest}
					component={(props) => path === "/login" ? <Redirect to="/admin" /> : <Component {...props} />}
				/>
			}
			{/* redirect to login */}
			{!User && !Admin &&
				<Route
					{...rest}
					component={(props) => path !== "/login" ? <Redirect to="/login" /> : <Component {...props} />}
				/>
			}
		</>
	)
}
export default AdminRoute