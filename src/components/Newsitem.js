import React, { Component } from 'react'

const Newsitem=(props)=> {
    let {author,date,title,description,imgurl,newsurl}=props;
    let d=new Date(date);
    d=d.toGMTString();
    return (
<div>
        <div className="card my-2" >
            <img src={imgurl} className="card-img-top" alt="..."/>
            <span class="badge badge-success">Success</span>
            <div className="card-body">
            <h5 className="card-title">{title}...<span className="badge badge-success">Success</span></h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-muted">By {author?author:"Unknown"} on {d}</small></p>
            <a href={newsurl} target="blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
</div>
      </div>
    )
}

export default Newsitem
