import React from 'react';
import { styled } from 'styled-components';
import { Container, Wrapper } from '../Layout/ContentLayout';

interface StyleProps extends React.CSSProperties {
	textWrap?: 'balance' | 'normal';
}

const Introduce: React.FC<StyleProps> = () => {
	return (
		<Wrapper>
			<Container.Title style={{ marginBottom: 'auto', marginRight: 'auto' }}>
				Introduce
			</Container.Title>
			<Container.Desc>
				안녕하세요. 1년차 프론트엔드 개발자 최현입니다.
				<br />
				7개월간 파트타임으로 일하면서, 3개의 실무 프로젝트를 진행하였습니다.
				좋은 코드와 서비스는 원활한 의사소통 및 협업에서 나온다고 생각하였고,
				이를 바탕으로 개발 역량을 쌓아왔습니다.
				<br />
				<br />
				문제를 해결하기위해 문제점을 정확하게 파악하고, 좋은 코드를 작성해
				나가려고 노력합니다. 크고 작은 프로젝트들에서 프로젝트 매니저를
				담당함으로써, 서로의 이해관계를 이해하는 능력이 뛰어나고, 효과적인
				협업을 할 수 있습니다.
				<br />
				최적화와 효율적인 코딩에 관심이 많아서 유지보수가 빠른 코드를 작성하고,
				관심사가 같은 코드를 묶어서 작성하려고 노력합니다.
				<br />
				또한, 새로운 기술과 환경에 빠르게 적응하기위해 공부하고, 제대로된
				방법으로 사용하려고 노력합니다.
			</Container.Desc>
		</Wrapper>
	);
};

const Background = () => {
	return <h1>Background</h1>;
};

const Contact = () => {
	return <h1>Contact</h1>;
};

const Aboutme = () => {
	return (
		<>
			<Introduce />
			<Background />
			<Contact />
		</>
	);
};

export default Aboutme;
