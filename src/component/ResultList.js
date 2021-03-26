import React, { useState } from "react";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const ResultList = (props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [imagePerPage] = useState(3);
	const indexOfLastPost = currentPage * imagePerPage;
	const indexOfFirstPost = indexOfLastPost - imagePerPage;
	const currentImages = props.images.slice(indexOfFirstPost, indexOfLastPost);
	const paginate = (pageNumer) => setCurrentPage(pageNumer);

	if (props.loading) {
		return <h1>Loading.....</h1>;
	}
	return (
		<>
			<div className="home-redirect">
				<Link to="/nasaphoto">Home</Link>
			</div>
			<div>
				<h4>Search Results for {props.input}</h4>
				{props.input && props.images.length === 0 ? (
					<h1>No Images Found</h1>
				) : (
					currentImages.map((item) => (
						<SearchResult item={item} loading={props.loading} />
					))
				)}
				<Pagination
					imagesPerPage={imagePerPage}
					totalImages={props.images.length}
					paginate={paginate}
				/>
			</div>
		</>
	);
};

export default ResultList;
