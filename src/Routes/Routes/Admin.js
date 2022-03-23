import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { getUser } from "../../lib/slices/auth"


const AdminRoute = ({ path, component: Component, ...rest }) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.auth.user);
	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			if (currentUser !== null) {
				dispatch(getUser(currentUser))
			} else {
				dispatch(getUser(null))
			}
		})
	}, [dispatch]);

	return (
		<>
			{/* redirect to home */}
			{user !== null ? (
				<>
					{!user.email.startsWith('abdelrahmandiv') &&
						<Route
							{...rest}
							component={(props) => {
								if (path === "/sign-in" || path === "/sign-up") return <Redirect to="/" />;
								if (path === "/addCollocation" || path === "/updateCollocations") {
									toast.warning("You are not Abdo");
									return <Redirect to="/" />
								};
								return <Component {...props} />
							}
							}
						/>
					}
					{/* redirect to admin */}
					{user.email.startsWith('abdelrahmandiv') &&
						<Route
							{...rest}
							component={(props) =>
								path === "/sign-in" || path === "/sign-up" ? <Redirect to="/" /> : <Component {...props} />
							}
						/>
					}
				</>
			) : (
				<Route
					{...rest}
					// component={(props) => path !== "/sign-in" ? <Redirect to="/sign-in" /> : <Component {...props} />}

				component={(props) => {
					if(!path.startsWith("/sign")) {
						return <Redirect to="/sign-in" />
					}else {
						return <Component {...props} />
					}
					// (path !== "/sign-in" || path !== "/sign-up") ? <Redirect to="/sign-in" /> : <Component {...props} />
				}}
				/>
			)}

		</>
	)
}
export default AdminRoute