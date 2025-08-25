import React from 'react';

function Partners({partners}) {
    return (
        <div className="partners bg-light text-center">
            <div className="container">
                <div className="row">
                    {partners.map((item,index) => (
                        <div key={index} className="col-sm-2">
                            <a href="#">
                                <img src={item} alt=""/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Partners;