import React from "react";
import "./component.css";

const SearchResult = ({ item, loading }) => {
	if (loading) {
		return <h1>Loading.....</h1>;
	}

	return (
		<>
			<div className="search-result">
				<div className="search-result-image">
					{item.links && <img src={`${item.links[0].href}`} />}
				</div>
				<div className="search-result-title">
					<span>{item.data[0].title}</span>
					<span>{item.data[0].date_created}</span>
				</div>
			</div>
		</>
	);
};

export default SearchResult;
