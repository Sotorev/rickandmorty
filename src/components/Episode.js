import styled from "styled-components";

const StyledEpisode = styled('div')`

	h2{
		margin: 0;
		color: white;
		&:hover{
			color: aqua;
			cursor: pointer;
		}
	}
`

const Episode = props => {
	return (
		<StyledEpisode>
			
			<h2>{`${props.episode} | ${props.name}`}</h2>
		</StyledEpisode>
	)
}
export default Episode;