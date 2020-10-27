
const cors = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = `${cors}https://example.com/wp-json/wp/v2/posts`

const postRequest = async () => {
	const response = await fetch(BASE_URL)
	const data = await response.json()

	console.log(data)
}

postRequest()