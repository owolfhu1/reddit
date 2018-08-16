import React from 'react';
import Post from "./Post";

export default class PostLoader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            sub : [],
        };
        
        fetch(`https://www.reddit.com/${props.link.substring(1,props.link.length-1)}.json`).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({sub:<Post post={data[0].data.children[0].data}
                                     comments={data[1].data.children} newPage={this.props.newPage}/>});
        }).catch(console.log);
    }
    
    render() {
        return (
            <div>
                {this.state.sub}
            </div>
        );
    }
    
}