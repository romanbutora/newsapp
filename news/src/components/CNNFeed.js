import React from 'react'
import Box from './Box'


const CNNFeed = ({items,img}) => {
  // const [items, setItems] = useState([])

  //   useEffect(() => {
  //       const fetchTasks = async () => {
  //           const res = await fetch('http://127.0.0.1:5000/cnn/money_news_international')
  //           const data = await res.json()
  //           console.log(res);
  //           return data
  //           }

  //       const getTasks = async () => {
  //           const tasksFromServer = await fetchTasks()
  //           setItems(tasksFromServer)
  //           }
        
  //       getTasks()

              
  //     }, [])
    


    return (
        <div style={{"display": "flex",
        "flexWrap": "nowrap",
        "overflowX": "auto"}}>

                {items.map(
                    (item, index) => (
                    <Box item={item} key={index}  img={img}/>
                )
                
                )
                }

        </div>
    )
}

export default CNNFeed