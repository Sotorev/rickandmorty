import styled from "styled-components";
import ReactPlayer from "react-player";
const RMStyled = styled.div`
	.bg-container{
		z-index: -1;
		position: relative;
		background-size: 100%;
		background-repeat: no-repeat;
		background-position: 0 75%;
		width: 100%;
		height: 470px;
		div:first-child{
			position: absolute;
			width: 100%;
			height: 100%;
			bottom : 0;
			background-image: linear-gradient(rgba(0, 0, 0, 0) 49.02%, rgba(0, 0, 0, 0.008) 52.42%, rgba(0, 0, 0, 0.035) 55.82%, rgba(0, 0, 0, 0.082) 59.22%, rgba(0, 0, 0, 0.15) 62.62%, rgba(0, 0, 0, 0.23) 66.02%, rgba(0, 0, 0, 0.333) 69.41%, rgba(0, 0, 0, 0.443) 72.81%, rgba(0, 0, 0, 0.557) 76.21%, rgba(0, 0, 0, 0.667) 79.61%, rgba(0, 0, 0, 0.77) 83.01%, rgba(0, 0, 0, 0.85) 86.41%, rgba(0, 0, 0, 0.918) 89.8%, rgba(0, 0, 0, 0.965) 93.2%, rgba(0, 0, 0, 0.992) 96.6%, rgb(0, 0, 0) 100%);
		}
	}
	.intro-container{
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		.intro-text{
			width: 50%;
			h1{
				color: white;
			}
			p{
				margin: auto;
				color: white;
				text-align: justify;
				text-justify: inter-word;
				/* padding: 5rem; */
			}
		}
		.vplayer{
			margin-left: 10rem;
		}
	}
`;
const RM = () => {
	return (
		<RMStyled >
			<div className="bg-container" style={{ backgroundImage: "url(https://react-rick-and-morty-psi.vercel.app/static/media/thumb-1920-606024.a2933f885fa4473e162c.jpg)" }}>
				<div>

				</div>
			</div>
			<div className="intro-container">
				<div className="intro-text">
					<h1>Rick & Morty</h1>
					<p>
						Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime programming block Adult Swim. It is distributed internationally by Warner Bros. Domestic Television. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures that take place across an infinite number of realities, often travelling to other planets and dimensions through portals and on Rick's flying saucer. The general concept of Rick and Morty relies on two conflicting scenarios: domestic family drama, and an alcoholic grandfather dragging his grandson into high jinks.
					</p>
				</div>
				<ReactPlayer
					className="vplayer"
					url={'https://youtu.be/C2AFf9wSAdM'}
					// url={'https://youtu.be/EBYsx1QWF9A'}
					playing={true}
					loop={true}

				/>
			</div>
		</RMStyled>
	)
}
export default RM;