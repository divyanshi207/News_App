import React from 'react'

const NewsItems=(props)=> {
    let {title ,source, description ,imageurl,newsurl,author,date}=props
    return (
      <div className=' my-3'>
      <div className="card"  ><img className="card-img-top" src={!imageurl?"https://www.greetingseveryday.com/wp-content/uploads/2017/01/Indian-Flag-Flying-wallpaper-for-pc-free-download.jpg": imageurl} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unkown"} on {new Date(date).toGMTString()}</small></p>
    <p><b>{source}</b></p>
    <a href={newsurl} className="btn btn-sm btn-dark">For More</a>
  </div>
</div>
</div>
    )

}

export default NewsItems