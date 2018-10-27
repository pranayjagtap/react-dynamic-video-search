import React, {Component} from 'react';
import ReactDom from 'react-dom';
import VideoListItem from './video_list_items';


const VideoList =(props)=>{
	const videos=props.videos;
	
	
		
		const videoItems=props.videos.map((video)=>{    //video is like a variable assigned declared here
		return <VideoListItem 
		onVideoSelect={props.onVideoSelect}	key={video.etag} video={video} />
		});
		
		return(
		<div>
		<ul className="col-lg-4 list-group-item list-group-item-action">
		{videoItems}
		</ul>
		</div>		
		);
};
		

	export default VideoList;
