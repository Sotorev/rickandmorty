import styled from "styled-components";
import ReactPlayer from "react-player";
const RMStyled = styled.div`
	.bg-container{
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
	h1{
			color: white;
			text-align: center;
		}
`;
const RM = () => {
	return (
		<RMStyled >
			<div className="bg-container" style={{ backgroundImage: "url(https://react-rick-and-morty-psi.vercel.app/static/media/thumb-1920-606024.a2933f885fa4473e162c.jpg)" }}>
				<div>

				</div>
			</div>
			{/* <ReactPlayer 
				// url={'https://youtu.be/C2AFf9wSAdM'}
				url={'https://youtu.be/EBYsx1QWF9A'}
				playing={true}
				loop={true}

			/> */}
			<h1>Hey!</h1>
		</RMStyled>
	)
}
export default RM;