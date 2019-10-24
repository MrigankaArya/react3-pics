import React from 'react';

class SearchBar extends React.Component{
	
	//No parenthesis when you pass a ref to an event handler, otherwise it'll be called whenever the div is rendered.
	//Callback names are community convention
	state = {term: ''};

	//Parenthesis in form call are used to call the arrow function
	//Form only invokes the arrow function once
	onFormSubmit = (event) =>{
		event.preventDefault(); //Stops browser from trying to submit form automatically
		this.props.onSubmit(this.state.term);
	};

	render(){
		return (
			<div className="ui segment"> 
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label> Image Search </label>
						<input type="text" value= {this.state.term} 
							onChange={(e) => this.setState({term: e.target.value})}/> 
					</div>
				</form>
			</div>);
	};
}

export default SearchBar;