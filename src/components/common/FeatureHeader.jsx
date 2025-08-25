import React from 'react';

function FeatureHeader({featureHeaderContent}) {
    function toCapitalizeWords(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <section
            className="page-title bg-dark-overlay text-center"
            style={{backgroundImage: `url(${featureHeaderContent.featureImage})`}}
        >
            <div className="container">
                <div className="page-title__holder">
                    <h1 className="page-title__title">
                        {toCapitalizeWords(featureHeaderContent.title)}
                    </h1>
                    <p className="page-title__subtitle"
                       dangerouslySetInnerHTML={{__html: featureHeaderContent.content}}/>
                </div>
            </div>
        </section>
    );
}

export default FeatureHeader;