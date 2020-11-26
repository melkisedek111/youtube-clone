import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
const Header = () => {
	const [inputSearch, setInputSearch] = useState("");
	return (
		<div className="header">
			<div className="header__left">
				<MenuIcon />
				<img
					className="header__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
					alt="youtube-logo"
				/>
			</div>
			<div className="header__input">
				<input
					onChange={(e) => {
						setInputSearch(e.target.value);
					}}
					value={inputSearch}
					placeholder="Search"
					type="text"
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="header__inputButton" />
				</Link>
			</div>

			<div className="header__icons">
				<VideoCallIcon className="header__icon" />
				<AppsIcon className="header__icon" />
				<NotificationIcon className="header__icon" />
				<Avatar
					alt="Mel Ubalde"
					src="https://lh3.googleusercontent.com/a-/AOh14GjEYVzuL9mMg2oP6laIDq6ewdtjrePQ1hfHLXcICw=s88-c-k-c0x00ffffff-no-rj-mo"
				/>
			</div>
		</div>
	);
};

export default Header;
