import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoListItems from './components/video_list_items';
import VideoDetail from './components/video_detail';

const API_KEY='AIzaSyCb5N_JdpLx1Gkipt68N7UTs1pt1cxYfuo';


export default class App extends Component {
	constructor(props){
		super(props);
		this.state={videos:[],
		selectedVideo:null,
		
		
		};
		this.videoSearch('Beckham');
	}
		
	videoSearch(term){
	YTSearch({key:API_KEY,term:term},(videos)=>{
		
		this.setState({videos:videos,
		selectedVideo:videos[0]
		});
		
	});
	}
	

  render() {
	  const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    return (
	<div>
		<div  class="jumbotron">
			<h5>Practice Project</h5>
			<h1>Title:Dynamic Video Search using React</h1> 
	
			<p>This is a practice implementation of YouTube Search API using React</p> 
			<b>Designed by Pranay Jagtap</b> 
		</div>
		
		<div className="row">
			<SearchBar className="col-lg-12" onSearchTermChange={videoSearch} />
		</div>
		<hr />
		<div className="row">
			<VideoDetail className="col-lg-8" video={this.state.selectedVideo} />
			<VideoList classNames="col-lg-4"
			onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
			videos={this.state.videos}
			/>
	  	
		</div>
	</div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));