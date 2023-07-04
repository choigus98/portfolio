import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	const { children } = props;

	return (
		<>
			<Container>
				<Content>{children}</Content>
			</Container>
		</>
	);
};

export default Layout;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	backgroun-color: #fff;
	padding-top: 50px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	background-color: #fff;
	padding: 0 20px;
	box-sizing: border-box;
`;
