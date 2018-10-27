import React, {Component} from 'react';
import ReactDom from 'react-dom';



const VideoList =(props)=>{
	
	const VideoList=props.videos.map((video)=>{
		return <VideoListItem Key={video.etag} video={video} />
	});
	}
		return(
		<div>
		<ul className="col-lg-4 list-group">
		</ul>
		</div>		
		);
};
		

	export default list;
