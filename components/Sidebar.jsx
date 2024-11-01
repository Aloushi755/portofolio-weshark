import React from 'react';

const Sidebar = () => (
    <aside className="flex w-10 md:w-12 h-screen bg-green_medium fixed z-30">
        <div className="flex flex-col pt-4 px-2">
            <a href="#"><img loading='lazy' src="/logo.png" alt="Weshark" /></a>
        </div>
    </aside>
);

export default Sidebar;
