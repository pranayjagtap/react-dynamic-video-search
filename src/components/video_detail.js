import React from 'react';

const VideoDetail = ({video}) => {    //accesssing props elements direcly and assigning it to variable--> const video=props.state.videos;

    if(!video){
        return (<div>Loading Details....</div>);
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>                                   
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;