import React from 'react'
import './Manage.css'

import Close from "./Close.png";
import eventImage from "./noprofil.jpg";
import { useState, useEffect} from 'react';


const Manage = () => {
 
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [eventsVisible, setEventsVisible] =useState(false);
  const [displaySearchResult, setDisplaySearchResult]=useState([]);
  const [searchval,setSeacrh]=useState([]);
  
  const [images, setImages] = useState([]) ;
  const [imageURLs, setImageURLs] = useState([]) ;

  const eventsList=[{date:"26/10/2003",title:"techno 2k23",description:"This is an technical symposium conducted by sri eshwar college of engineering to teach students about the technologies"},
  {date:"26/10/2003",title:"techno 2k23",description:"This is an technical symposium conducted by sri eshwar college of engineering to teach students about the technologies"},
  {date:"26/10/2003",title:"techno 2k23",description:"This is an technical symposium conducted by sri eshwar college of engineering to teach students about the technologies"}]
  
  const searchList=[{date:"26/10/2003",title:"techno 2k23",description:"search result 1"},
  {date:"26/10/2003",title:"techno 2k23",description:"search result 2"},
  {date:"26/10/2003",title:"techno 2k23",description:"search result 3"}]
  
    
    useEffect ( () => {
    if (images. length < 1) return;
    const newImageUrls = [];
    images. forEach (image => newImageUrls.push (URL. createObjectURL (image) )) ;
    setImageURLs (newImageUrls);
     }, [images]);

    function onImageChange (e) {
    setImages ([...e.target.files]);
    }

    const onSearchStore=(e)=>{
      console.log(searchval);
      setSeacrh(e.target.value);
  }
  const handleButtonClick = () => {
   
      setEventsVisible(false)
      setDisplaySearchResult(false)
 
    setPopupVisible(true);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };
  
  const displayEventsClick=()=>{
   
      setPopupVisible(false);
      setDisplaySearchResult(false);
   
    setEventsVisible(true);
  };

  const displaySearchResultClick=()=>{
    
        setPopupVisible(false);
        setEventsVisible(false);
        setDisplaySearchResult(true);
  }
  const closeEventsClick=()=>{
     setEventsVisible(false);
  };

  return (
    <div className='header'>
    <div className='overall-wrapper'>
      <div className="events-btn" onClick={displayEventsClick}>
           <div>View All</div>
      </div>
      <div className="events-btn" onClick={handleButtonClick}>
          <div>Add Events</div>
      </div>
      <div className="box">
           <input type="text" placeholder="Search here..."  onChange={onSearchStore} ></input>
          
          <i  onClick={displaySearchResultClick}class="fas fa-search"></i> 
        </div>
    </div>
    <div>
        {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <img
              src={Close}
              alt="Close"
              className="close"
              onClick={handleCloseClick}
            ></img>
            { imageURLs.map (imageSrc => <img src={imageSrc}/>) }
            <input type="file" multiple accept=" image/*" onChange={onImageChange}/>
            <input type="text" placeholder="Event Name"></input>
            <input type="date" placeholder="Date"></input>
            <textarea name="paragraph_text" placeholder="Description about the event" cols="37" rows="8"></textarea>
             <div className='add-event-btn'>Add Event + </div>
          </div>
        </div>
      )}
      {
        eventsVisible && (
                <div>
                  <div  className='events-list'>
                    {eventsList.map((item,index)=>{
                      return(
                  <div className="feedback-item">
                          <div className="feedback-top">
                            <div className="feedback-username">
                              <h3>{item.title}</h3>
                             </div>
                           <div className="feedback-date">
                     <h5>{item.date}</h5>
                </div>
                </div>
              <div className="feedback-text">
                <h4>
                 {item.description}
                </h4>
              </div>
            </div>
                  )
              })
            }
              </div>
             </div>
        )
      }
      {
        displaySearchResult && (
                <div>
                  <div  className='events-list'>
                    {searchList.map((item,index)=>{
                      return(
                  <div className="feedback-item">
                          <div className="feedback-top">
                            <div className="feedback-username">
                              <h3>{item.title}</h3>
                             </div>
                           <div className="feedback-date">
                     <h5>{item.date}</h5>
                </div>
                </div>
              <div className="feedback-text">
                <h4>
                 {item.description}
                </h4>
              </div>
            </div>
                  )
              })
            }
              </div>
             </div>
        )
      }
        </div>
    </div>
  )
}

export default Manage