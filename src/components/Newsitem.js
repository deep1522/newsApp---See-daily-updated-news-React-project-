import React, { Component } from 'react';

export default class Newsitem extends Component {
render() {
    let {title,description,imageURL,Url,author,date}=this.props;
    return (
    <div className='my-3'>
        <div className="card" >
        <img src= {!imageURL? "https://www.hindustantimes.com/ht-img/img/2023/11/03/1600x900/Patna_1699036734118_1699036734308.jpeg":imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small class="text-muted">{author} on {new Date (date).toGMTString()}</small></p>
            <a href={Url} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read more</a>
        </div>
        
        </div>
    </div>
    
    )
}
}
