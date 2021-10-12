import React from 'react';
import bg from '../img/detail.jpg';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonsById } from '../actions';
import { NavLink, useParams } from 'react-router-dom';
const Detail = () => {
	const dispatch = useDispatch();
	let { id } = useParams();
	useEffect(() => {
		dispatch(getPokemonsById(id));
	}, [dispatch]);

	const { name, img, attack, defense, speed, types, hp, weight, height } =
		useSelector((state) => state.detail);

	const Container = styled.div`
		background: url(${bg});
		width: 100vw;
		height: 100vh;
		display: flex;
		font-family: 'Poppins';
		display: flex;
		justify-content: center;
		align-items: center;
	`;
	const ContainerPoke = styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #ffffffea;
		width: 900px;
		height: 700px;
		border-radius: 30px;
		color: #2e2e2e;
		padding: 30px;
	`;

	const Title = styled.h1`
		text-transform: capitalize;
		font-size: 80px;
		letter-spacing: 10px;
		margin: 0px 0px 20px;
	`;

	const PokeImg = styled.img`
		width: 350px;
		height: 350px;
	`;

	const ContainerStats = styled.div`
		padding: 30px;
		margin-left: 100px;
	`;

	const ContainerInfo = styled.div`
		display: flex;
		justify-content: space-space-evenly;
		align-items: center;
		height: 600px;
	`;
	const Stats = styled.p`
		font-size: 20px;
		font-weight: 700;
		margin-right: 20px;
	`;
	const Info = styled.p`
		font-size: 20px;
	`;

	const MiniCont = styled.div`
		display: flex;
	`;

	const SVG = styled.svg`
		height: 70px;
		width: 70px;
		color: aliceblue;
		position: absolute;
		left: 80px;
		top: 80px;
	`;

	const ContainerTypes = styled.div`
		display: flex;
		width: 300px;
		justify-content: center;
		text-transform: capitalize;
	`;

	const Type = styled.p`
		font-size: 20px;
		font-weight: 700;
		padding: 10px 30px;
		background: #919090b5;
		border-radius: 30px;
		margin: 20px;
	`;

	return (
		<Container>
			<ContainerPoke>
				<NavLink to='/home'>
					<SVG
						xmlns='http://www.w3.org/2000/svg'
						class='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z'
						/>
					</SVG>
				</NavLink>
				<Title>{name}</Title>
				<ContainerTypes>
					{types?.map((t) => (
						<Type>{t}</Type>
					))}
				</ContainerTypes>
				<ContainerInfo>
					<PokeImg src={img} alt={`Imagen de ${name}`} />
					<ContainerStats>
						<MiniCont>
							<Stats>HP:</Stats>
							<Info>{hp}</Info>
						</MiniCont>
						<MiniCont>
							<Stats>Attack:</Stats>
							<Info>{attack}</Info>
						</MiniCont>
						<MiniCont>
							<Stats>Defense:</Stats>
							<Info>{defense}</Info>
						</MiniCont>
						<MiniCont>
							<Stats>Speed:</Stats>
							<Info>{speed}</Info>
						</MiniCont>
						<MiniCont>
							<Stats>Weight:</Stats>
							<Info>{weight}</Info>
						</MiniCont>
						<MiniCont>
							<Stats>Height:</Stats>
							<Info>{height}</Info>
						</MiniCont>
					</ContainerStats>
				</ContainerInfo>
			</ContainerPoke>
		</Container>
	);
};

export default Detail;
