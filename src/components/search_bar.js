import React, {Component} from 'react';
import reactDom from 'react-dom';



class SearchBar extends Component{
	constructor(props){
		super(props);
		
		this.state={term:''};
		
	}
	render (){
		return (
		
			<div className="md-form active-cyan-2 mb-3">	
				<input  className="form-control" placeholder="Search" aria-label="Search"
				value={this.state.term}
				onChange={event=>this.onInputChange(event.target.value)} />
			</div>
			
		);
	}
	onInputChange(term){			
			this.setState({term});
			this.props.onSearchTermChange(term);
			
		}
		
	
	
}

export default SearchBar;


