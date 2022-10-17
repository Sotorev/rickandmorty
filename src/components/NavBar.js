import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBarStyled = styled.div`
	z-index: 1;

	width: 100%;
	display: flex;
	align-items: center;
	height: 50px;
	background-color: white;

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
		a{
			display: flex;
			align-items: center;
			img{
			width: 100px;
			}
		}
	}
	.mobile-menu{
			display: none;
		}
	@media screen and (max-width: 800px) {
		height: 100px;
		position: fixed;
		background-color: black;
		.mobile-menu{
			cursor: pointer;
			position: fixed;
			top: 15px;
			right: 15px;
			display: block;
			width: 50px;
			height: 40px;
			span{
				display: block;
				transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
				height: 5px;
				width: 100%;
				margin-bottom: 10px;
				border-radius: 10px;
				background-color: white;
				&:nth-child(1){
					transform-origin: 0% 0%;
				}
				&:nth-child(2){
					opacity: 1;
				}
				&:nth-child(3){
					transform-origin: bottom left;
				}
			}
		}
		.mobile-menu-active{
			cursor: pointer;
			z-index: 2;
			position: fixed;
			top: 15px;
			right: 15px;
			display: block;
			width: 50px;
			height: 40px;
			span{
				border-radius: 10px;
				display: flex;
				position: absolute;
				top: 17px;
				transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
				height: 5px;
				width: 100%;
				background-color: white;
				&:nth-child(1){
					transform: rotate(45deg);
				}
				&:nth-child(2){
					transform: rotate(0deg) scale(0.2, 0.2);
					opacity: 0;
				}
				&:nth-child(3){
					transform: rotate(-45deg);
					bottom: 0;
				}
			}
		}
		.logo-container{
			background-color: transparent;
			position: fixed;
			top: 15px;
			left: 15px;
			width: 150px;
			
		}
		nav{
			transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) ;
			display: block;
			position: fixed;
			background-color: #177093b0;
			right: 0;
			width: 70%;
			top:0;
			bottom: 0;
			ul{
				position: absolute;
				top:0;
				bottom: 0;
				padding: 0;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				margin: 0;
				li{
					margin: 20px;
				}
				
			}
		}
		.hide-nav{
			position: fixed;
			right: -100%;
			transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) ;
		}
	}
`
const StyledLink = styled(Link)`
	color: ${props => props.color};
	text-transform: uppercase;
	font-weight: bold;
	font-size: clamp(1rem, 1.5rem, 5rem);
	&:hover{
		color:red;
	}
	margin: 10px;
	text-decoration: none;
`
const NavBar = () => {
	const [isActiveMobileMenu, setIsActiveMenu] = useState(false);
	return (
		<NavBarStyled>
			<a className={isActiveMobileMenu ? "mobile-menu-active" : "mobile-menu"}
				onClick={() => setIsActiveMenu(!isActiveMobileMenu)}
			>
				<span />
				<span />
				<span />
			</a>
			<div className="logo-container">
				<a href="/">
					<img
						src="https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png"
					/>
				</a>
			</div>
			<nav className={!isActiveMobileMenu ? "hide-nav" : undefined}>
				<ul>
					<li>
						<StyledLink onClick={() => setIsActiveMenu(false)} color={isActiveMobileMenu ? "white" : "black"} to={"/"} >
							Home
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setIsActiveMenu(false)} color={isActiveMobileMenu ? "white" : "black"} to={"characters?page=1"}>
							Characters
						</StyledLink>
					</li>
					<li>
						<StyledLink onClick={() => setIsActiveMenu(false)} color={isActiveMobileMenu ? "white" : "black"} to={"episodes?page=1"} >
							Episodes
						</StyledLink>
					</li>
				</ul>
			</nav>
		</NavBarStyled>
	);
}
export default NavBar;