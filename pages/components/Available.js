import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import Link from "next/link";
import Image from "next/image";

import IconWave from "../../public/icon-wave.svg";

const Available = () => {
	const [isOpen, setOpen] = useState(false)

  return (
	<>
		<div className="section_available">
			<div className="container">
				<div className="available_row">
					<div className="available_text">
						<div className="subtitle_holder">Learn About My Workflow:</div>
						<div className="title_holder">
							<h2>I&#39;m always hungry for creativity. Available for hire</h2>
						</div>
					</div>
					<div className="available_btn">
						<button className="btn_secondary" onClick={()=> setOpen(true)}>
							<Image
							src={IconWave}
							alt="wave"
							width={31}
							height={31}
							/>
							Wave Me</button>
					</div>
				</div>
			</div>
			{/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}
		</div>
	</>
  )
}

export default Available;
