import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png"
import twitterLogo from "../assets/owner/twitter.png"
import moreIcon from "../assets/owner/more.png"
import "./Main.css"


export const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0])
	useEffect(() => {
		setActivePunk(punkListData[selectedPunk])
	}, [selectedPunk, punkListData])

	return (
		<div>
			<div className='main'>
				<div className='mainContent'>
					<div className='punkHighlight'>
						<div className='punkContainer'>
							<img className='selectedPunk'
								src={activePunk.image_original_url}
							/>
						</div>
					</div>
					<div class='punkDetails' style={{ color: '#fff' }}>
						<div className='title'> {activePunk.name}
							<span className='itemNumber'> #{activePunk.token_id}</span>
						</div>
						<div className='owner'>
							<div className="ownerImageContainer">
								<img src="https://lh3.googleusercontent.com/WCevQXnxgJbdeOqzWj0CxG6lNItajZvdZDNpuo5pezJqANejiY-5BU6AQPRwtPcrv7C7fi30-M2oOAo4krsmQBzJA8Zl2-UqlHjeaAc=w361" />
							</div>
							<div className='ownerDetails'>
								<div className='ownerNameAndHandle'>
									<div>{activePunk.owner.address}</div>
									<div className='ownerHandle'>
										@jakobniinja
									</div>
								</div>

								<div className="ownerLink">
									<img src={instagramLogo} alt='' />
								</div>
								<div className="ownerLink">
									<img src={twitterLogo} alt='' />
								</div>
								<div className="ownerLink">
									<img src={moreIcon} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Main;
