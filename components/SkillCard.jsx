import React from 'react';

const SkillCard = ({ title, description, imageSrc }) => (
    <article>
        <div>
            <img loading='lazy' src={imageSrc} alt={title} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </article>
);

export default SkillCard;
