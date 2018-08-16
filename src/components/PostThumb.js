import React from 'react';
import PostLoader from "./PostLoader";

const style = {
    position : 'relative',
    margin : 'auto',
    width : '500px',
    background : 'lightgray',
    border : 'black solid 1px',
    borderRadius : '10px',
    padding : '10px',
    textAlign : 'left',
    marginTop : '20px',
};

const PostThumb = props =>
    <div style={style}>
        <h2>{props.post.title}</h2>
        {props.post.thumbnail === 'self' ? null : <img src={props.post.thumbnail} alt={props.post.thumbnail}/>}
        <p>posted by: {props.post.author}</p>
        <button onClick={() => props.newPage(<PostLoader link={props.post.permalink} newPage={props.newPage}/>)}>go to posting</button>
    </div>;
    
export default PostThumb;