import axios from 'axios'

axios.defaults.baseURL = 'https://abdo-en.herokuapp.com/api'
// axios.defaults.baseURL = 'https://souk-team-server.herokuapp.com/api'

axios.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject(error)
)

const httpRequest = (req) => {
	return new Promise(async (resolve, reject) => {
		try {
			const request = await axios(req)
			resolve(request.data)
		} catch (e) {
			reject(e?.response?.data || {})
		}
	})
}

export default httpRequest