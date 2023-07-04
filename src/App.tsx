import React from 'react';
import './style/reset.css';
import Layout from './Layout';
import * as components from './components';

function App() {
	return (
		<div className="App">
			<components.Header />
			<Layout>
				<components.Aboutme />
				<components.Skills />
				<components.WorkExperience />
			</Layout>
		</div>
	);
}

export default App;
