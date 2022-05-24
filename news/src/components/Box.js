import React from 'react'

const Box = ({item,img}) => {
  return (
    <a href={item.link} className="newsBox">
        <div style={{"display":"flex"}}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h5 > {item.title} </h5>
                        <img src={img} alt="Avatar" style={{"maxHeight": "30%","maxWidth": "90%"}} />
                    </div>
                    <div className="flip-card-back">
                        <p> {item.pubdate} </p>
                        <hr></hr>
                        <p href={item.link} className="headline" > {item.description} </p>
                    </div>
                </div>
            </div>
        </div>
  </a>
  )
}

export default Box

/*<div>
        <a href={item.link}> {item.title} </a>
        <p> {item.pubDate} </p>
        <p> {item.description} </p>
    </div>*/