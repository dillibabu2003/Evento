import React from "react";
import "./History.css";


const History = () => {
  const historyList=[{name:"spark 2023",date:"7th august 2023",description:"It was an technical sysposium conducted gopichettipalayam college of engineering"},
                     {name:"techno 2k23",date:"26th june 2023",description:"it was a web development hackathon conducted by unjappalyam institute of technology"}]
  return (
    <div>
         {historyList.map((item,index)=>{
                      return(
                        <div className="history-item">
                        <div className="history-pic">
                          <img
                            className="history-pic-img"
                            src="https://eventmie.classiebit.com/storage/events/September2019/15686248018mQMFJLY59.jpg"
                            alt="no image1"
                          />
                        </div>
                        <div className="history-content">
                          <div className="history-content-date">
                            <h4>
                              <b>{item.date}</b>
                            </h4>
                          </div>
                          <div className="history-content-description">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                  )
              })
            }
    </div>
  );
};

export default History;
