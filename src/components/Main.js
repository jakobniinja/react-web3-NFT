import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png"
import twitterLogo from "../assets/owner/twitter.png"
import moreIcon from "../assets/owner/more.png"
import "./Main.css"


const Main = ({ selectedPunk,punkListData}) => {
    const [activePunk, setactivePunk] = useState(punkListData[0])

    useEffect(() => {
       setactivePunk(punkListData[selectedPunk]) 
    }, [punkListData, selectedPunk])
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{color: "#fff"}} >
            <div className="title">
                {activePunk.name}
            </div>
            <span className="itemNumber">

    {`#${activePunk.token_id}`}

            </span>
        </div>

        <div className="owner">
            <div className="ownerImageContainer" >
                <img src="https://i.pinimg.com/236x/21/f5/55/21f5556f85817aed5d50f5a7e7787020.jpg" alt=""/>
            </div>

            <div className="ownerDetails">
                <div className="ownerNameAndHandle">
                    <div>0x0773Fc2b3849583dE0fbc9F6CF39c667785467E0</div>
                    <div className="ownerHandle">
                        @jakob yaro

                    </div>
                </div>
                    <div className="ownerLink">
                        <img src={instagramLogo} alt=""/>
                    </div>

                    <div className="ownerLink">
                        <img src={twitterLogo} alt=""/>
                    </div>
                    <div className="ownerLink">
                        <img src={moreIcon} alt=""/>
                    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
