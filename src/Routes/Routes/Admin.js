import React from 'react'
import Cookies from 'js-cookie'
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { encryptName } from "../../helpers/encryptions";
import { toast } from 'react-toastify';

const AdminRoute = ({ path, component: Component, ...rest }) => {
	const User = Cookies.get(encryptName("User")) || null;
	const Admin = Cookies.get(encryptName("Admin")) || null;

	return (
		<>
			{/* redirect to home */}
			{User !== null &&
				<Route
					{...rest}
					component={(props) => {
						if (path === "/login") return <Redirect to="/" />;
						if (path === "/admin") {
							toast.warning("You are not Abdo");
							return <Redirect to="/" />
						};
						return <Component {...props} />
					}
					}
				/>
			}
			{/* redirect to admin */}
			{Admin !== null &&
				<Route
					{...rest}
					component={(props) =>
						path === "/login" ? <Redirect to="/" /> : <Component {...props} />
					}
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