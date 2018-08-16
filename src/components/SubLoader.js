import React from 'react';
import Sub from "./Sub";

export default class SubLoader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input : '',
            sub : [],
        };
        fetch(`https://www.reddit.com/r/${props.sub}.json`).then(response => {
            return response.json();
        }).then(data => {
            this.setState({sub:<Sub data={data.data.children} newPage={this.props.newPage}/>});
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