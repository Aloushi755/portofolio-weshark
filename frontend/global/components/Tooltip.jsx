"use client";

import React, { useState } from 'react';

export function Tooltip({ children, text }) {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            {children}

            {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded whitespace-nowrap z-50 border border-green_light">
                    {text}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-t-[6px] border-l-[6px] border-r-[6px] border-t-green_light border-l-transparent border-r-transparent"></div>
                </div>
            )}
        </div>
    );
}
