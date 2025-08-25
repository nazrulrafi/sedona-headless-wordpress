import React from 'react';

function ProjectInfo({projectInfo}) {
    return (
        <div className="col-lg-4 project__details">
            <ul className="project__meta">
                <li className="project__meta-item">
                    <span className="project__meta-label">Client:</span>
                    <span className="project__meta-value">{projectInfo.metaInfo.client_name.charAt(0).toUpperCase() + projectInfo.metaInfo.client_name.slice(1)}</span>
                </li>
                <li className="project__meta-item">
                    <span className="project__meta-label">Date:</span>
                    <span className="project__meta-value">{projectInfo.metaInfo.date}</span>
                </li>
                <li className="project__meta-item">
                    <span className="project__meta-label">Category:</span>
                    <span className="project__meta-value">{projectInfo.categories.map((item,ind)=>item).join(",")}</span>
                </li>
                <li className="project__meta-item">
                    <span className="project__meta-label">Location:</span>
                    <span className="project__meta-value">{projectInfo.metaInfo.location}</span>
                </li>
            </ul>
            <h6 className="share-label">Share:</h6>
            <div className="socials">
                <a href="#" className="social social-twitter" aria-label="twitter" title="twitter"
                   target="_blank"><i className="ui-twitter"></i></a>
                <a href="#" className="social social-facebook" aria-label="facebook" title="facebook"
                   target="_blank"><i className="ui-facebook"></i></a>
                <a href="#" className="social social-youtube" aria-label="youtube" title="google plus"
                   target="_blank"><i className="ui-youtube"></i></a>
                <a href="#" className="social social-instagram" aria-label="instagram" title="instagram"
                   target="_blank"><i className="ui-instagram"></i></a>
            </div>
        </div>

    );
}

export default ProjectInfo;