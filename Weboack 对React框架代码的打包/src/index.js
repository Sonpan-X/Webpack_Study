import React, { Component } from 'react';
import ReactDom from 'react-dom';
class App extends Component{
	render(){
		return (
			<div>
				<div>i'm react!</div>
			</div>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'));
