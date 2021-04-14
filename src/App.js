import { useState } from "react";
import Search from "./Search/Search";
import { SearchContext, MovieContext } from "./context/context";
import "./App.css";

let OMDB_API = "6332b1e1";

function App() {
	const [searchValue, setSearchValue] = useState("");
	const [movieArray, setMovieArray] = useState([]);

	async function handleOnChange(value) {
		setSearchValue(value);

		const response = await fetch(
			`http://www.omdbapi.com/?apikey=${OMDB_API}&s=${searchValue}`
		);

		const data = await response.json();
		console.log(data);
		setMovieArray(data.search || []);
	}

	const searchContextValueObj = {
		movieSearchTitle: searchValue,
		handleOnChange,
	};

	return (
		<div className="App">
			<SearchContext.Provider value={searchContextValueObj}>
				<Search />
			</SearchContext.Provider>
		</div>
	);
}

export default App;
