import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
const App = () => {
	return (
		// BEM Convension
		<div className="App">
			{/* HEADER */}

			<Header />
			<div className="app__page">
				<Sidebar />
				<RecommendedVideos />
			</div>
			{/* SIDEBAR */}
			{/* RECOMMENDED VIDEO */}
		</div>
	);
};

export default App;
