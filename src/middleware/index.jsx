import thunk from "redux-thunk";

export default function middleware() {
	let middlewareArr = [thunk];
	return middlewareArr;
}
