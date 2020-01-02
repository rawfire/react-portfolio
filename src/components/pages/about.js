import React from 'react';
import profilepicture from "../../../static/assets/images/bio/selfport1.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilepicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                Great man theory
                From Wikipedia, the free encyclopedia
                Jump to navigationJump to search
                "Great Man" redirects here. For other uses, see Great Man (disambiguation).
                Napoléon Bonaparte, an exemplary great man, who determined the "Napoleonic" era of history
                The great man theory is a 19th-century idea according to which history can be largely explained by the impact of great men, or heroes; highly influential and unique individuals who, due to their natural attributes, such as superior intellect, heroic courage, or divine inspiration, have a decisive historical effect. The theory is primarily attributed to the Scottish philosopher and essayist Thomas Carlyle who gave a series of lectures on heroism in 1840, later published as On Heroes, Hero-Worship, and The Heroic in History, in which he states:
                Universal History, the history of what man has accomplished in this world, is at bottom the History of the Great Men who have worked here. They were the leaders of men, these great ones; the modellers, patterns, and in a wide sense creators, of whatsoever the general mass of men contrived to do or to attain; all things that we see standing accomplished in the world are properly the outer material result, the practical realization and embodiment, of Thoughts that dwelt in the Great Men sent into the world: the soul of the whole world's history, it may justly be considered, were the history of these.
                
            </div>
        </div>
    );
}