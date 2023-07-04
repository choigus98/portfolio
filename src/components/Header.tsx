import React from 'react';
import { styled } from 'styled-components';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>👨🏻‍💻 Hyun's Portfolio</HeaderTitle>
			<HeaderMenu>
				<HeaderMenuItem>Home</HeaderMenuItem>
				<HeaderMenuItem>About Me</HeaderMenuItem>
				<HeaderMenuItem>Skills</HeaderMenuItem>
				<HeaderMenuItem>Work Experience</HeaderMenuItem>
			</HeaderMenu>
		</HeaderContainer>
	);
};

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 50px;
	background-color: #fff;
	color: black;
	box-shadow: rgb(220, 220, 220) 0px 2px 5px;
`;

const HeaderTitle = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	margin-left: 20px;
`;

const HeaderMenu = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 300px;
	margin-right: 20px;
`;

const HeaderMenuItem = styled.button`
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	border: none;
	background-color: transparent;
	&:hover {
		color: #1e90ff;
	}
`;

export default Header;
