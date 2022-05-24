import React from 'react'
import Box from './Box'


const SkyFeed = ({items,img}) => {

    return (
        <div style={{"display": "flex",
        
        "overflowX": "auto"}}>

                {items.map(
                    (item, index) => (
                    <Box item={item} key={index} img={img} />
                )
                
                )
                }
            
        </div>
    )
}

export default SkyFeed