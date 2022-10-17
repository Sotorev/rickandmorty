import { isRouteErrorResponse, json, useRouteError } from "react-router-dom";
import styled from "styled-components";

const StyledErrorPage = styled('div')`
	background-color: hsl(220, 12.3%, 14.3%);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 80vh;
	.error-data{
		display: flex;
		flex-direction: column;
		align-items: center;
		h2{
			&:first-child{
				font-size: 6rem;
			}
		}
	}

`


export default function ErrorPage() {
	const error = useRouteError();
	console.log(isRouteErrorResponse(error))
	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return (
				<StyledErrorPage>
					<h1>This page doesn't exist!</h1>
					<div className="error-data">
						<h2>{error.status}</h2>
						<h2>{error.data}</h2>
					</div>
				</StyledErrorPage>
			)
		}

		if (error.status === 401) {
			return <StyledErrorPage>You aren't authorized to see this</StyledErrorPage>;
		}

		if (error.status === 503) {
			return <StyledErrorPage>Looks like our API is down</StyledErrorPage>;
		}

		if (error.status === 418) {
			return <StyledErrorPage>🫖</StyledErrorPage>;
		}
	}

	return <StyledErrorPage>Something went wrong</StyledErrorPage>;
}
