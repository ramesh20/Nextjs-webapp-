import Image from "next/image";

// import { Records } from './../json/Records.json';

import websiteuiImage from '../../public/website-ui.svg';
import redesignImage from '../../public/redesign.svg';
import applicationuiImage from '../../public/application-ui.svg';
import mobileappImage from '../../public/app.svg';
import webappImage from '../../public/web-app-ui.svg';
import webelementsImage from '../../public/web-elements.svg';


const OurServices = () => {
  return (
	<>
		<div className="secion_ourservice">
			<div className="container">
				<div className="ourservice_top">
					<div className="subtitle_holder">OUR SERVICES</div>
					<div className="title_holder">
						<h2>We Provide Best Quality Service </h2>
					</div>
					<p>Our commitment to quality ensures that your applications get the best UI design possible. UI/UX design is more than just pixels and animations, but the entire application experience.</p>
				</div>
				<div className="row ourservice_row">
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card">
							<div className="ourservice_image">
								<Image
									src={websiteuiImage}
									alt="Picture of the author"
									width={100}
									height={100}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">Website Ui</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card ourservice_card--redesign">
							<div className="ourservice_image">
								<Image
									src={redesignImage}
									alt="Picture of the author"
									width={100}
									height={109}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">ReDesign</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card ourservice_card--applicationui">
							<div className="ourservice_image">
								<Image
									src={applicationuiImage}
									alt="Picture of the author"
									width={100}
									height={116}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">Application Ui</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card ourservice_card--mobileapp">
							<div className="ourservice_image">
								<Image
									src={mobileappImage}
									alt="Picture of the author"
									width={100}
									height={106}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">Mobile App Ui</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card ourservice_card--webui">
							<div className="ourservice_image">
								<Image
									src={webappImage}
									alt="Picture of the author"
									width={100}
									height={91}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">Web App Ui</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ourservice_card ourservice_card--webelements">
							<div className="ourservice_image">
								<Image
									src={webelementsImage}
									alt="Picture of the author"
									width={100}
									height={116}
								/>
							</div>
							<div className="ourservice_desc">
								<div className="ourservice_title">Web Elements</div>
								<p>Fast, Powerful & Most Secure Network Solutions for Smart Home & Businesses</p>
								<div className="ourservice_btn">
									<a href="#" className="btn_white">Read More</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default OurServices;
