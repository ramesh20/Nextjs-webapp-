import Image from 'next/image';
import LogoImage from '../../public/logo.svg';

import facebookImage from '../../public/icon-facebook.svg';
import twitterImage from '../../public/icon-twitter.svg';
import googleplusImage from '../../public/icon-google-plus.svg';
import youtubeImage from '../../public/icon-youtube.svg';

const Footer = () => {
  return (
	<>
	<footer className="site_footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-12">
					<div className="foo_logo">
						<Image
							src={LogoImage}
							alt="Picture of the author"
							width={197}
							height={39}
						/>
					</div>
					<p>The full-stack design team who focuses on digital products whatever they are.</p>
					<ul className="social_share">
						<li><a href="#">
							<Image
								src={facebookImage}
								alt="Picture of the author"
								width={8}
								height={15}
							/>
						</a></li>
						<li><a href="#">
							<Image
								src={twitterImage}
								alt="Picture of the author"
								width={14}
								height={12}
							/>
						</a></li>
						<li><a href="#">
							<Image
								src={googleplusImage}
								alt="Picture of the author"
								width={23}
								height={14}
							/>
						</a></li>
						<li><a href="#">
							<Image
								src={youtubeImage}
								alt="Picture of the author"
								width={16}
								height={12}
							/>
						</a></li>
					</ul>
				</div>
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<h4>About Us</h4>
							<ul>
								<li><a href="#">We're Hiring</a></li>
								<li><a href="#">Our Customer</a></li>
								<li><a href="#">Blog Post</a></li>
								<li><a href="#">Help & Support</a></li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-6">
							<h4>Community</h4>
							<ul>
								<li><a href="#">About us</a></li>
								<li><a href="#">Our clients</a></li>
								<li><a href="#">Legal notic</a></li>
							</ul>
						</div>
						<div className="col-lg-4 col-md-6">
							<h4>Contact</h4>
							<ul>
								<li><a href="tel:+123 456 789 00">+123 456 789 00</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="copyright_text">
						<p>&copy; 2019 all rights reserved</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
	</>
  )
}

export default Footer;