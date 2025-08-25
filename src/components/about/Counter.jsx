import React from 'react';

function Counter({counter}) {
    return (
        <div className="container">
            <div className="statistic-wrap">
                <div className="row">
                    {counter.map((item, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="statistic">
                                <span className="statistic__number">{item.number}</span>
                                <h5 className="statistic__title">{item.title}</h5>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Counter;