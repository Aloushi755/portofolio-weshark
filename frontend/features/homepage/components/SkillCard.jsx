"use client";
import React from 'react';

export function SkillCard({ title, description, imageSrc }) {
    return (
        <article>
            <div>
                <img loading='lazy' src={imageSrc} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
