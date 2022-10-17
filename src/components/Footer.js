import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledFooter = styled('div')`
	color: white;
	height: 150px;
	background-color: rgb(22, 24, 27);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	a{
		text-decoration: none;
		&:visited{
			color: white;
		}
		&:hover{
			color: orange;	
		}
	}
	ul{
		width: 200px;
		display: flex;
		justify-content: space-evenly;
		padding: 0;
		li{
			width: 25px;
			height: 25px;
			list-style-type: none;
		}
	}

`

const Footer = () => {
	return (
		<StyledFooter>
			<span>© 2022 | Manuel Soto</span>
			<ul>
				<li>
					<a rel="noreferrer" target={"_blank"} href="https://www.linkedin.com/in/jos%C3%A9-soto-77a087248"><FontAwesomeIcon icon={faLinkedin} size={"xl"} /></a>
				</li>
				<li>
					<a rel="noreferrer" href="mailto:manrev@umes.edu.gt"><FontAwesomeIcon icon={faEnvelope} size={"xl"} /></a>
				</li>
				<li>
					<a rel="noreferrer" target={"_blank"} href="https://github.com/Sotorev"><FontAwesomeIcon icon={faGithub} size={"xl"} /></a>
				</li>
			</ul>
			<a rel="noreferrer" target={"_blank"} href="https://sotorev.github.io/">https://sotorev.github.io/</a>
		</StyledFooter>
	);
}

export default Footer;