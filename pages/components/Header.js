import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import LogoImage from '../../public/logo.svg';
import headerBgImage from '../../public/bg-header.png';

// import styles from '../../styles/Header.module.css';s

const Header = () => {
	const router = useRouter();

	// const styling = {
	// 	backgroundImage: "url('./bg-header.png')",
	// 	width:"100%",
	// 	height:"100%"
	// }

  return (
	<>
		<header className="site_header">
			<div className="header_bg">
				<Image
					src={headerBgImage}
					alt="Picture of the author"
					width={1446}
					height={366}
				/>
			</div>
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand">
							<Image
								src={LogoImage}
								alt="Picture of the author"
								width={197}
								height={39}
							/>
						</a>
					</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarMain">
						<ul className="navbar-nav align-items-center ms-auto">
							<li className="nav-item">
								<Link href="/">
									<a className={router.pathname == "/" ? "active" : ""} aria-current="page" >Home</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/portfolio">
									<a className={router.pathname == "/portfolio" ? "active" : ""}>Portfolio</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/about">
									<a className={router.pathname == "/about" ? "active" : ""}>About</a>
								</Link>
							</li>
							<li className="nav-item">
								<Link href="/blog">
									<a className={router.pathname == "/blog" ? "active" : ""}>Blog</a>
								</Link>
							</li>
							<li className="nav-item nav-item--login">
								<Link href="/login">
									<a className={router.pathname == "/login" ? "active" : ""}>Login</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	</>
  )
}

export default Header;