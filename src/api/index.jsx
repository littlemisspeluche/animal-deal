import axios from "axios";

const ArticlesApi = {
	getData: () => getData()
};

const getData = async () => {
	let response = await axios.get("https://www.live-rates.com/rates");
	return response.data;
};

export default ArticlesApi;
