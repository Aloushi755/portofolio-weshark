import React from 'react';
import Image from 'next/image';

const Sidebar = () => (
    <aside className="flex w-8 md:w-12 h-screen bg-green_medium fixed z-30">
        <div className="flex flex-col pt-4 px-2">
            <a href="#">
                <Image
                    src="/logo.png"
                    alt="Weshark"
                    width={40}
                    height={40}
                    priority={false}
                />
            </a>
        </div>
    </aside>
);

export default Sidebar;
