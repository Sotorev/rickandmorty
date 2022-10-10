import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGenderless, faMars, faQuestion, faVenus } from "@fortawesome/free-solid-svg-icons";

const StyledCharacter = styled.div`
	
	font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
	background-color: rgb(32, 35, 41);
	border-radius: 2rem;
	width: 600px;
	height: 200px;
	display: flex;
	align-items: center;
	overflow: hidden;
	
	.image-container{
		width: 40%;
		img{
			width: 100%;
		}
	}
	.description-container{
		box-sizing: border-box;
		display: flex;
		height: 100%;
		width: 60%;
		flex-direction: column;
		justify-content: space-around;
		padding-left: 2rem;
		h2{
			margin: 0;
			font-size: 3rem;
			color: white;
			a{
				cursor: pointer;
			}
			&:hover{
				color: rgb(255, 152, 0);
			}
		}
		.status{
			display: flex;
			color: white;
			font-size: 2rem;
			align-items: center;
			&::before{
				content:"";
				background-color: ${
					props => {
						if (props.status == "Alive") return "greenyellow"
						else if (props.status == "Dead") return "red"
						else return "orange"
					}
				};

				height: .75rem;
				width: .75rem;
				margin-right: .5rem;
				border-radius: 100%;
			}
			svg{
				margin-left: 1rem;
			}

		}
		.sub-title{
			font-size: 2rem;
			color: grey;
		}
		.location{
			color: white;
			font-size: 2rem;
		}
	}
	@media screen and (max-width: 1254px) {
		margin: 2rem 0;
	}
	@media screen and (max-width: 600px){
		/* display: block; */
		flex-direction: column;
		width: 80%;
		height: 550px;
		justify-content: space-between;
		align-items: center;
		.image-container{
			display: flex;
			align-items: center;
			width: 100%;
			height: 60%;
			overflow: hidden;
			img{
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.description-container{
			width: 100%;
			height: 40%;
		}
	}

`

const Character = (props) => {
	let icon;
	if (props.gender == "Male") icon = <FontAwesomeIcon icon={faMars} />
	else if (props.gender == "Female") icon = <FontAwesomeIcon icon={faVenus} />
	else if (props.gender == "Genderless") icon = <FontAwesomeIcon icon={faGenderless} />
	else icon = <FontAwesomeIcon icon={faQuestion} />
	return (
		<StyledCharacter status={props.status}>
			<div className="image-container">
				<img src={props.image} />
			</div>
			<div className="description-container">
				<div>
					<h2><a>{`${props.name}`}</a></h2>
					<span className="status">
						{
							`${props.status} - ${props.species} - `
						}
						{icon}
					</span>
				</div>
				<div>
					<span className="sub-title">Last known location:</span>
					<br />
					<span className="location">{props.location.name}</span>
				</div>

			</div>
		</StyledCharacter>
	)
}
export default Character;