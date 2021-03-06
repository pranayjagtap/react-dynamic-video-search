import React from 'react';



const VideoListItems=(props)=>{  //({video})
	const video=props.video;
	const onVideoSelect=props.onVideoSelect;
	const ImgUrl=video.snippet.thumbnails.default.url;
	return(
	<li onClick={()=>onVideoSelect(video)} className="list-group-item">
		<div className="video-list media">
			<div className="media-left">
			<img className="media-object" src={ImgUrl}/>
			</div>
			<div className="media-body">
			<div className="media-heading" >{video.snippet.title}</div>
			</div>
		</div>
		
	</li>
	
	);
};


export default VideoListItems;

