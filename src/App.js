import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
	return (
		// BEM Convension
		<div className="App">
			{/* HEADER */}
			<Router>
				<Header />
				<div className="app__page">
					<Sidebar />
					<Switch>
						<Route path="/search">
							<SearchPage />
						</Route>
						<Route path="/">
							<RecommendedVideos />
						</Route>
					</Switch>
				</div>
			</Router>

			{/* SIDEBAR */}
			{/* RECOMMENDED VIDEO */}
		</div>
	);
};

export default App;
