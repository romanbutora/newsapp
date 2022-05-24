import React from 'react'
import Box from './Box'


const BBCFeed = ({items,img}) => {

    
    return (
        <div style={{"display": "flex",
          "flexWrap": "nowrap",
          "overflowX": "auto"}}>

                {items.map(
                    (item, index) => (
                    <Box item={item} key={index}  img={img} />
                )
                
                )
                }

        </div>
    )
}

export default BBCFeed