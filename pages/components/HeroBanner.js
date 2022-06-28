import Link from "next/link";
import Image from "next/image";

import IconWave from "../../public/icon-wave.svg";
import BgBanner from "../../public/img-banner.svg";

const HeroBanner = () => {
  return (
    <>
        <div className="section_hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero_desc">
                            <h1>Provide You best <br />Best Ui Service</h1>
                            <p>Mobile App Design and Development Studio. You can hire us</p>
                            <div className="hero_btn">
                                <Link href="/about">
                                    <a className="btn_secondary">
                                    <Image
                                    src={IconWave}
                                    alt="wave"
                                    width={31}
                                    height={31}
                                     />
                                    Wave Me</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero_bg">
                 <Image
                    src={BgBanner}
                    alt="hero background"
                    width={801}
                    height={527}
                        />
            </div>
        </div>
    </>
  )
}

export default HeroBanner;