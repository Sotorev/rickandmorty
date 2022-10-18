import Searcher from "../components/Searcher";
import { getCharacters } from "../data";
import { faGenderless, faHeartPulse, faMars, faQuestion, faSkull, faVenus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from "styled-components";
import { Outlet, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export async function loader({ request }) {

	const url = new URL(request.url);
	const query = url.searchParams.toString();
	const characters = await getCharacters(query);
	return characters;
}

const StyledCharactersRoot = styled('div')`
	.data-filter{
		margin: 0 2rem;
		display: flex;
		align-items: center;
	}
	@media screen and (max-width:800px) {
		padding-top: 200px;
		.data-filter{	
			margin: 0;
			width: 100%;;
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 220px;
			left: 50%;
			transform: translate(-50%,0);
			/* z-index: 1; */
		}
	}
`


const StyledFilters = styled("div")`
	margin: 2rem;
	display: flex;
	width: 500px;
	align-items: center;
	justify-content: space-evenly;
	span{
		color: white;
	}
	ul{
		width: 100%;
		
		padding: 0;
		display: flex;
		justify-content: space-evenly;
		li{
			&:hover{
				opacity: 1;
			}
		}
	}
	.gender-list{
		.active{
			opacity: 1;
		}
		li{
			list-style-type: none;
			opacity: 0.5;
			cursor: pointer;
			&:nth-child(1){
				color: red;
			}
			&:nth-child(2){
				color: palevioletred;
			}
			&:nth-child(3){
				color: green;
			}
			&:nth-child(4){
				color: blue;
			}
		}
	}
	.status-list{
		.active{
			opacity: 1;
		}
		li{
			list-style-type: none;
			opacity: 0.5;
			cursor: pointer;
			&:nth-child(1){
				color: red;
			}
			&:nth-child(2){
				color: gray;
			}
			&:nth-child(3){
				color: orange;
			}
			
		}
	}
	@media screen and (max-width:800px) {
		width: 100%;
		margin: 0;
		span{
			display: none;
		}
		.gender-list{
			width: 200px;
		}
		.status-list{
			width: 150px;
		}
	}
`

const CharactersRoot = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	// const [handleFilters, setHandleFilters] = useState();
	
	useEffect(() => {
		// setHandleFilters(searchParams.toString());
	},[searchParams])

	const handleChange = event => {
		// event.preventDefault();
		const nameQuery = event.target.value;
		searchParams.set("page", 1);
		searchParams.set("name", nameQuery);
		if (nameQuery === "")
			searchParams.delete("name");
		setSearchParams(searchParams);
	}
	return (
		<StyledCharactersRoot>
			<div className="data-filter">
				<Searcher
					searchParams={searchParams}
					handleChange={handleChange}
				/>
				<StyledFilters>
					<span>Gender:</span>
					<ul className="gender-list">
						<li
							className={searchParams.get("gender") === "male" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("gender") === "male") {
									
									searchParams.delete("gender");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("gender", "male");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faMars} size={"2x"} />
						</li>
						<li
							className={searchParams.get("gender") === "female" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("gender") === "female") {
									searchParams.delete("gender");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("gender", "female");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faVenus} size={"2x"} />
						</li>
						<li
							className={searchParams.get("gender") === "genderless" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("gender") === "genderless") {
									searchParams.delete("gender");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("gender", "genderless");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faGenderless} size={"2x"} />
						</li>
						<li
							className={searchParams.get("gender") === "unknown" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("gender") === "unknown") {
									searchParams.delete("gender");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("gender", "unknown");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faQuestion} size={"2x"} />
						</li>
					</ul>
					<span>Status:</span>
					<ul className="status-list">
						<li
							className={searchParams.get("status") === "alive" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("status") === "alive") {

									searchParams.delete("status");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("status", "alive");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faHeartPulse} size={"2x"} />
						</li>
						<li
							className={searchParams.get("status") === "dead" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("status") === "dead") {

									searchParams.delete("status");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("status", "dead");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faSkull} size={"2x"} />
						</li>
						<li
							className={searchParams.get("status") === "unknown" ? "active" : undefined}
							onClick={() => {
								searchParams.set("page", 1);
								if (searchParams.get("status") === "unknown") {

									searchParams.delete("status");
									setSearchParams(searchParams);
								}
								else {
									searchParams.set("status", "unknown");
									setSearchParams(searchParams);
								}
							}}
						>
							<FontAwesomeIcon icon={faQuestion} size={"2x"} />
						</li>
					</ul>
				</StyledFilters>
			</div>
			<Outlet />
		</StyledCharactersRoot>
	)
}

export default CharactersRoot;