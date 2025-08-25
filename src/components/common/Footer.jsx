import React from 'react';

function Footer({footerMeta}) {
    return (
        <footer className="footer bg-dark-overlay" style={{backgroundImage: "url('/assets/img/footer/1.jpg')"}}>
            <div className="container-fluid">
                <div className="footer__widgets">
                    <div className="row">

                        <div className="col-lg-3 col-md-3">
                            <div className="widget widget-about-us">

                                <a href="index.html" className="logo-container flex-child">
                                    <img
                                        className="logo"
                                        src={footerMeta?.logo_white || "/assets/img/logo.png"}
                                        srcSet={`${footerMeta?.logo_white || "/assets/img/logo.png"} 1x, ${footerMeta?.logo_white || "/assets/img/logo@2x.png"} 2x`}
                                        alt="logo"
                                    />
                                </a>
                            </div>
                        </div>


                        <div className="col-lg-2 col-md-3">
                            <div className="widget widget_nav_menu">
                                <ul>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="widget widget_nav_menu">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                    <li><a href="#">Career</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 offset-lg-2 col-md-3">
                            <div className="widget">
                                <div className="socials">
                                    <a href={footerMeta.twitter} className="social social-twitter" aria-label="twitter"
                                       title="twitter" target="_blank"><i className="ui-twitter"></i></a>
                                    <a href={footerMeta.facebook} className="social social-facebook" aria-label="facebook"
                                       title="facebook" target="_blank"><i className="ui-facebook"></i></a>
                                    <a href={footerMeta.youtube} className="social social-youtube" aria-label="youtube"
                                       title="google plus" target="_blank"><i className="ui-youtube"></i></a>
                                    <a href={footerMeta.instagram} className="social social-instagram" aria-label="instagram"
                                       title="instagram" target="_blank"><i className="ui-instagram"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div className="footer__bottom">
                <div className="container-fluid text-right text-md-center">
						<span className="copyright">
							{footerMeta.footer_info}
						</span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;