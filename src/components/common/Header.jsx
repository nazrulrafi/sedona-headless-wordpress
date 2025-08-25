'use client';
import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

function Header({headerMeta}) {
    const pathname = usePathname();
    const menu = [
        { name: "Home", path: "/" },
        { name: "Works", path: "/works" },
        { name: "Services", path: "/services" },
        { name: "Blog", path: "/blog" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];
    return (
        <header className="nav">
            <div className="nav__holder nav--sticky">
                <div className="container-fluid nav__container nav__container--side-padding">
                    <div className="flex-parent">

                        <div className="nav__header">

                            <a href="/" className="logo-container flex-child">
                                <img
                                    className="logo"
                                    src={headerMeta?.logo_dark || "/assets/img/logo.png"}
                                    srcSet={`${headerMeta?.logo_dark || "/assets/img/logo.png"} 1x, ${headerMeta?.logo_dark || "/assets/img/logo@2x.png"} 2x`}
                                    alt="logo"
                                />
                            </a>


                            <button type="button" className="nav__icon-toggle" id="nav__icon-toggle"
                                    data-toggle="collapse" data-target="#navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="nav__icon-toggle-bar"></span>
                                <span className="nav__icon-toggle-bar"></span>
                                <span className="nav__icon-toggle-bar"></span>
                            </button>
                        </div>


                        <nav id="navbar-collapse" className="nav__wrap collapse navbar-collapse">
                            <ul className="nav__menu">
                                {menu.map((item) => (
                                    <li
                                        key={item.path}
                                        className={`nav__dropdown ${pathname === item.path ? "active" : ""}`}
                                    >
                                        <Link href={item.path} aria-haspopup="true">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="nav__phone nav__phone--mobile d-lg-none">
                                <span className="nav__phone-text">Call us:</span>
                                <a href="tel:1-800-995-3959" className="nav__phone-number">1-800-995-3959</a>
                            </div>

                            <div className="nav__socials nav__socials--mobile d-lg-none">
                                <div className="socials">
                                    <a href="#" className="social social-twitter" aria-label="twitter"
                                       title="twitter" target="_blank"><i className="ui-twitter"></i></a>
                                    <a href="#" className="social social-facebook" aria-label="facebook"
                                       title="facebook" target="_blank"><i className="ui-facebook"></i></a>
                                    <a href="#" className="social social-youtube" aria-label="youtube"
                                       title="google plus" target="_blank"><i className="ui-youtube"></i></a>
                                    <a href="#" className="social social-instagram" aria-label="instagram"
                                       title="instagram" target="_blank"><i className="ui-instagram"></i></a>
                                </div>
                            </div>
                        </nav>


                        <div className="nav__phone nav--align-right d-none d-lg-block">
                            <span className="nav__phone-text">Call us:</span>
                            <a href={`tel:${headerMeta.contact_number}`} className="nav__phone-number">{headerMeta.contact_number}</a>
                        </div>

                        <div className="nav__socials d-none d-lg-block">
                            <div className="socials">
                                <a href={headerMeta.twitter} className="social social-twitter" aria-label="twitter" title="twitter"
                                   target="_blank"><i className="ui-twitter"></i></a>
                                <a href={headerMeta.facebook} className="social social-facebook" aria-label="facebook"
                                   title="facebook" target="_blank"><i className="ui-facebook"></i></a>
                                <a href={headerMeta.youtube}  className="social social-youtube" aria-label="youtube"
                                   title="google plus" target="_blank"><i className="ui-youtube"></i></a>
                                <a href={headerMeta.instagram}  className="social social-instagram" aria-label="instagram"
                                   title="instagram" target="_blank"><i className="ui-instagram"></i></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;