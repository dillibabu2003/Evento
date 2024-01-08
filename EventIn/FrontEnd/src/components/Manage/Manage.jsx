import React from "react";
import "./Manage.css";

import Close from "./Close.png";
import eventImage from "./noprofil.jpg";
import { useState, useEffect } from "react";

const Manage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [eventsVisible, setEventsVisible] = useState(false);


  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const eventsList = [
    {
      date: "26/1/2024",
      title: "techno 2k24",
      description:
        "This is an technical symposium conducted by sri eshwar college of engineering to teach students about the technologies and the various other activities that are been there for the improvement of the students.",
    },
    {
      date: "6/3/2024",
      title: "CarMakano 2k24",
      description:
        "This is an technical symposium conducted by Carto college of engineering to teach students about the technologies and the inovations.",
    },
    {
      date: "2/8/2024",
      title: "MahindraTechno 2k24",
      description:
        "This is an technical symposium conducted by Mahindra college of engineering to teach students about the technologies",
    },
  ];

  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }

  const handleButtonClick = () => {
    if (eventsVisible) {
      setEventsVisible(false);
    }
    setPopupVisible(true);
  };

  const handleCloseClick = () => {
    setPopupVisible(false);
  };

  const displayEventsClick = () => {
    if (isPopupVisible) {
      setPopupVisible(false);
    }
    setEventsVisible(true);
  };

  const [isRegistered, setIsRegistered] = useState(false);
  const handleClick = () => {
    setIsRegistered(!isRegistered);
  };



  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {

    const filteredItems = eventsList.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    setSearchResults(filteredItems);
  };



  return (
    <div className="header">
      <div className="overall-wrapper">
        <div className="events-btn" onClick={displayEventsClick}>
          <div>View All</div>
        </div>
        <div className="events-btn" onClick={handleButtonClick}>
          <div>Add Events</div>
        </div>

        <div className="box">
          <input
            type="text"
            placeholder="Search here..."
            value={searchInput}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch} className="search-button">
            <i className="fas fa-search"></i>
          </button>
          
        </div>



      </div>


              
      <div>
          {searchResults.map((result) => (
            <div key={result.title}>
              <div className="feedback-item">
                <div className="feedback-top">
                  <div className="feedback-username">
                    <h3>{result.title}</h3>
                  </div>
                  <div className="feedback-date">
                    <h5>{result.date}</h5>
                  </div>
                </div>
                <div className="feedback-text">
                  <h4>{result.description}</h4>
                </div>
                <div className="register-unregister">
                  <button
                    className="register-unregister-button"
                    onClick={handleClick}
                  >
                    {isRegistered ? "Unregister" : "Register"}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
              {imageURLs.map((imageSrc) => (
                <img src={imageSrc} />
              ))}
              <input
                type="file"
                multiple
                accept=" image/*"
                onChange={onImageChange}
              />
              <input type="text" placeholder="Event Name"></input>
              <input type="date" placeholder="Date"></input>
              <textarea
                name="paragraph_text"
                placeholder="Description about the event"
                cols="37"
                rows="8"
              ></textarea>
              <div className="add-event-btn">Add Event + </div>
            </div>
          </div>
        )}
        {eventsVisible && (
          <div>
            <div className="events-list">
              {eventsList.map((item, index) => {
                return (
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
                      <h4>{item.description}</h4>
                    </div>
                    <div className="register-unregister">
                      <button
                        className="register-unregister-button"
                        onClick={handleClick}
                      >
                        {isRegistered ? "Unregister" : "Register"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manage;
