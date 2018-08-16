import React from 'react';
import PostThumb from "./PostThumb";

const subs = (data,newPage) => {
    let list = [];
    for (let i in data){
        console.log(data[i].data.permalink);
        list.push(<PostThumb post={data[i].data} newPage={newPage}/>);
    }
    return list;
};

const Sub = props =>
    <div>
        {subs(props.data,props.newPage)}
    </div>;

export default Sub;