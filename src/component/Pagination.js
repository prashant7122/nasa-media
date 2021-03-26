import React from "react";
import "./component.css";

const Pagination = ({ imagesPerPage, totalImages, paginate }) => {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
		pageNumbers.push(i);
	}
	console.log(pageNumbers);
	return (
		<div>
			<div className="navigation">
				{pageNumbers.map((number) => (
					<span key={number} className="page-item">
						<a onClick={() => paginate(number)} href="">{number}</a>
					</span>
				))}
			</div>
		</div>
	);
};

export default Pagination;
