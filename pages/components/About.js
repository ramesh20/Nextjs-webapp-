import Image from 'next/image';
import aboutImage from '../../public/img-about.png';
import playIconImage from '../../public/icon-play.svg';

const About = () => {
  return (
	<>
		<div className="section_about">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="about_image">
							<Image
								src={aboutImage}
								alt="about image"
								width={704}
								height={556}
							/>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about_desc">
							<div className="title_holder">
								<h2>Know About UiExpert</h2>
							</div>
							<p>I always follow professional Workflow and provide you best service with resealable costs.</p>
							<div className="btn_holder">
								<a href="#">
									<Image
										src={playIconImage}
										alt="play icon"
										width={75}
										height={75}
									/>
									<span className="text">See My video Brif</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
  )
}

export default About;
