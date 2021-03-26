import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NasaPhoto = (props) => {
	const apiKey = "5Old9fnvQ1fECDVuA7KmGGdISehfq8I1jJLRONPa";
	const [photo, setPhoto] = useState(null);
	const history = useHistory();

	useEffect(() => {
		fetchPhoto();

		async function fetchPhoto() {
			const result = await fetch(
				`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
			);

			const data = await result.json();
			setPhoto(data);
		}
	}, []);

	console.log(photo);

	if (!photo) {
		return <div></div>;
	}

	function handleClick() {
		history.push("/resultList");
		fetchPhotos();
		async function fetchPhotos() {
			props.setLoading(true);
			const result = await fetch(
				`https://images-api.nasa.gov/search?q=${props.input}`
			);
			props.setLoading(false);
			const data = await result.json();
			props.setImages(data.collection.items);
		}
	}
	return (
		<>
			<div>
				<div className="header">
					<h1>NASA Media Search</h1>
				</div>
				<div className="title">
					<h1>{photo.title}</h1>
					<div className="search">
						<input
							type="text"
							onChange={(event) =>
								props.setInput(event.target.value)
							}
						></input>

						<button onClick={handleClick}>Search</button>
					</div>
				</div>
				<div className="image">
					<img src={photo.url} alt={photo.title} />
					<p>{photo.explanation}</p>
					<h4>DATE : {photo.date}</h4>
				</div>
			</div>
		</>
	);
};

export default NasaPhoto;
