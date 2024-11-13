import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "bbb37c95df739ff48c50898a490cecfe",
		language: "pt-BR",
		page: 1,
	},
});

export default api;
