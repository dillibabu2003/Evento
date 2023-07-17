import React from "react";
import './Feedback.css'


const Feedback = () => {
  const feedbackList=[{name:"pagal",date:"23/10/2023",feedback:"the website is very good and responsive"},
{name:"raghu",date:"30/10/2023",feedback:"the website user interface is awesome and want more functionalities"}]
  return (
    <div>
       {feedbackList.map((item,index)=>{
                      return(
                        <div>
                        <div className="feedback-item">
                          <div className="feedback-top">
                            <div className="feedback-username">
                              <h3>{item.name}</h3>
                            </div>
                            <div className="feedback-date">
                              <h5>{item.date}</h5>
                            </div>
                          </div>
                          <div className="feedback-text">
                            <h4>
                              {item.feedback}
                            </h4>
                          </div>
                        </div>
                      </div>
           )
              })
            }
    </div>
  );
};

export default Feedback;
