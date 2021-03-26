import React, { useState } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import NasaPhoto from "./component/NasaPhoto";
import "./App.css";
import ResultList from "./component/ResultList";

function App() {
	const [input, setInput] = useState("");
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	return (
		<BrowserRouter>
			<div>
				<Route path="/">
					<Redirect to="/nasaphoto" />
				</Route>
				<Route exact path="/home">
					<Redirect to="/nasaphoto" />
				</Route>
				<Route
					render={() => (
						<NasaPhoto
							input={input}
							setInput={setInput}
							setLoading={setLoading}
							setImages={setImages}
						/>
					)}
					path="/nasaphoto"
				/>
				<Route
					render={() => (
						<ResultList
							input={input}
							loading={loading}
							setLoading={setLoading}
							images={images}
							setImages={setImages}
						/>
					)}
					path="/resultlist"
				/>
			</div>
		</BrowserRouter>
	);
}

export default App;
