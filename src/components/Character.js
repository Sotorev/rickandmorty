import styled from "styled-components";

const StyledCharacter = styled.div`
	font-family: -apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
	background-color: rgb(32, 35, 41);
	border-radius: 2rem;
	width: 40vw;
	height: 15vw;
	display: flex;
	align-items: center;
	/* justify-content: center; */
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
			font-size: clamp(1rem, 3vw, 3rem);;
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
			font-size: clamp(.2rem, 1.5vw, 2rem);
			align-items: center;
			&::before{
				content:"";
				background-color: aqua;
				height: .75rem;
				width: .75rem;
				margin-right: .5rem;
				border-radius: 100%;
			}
		}
		.sub-title{
			font-size: clamp(.2rem, 1.5vw, 2rem);
			color: grey;
		}
		.location{
			color: white;
			font-size: clamp(.2rem, 1.5vw, 2rem);
		}
	}
	

`

const Character = (props) => {
	return (
		<StyledCharacter>
			<div className="image-container">
				<img src={props.image} />
			</div>
			<div className="description-container">
				<div>
					<h2><a>{`${props.name}`}</a></h2>
					<span className="status">{`${props.status} - ${props.species} - ${props.gender}`}</span>
				</div>
				<div>
					<span className="sub-title">Last known location:</span>
					<br/>
					<span className="location">{props.location.name}</span>
				</div>
				
			</div>
		</StyledCharacter>
	)
}
export default Character;