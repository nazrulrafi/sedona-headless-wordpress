import React from 'react';

function Slider({sliderData}) {
    return (
        <div className="rev_slider_wrapper">
            <div className="rev_slider" id="slider-1" data-version="5.0">
                <ul>
                    {sliderData.map((item, index) => {
                        return (
                            <li data-fstransition="fade"
                                data-transition="fade"
                                data-easein="default"
                                data-easeout="default"
                                data-slotamount="1"
                                data-masterspeed="1200"
                                data-delay="8000"
                                data-title="Modern Living Room"
                                key={index}
                            >

                                <img src={item.banner_image}
                                     alt=""
                                     data-bgrepeat="no-repeat"
                                     data-bgfit="cover"
                                     data-bgparallax="7"
                                     className="rev-slidebg"
                                />


                                <div className="tp-caption hero-text"
                                     data-x="30"
                                     data-y="center"
                                     data-voffset="[-140,-120,-100,-180]"
                                     data-fontsize="[72,62,52,46]"
                                     data-lineheight="[72,62,52,46]"
                                     data-width="[none, none, none, 300]"
                                     data-whitespace="[nowrap, nowrap, nowrap, normal]"
                                     data-frames='[{
									"delay":1000,
									"speed":900,
									"frame":"0",
									"from":"y:150px;opacity:0;",
									"ease":"Power3.easeOut",
									"to":"o:1;"
									},{
									"delay":"wait",
									"speed":1000,
									"frame":"999",
									"to":"opacity:0;","ease":"Power3.easeOut"
								}]'
                                     data-splitout="none">{item.title.toUpperCase()}<span className="hero-dot">.</span>
                                </div>


                                <div className="tp-caption small-text"
                                     data-x="30"
                                     data-y="center"
                                     data-voffset="[-40,-30,-20,0]"
                                     data-fontsize="[21,21,21,21]"
                                     data-lineheight="34"
                                     data-width="[none, none, none, 300]"
                                     data-whitespace="[nowrap, nowrap, nowrap, normal]"
                                     data-frames='[{
									"delay":1100,
									"speed":900,
									"frame":"0",
									"from":"y:150px;opacity:0;",
									"ease":"Power3.easeOut",
									"to":"o:1;"
									},{
									"delay":"wait",
									"speed":1000,
									"frame":"999",
									"to":"opacity:0;","ease":"Power3.easeOut"
								}]'
                                >{item.subtitle.split(" ").map((word,ind)=>(
                                    <React.Fragment key={ind}>
                                        {word}{' '}
                                        {(ind + 1) % 10 === 0 ? <br /> : null}
                                    </React.Fragment>
                                ))}
                                </div>


                                <div className="tp-caption"
                                     data-x="30"
                                     data-y="center"
                                     data-voffset="[60,60,60,100]"
                                     data-lineheight="55"
                                     data-hoffset="0"
                                     data-frames='[{
										"delay":1200,
										"speed":900,
										"frame":"0",
										"from":"y:150px;opacity:0;",
										"ease":"Power3.easeOut",
										"to":"o:1;"
										},{
										"delay":"wait",
										"speed":1000,
										"frame":"999",
										"to":"opacity:0;","ease":"Power3.easeOut"
									}]'
                                ><a href={item.button_link} className='btn btn--lg btn--color'>{item.button_title}</a>
                                </div>

                            </li>
                        )
                    })}

                </ul>
            </div>
        </div>
    );
}

export default Slider;