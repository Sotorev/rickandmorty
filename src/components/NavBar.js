import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBarStyled = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	height: 50px;
	&.nav-bar {
		background-color: white;
	}
	nav{
		ul{
			display: flex;
			list-style-type: none;
		}
	}
	.logo-container{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 50px;
		background-color: black;
		img{
		width: 100px;
		}
	}
`
const StyledLink = styled(Link)`
	color: black;
	text-transform: uppercase;
	font-weight: bold;
	font-size: clamp(1rem, 1.5rem, 5rem);
	&:hover{
		color:red;
	}
	margin: 10px;
	text-decoration: none;
`;
const NavBar = () => {
	return (
		<NavBarStyled className="nav-bar">
			<div className="logo-container">
				<a href="/">
					<img
						src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
					/>
				</a>
			</div>
			<nav>
				<ul>
					<li>
						<StyledLink to={"/"} >
							Home
						</StyledLink>
					</li>
					<li>
						<StyledLink to={"characters"}>
							Characters
						</StyledLink>
					</li>
					<li>
						<StyledLink to={"episodes"} >
							Episodes
						</StyledLink>
					</li>
					<li>
						<StyledLink to={"locations"}>
							Locations
						</StyledLink>
					</li>
				</ul>
			</nav>
		</NavBarStyled>
	)
}
export default NavBar;