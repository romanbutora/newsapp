import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import BBCFeed from './components/BBCFeed';
import CNNFeed from './components/CNNFeed';
import SkyFeed from './components/SkyFeed';
import { useCallback, useEffect, useState } from "react";
import Clock from './components/Clock';
import LocationGPS from './components/LocationGPS';

import bbc_technology from './localstorage/bbc_technology.json';
import bbc_business from './localstorage/bbc_business.json';
import bbc_world from './localstorage/bbc_world.json';

import cnn_technology from './localstorage/cnn_edition_technology.json';
import cnn_business from './localstorage/cnn_money_news_international.json';
import cnn_world from './localstorage/cnn_edition_world.json';

import sky_technology from './localstorage/sky_technology.json';
import sky_business from './localstorage/sky_business.json';
import sky_world from './localstorage/sky_world.json';

//localstorage api - ak nefunguje backend tak namockujem json odpoved z localstorage

function App() {

  const [skyitems, setSkyItems] = useState([])
  const [cnnitems, setCnnItems] = useState([])
  const [bbcitems, setBbcItems] = useState([])

  const getTasksBBC = async (backendtopic,localtopic) => {
    setBbcItems(await fetch('http://127.0.0.1:5000/bbc/' + backendtopic).then(res => res.json()).catch( setBbcItems(JSON.parse(localStorage.getItem("bbc" + localtopic )))    ))
  }

  const getTasksCNN = async (backendtopic,localtopic) => {
    setCnnItems(await fetch('http://127.0.0.1:5000/cnn/' + backendtopic).then(res => res.json()).catch( setCnnItems(JSON.parse(localStorage.getItem("cnn" + localtopic  )))  ))
      }

  const getTasksSKY = async (backendtopic,localtopic) => {
    setSkyItems(await fetch('http://127.0.0.1:5000/sky/' + backendtopic).then(res => res.json()).catch( setSkyItems(JSON.parse(localStorage.getItem("sky" + localtopic  )))    ))
      }

  useEffect(() => {
    var topic = document.querySelector("#currtopic").textContent;

    localStorage.setItem("skyMarkets", JSON.stringify(sky_business));
    localStorage.setItem("skyTechnology", JSON.stringify(sky_technology));
    localStorage.setItem("skyWorld", JSON.stringify(sky_world));

    localStorage.setItem("cnnMarkets", JSON.stringify(cnn_business));
    localStorage.setItem("cnnTechnology", JSON.stringify(cnn_technology));
    localStorage.setItem("cnnWorld", JSON.stringify(cnn_world));

    localStorage.setItem("bbcMarkets", JSON.stringify(bbc_business));
    localStorage.setItem("bbcTechnology", JSON.stringify(bbc_technology));
    localStorage.setItem("bbcWorld", JSON.stringify(bbc_world));

    getTasksBBC("business",topic)
    getTasksCNN("money_news_international",topic)
    getTasksSKY("business",topic)

          
  }, [])

  

  const changeTopic = useCallback (async (e) => {
        var topic = String(e.target.textContent);
        document.querySelector("#currtopic").textContent = topic;
        var [sky,cnn,bbc] = (topic.includes("Technology")) ? ["technology","edition_technology","technology"] : 
                            (topic.includes("World")) ? ["world","edition_world","world"] : ["business","money_news_international","business"]

        getTasksBBC(bbc,topic)
        getTasksCNN(cnn,topic)
        getTasksSKY(sky,topic)

  })

  const handleSearch = useCallback (async (e) => { 
    //console.log(e);
    e.preventDefault();
    const headline = document.querySelector("#head").value;
    const start = document.querySelector("#start").value;

    if (headline.length == 0 && start.length == 0) {
      var topic = document.querySelector("#currtopic").textContent;
      console.log(topic);
      var [sky,cnn,bbc] = (topic.includes("Technology")) ? ["technology","edition_technology","technology"] : 
                          (topic.includes("World")) ? ["world","edition_world","world"] : ["business","money_news_international","business"]

      getTasksBBC(bbc,topic);
      getTasksCNN(cnn,topic);
      getTasksSKY(sky,topic);

    } else if (headline.length > 0 && start.length == 0) {
      setSkyItems(skyitems.filter(item => item.title.includes(headline))) ;
      setCnnItems(cnnitems.filter(item => item.title.includes(headline))) ;
      setBbcItems(bbcitems.filter(item => item.title.includes(headline))) ;
    } else if (headline.length == 0 && start.length > 0) { 
      setSkyItems(skyitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
      setCnnItems(cnnitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
      setBbcItems(bbcitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
    } else if (headline.length > 0 && start.length > 0) {
      setSkyItems(skyitems.filter(item => item.title.includes(headline))) ;
      setCnnItems(cnnitems.filter(item => item.title.includes(headline))) ;
      setBbcItems(bbcitems.filter(item => item.title.includes(headline))) ;
      setSkyItems(skyitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
      setCnnItems(cnnitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
      setBbcItems(bbcitems.filter(item => Date.parse(item.pubdate) > Date.parse(start))) ;
    }
    
    

    
  })

  const playVideo = useCallback (async (e) => {
    document.querySelector("#newsvideo").play();
    
  })


  
  return (
    <div className="App" >
      <div className="container">
            <header className="box">
                <nav className='mynav'> 
                  <ul>
                    <li ><Clock /> 
                    
                    
                    </li>
                    <li onClick={changeTopic} > <a href="#">Technology</a> </li>
                    <li onClick={changeTopic} > <a href="#">Markets</a> </li>
                    <li onClick={changeTopic} > <a href="#">World</a> </li>
                  </ul>
                </nav>
            </header>
            <nav className="box" >
              <div >
                
                    <div className='navCol'> 
                      <video id='newsvideo' width="30%" height="60%" muted onLoadStart={playVideo} controls >
                        <source src="./news.mp4" type="video/mp4"/>
                        <source src="./news.ogg" type="video/ogg"/>
                      Your browser does not support the video tag.
                      </video>
                    </div>

                    

                    <form action='' onSubmit={handleSearch} id="myform">
                      <label className="textClassic" htmlFor="fname">Headline contains :</label>
                      <input type="text" id="head" name="head" autoFocus/>
                      <label className="textClassic" htmlFor="start">Happened after :</label>
                      <input type="date" id="start" name="start"
                            min="1900-01-01"></input>
                      <button type="submit" value="submit" > Search </button>
                    </form>
                    
              
              </div>
                


            </nav>
            <article className="box" style={{"overflow": "hidden"}}>
                <div id='content'>
                  <SkyFeed id = "sky" items={skyitems}  img={"https://e3.365dm.com/skynews/logo.png"}/>
                  <BBCFeed id = "bbc" items={bbcitems}  img={"https://news.bbcimg.co.uk/nol/shared/img/bbc_news_120x60.gif"}/>
                  <CNNFeed id = "cnn" items={cnnitems}  img={"https://cdn.cnn.com/cnn/.e1mo/img/4.0/logos/logo_cnn_badge_2up.png"}/>
                </div>
      

            </article>
        </div>
        <footer id="lowerBar">
          <p id='currtopic' style={{"display":"none"}}>Markets</p>
          
          <Footer/>
        </footer>
    </div>
  ) 
}

export default App;
