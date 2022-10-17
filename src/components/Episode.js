import styled from "styled-components";

const StyledEpisode = styled('div')`

	display: flex;
	flex-direction: column;
	justify-content: center	;
	width: 400px;
	height: 100px;
	background-color: #3c3e44;
	border-radius: 1rem;
	box-sizing: border-box;
	padding-left: 2rem;

	span{
		color: white;
		font-size: 2rem;
	}
	h2{
		display: inline;
		margin: 0;
		color: white;
		font-size: 2rem;
	}
	.air-date{
		font-size: 1.5rem;
		b{
			font-weight: bold;
		}
	}
	.episode-title{
		color: white;
		.season{
			color: orange;
		}
		.episode{
			color: aqua;
		}
	}
`

const Episode = props => {
	return (
		<StyledEpisode>
			<div className="episode-title"><span className="season">{props.episode.slice(0, 3)}</span><span className="episode">{props.episode.slice(3)}</span> | <h2>{` ${props.name}`}</h2></div>
			<span className="air-date"><b>Airdate: </b>{props.air_date}</span>
		</StyledEpisode>
	)
}
export default Episode;