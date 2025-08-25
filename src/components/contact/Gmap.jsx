import React from 'react';

function Gmap(props) {
    return (
        <div id="google-map" className="gmap">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.9678933939613!2d120.97186767574124!3d14.600904877067991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca1023917729%3A0xfb3589db486b911!2sV.%20Tytana%20St%2C%20Binondo%2C%20Manila%2C%201006%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sbd!4v1755957630427!5m2!1sen!2sbd"
                style={{width: "100%"}} height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

export default Gmap;