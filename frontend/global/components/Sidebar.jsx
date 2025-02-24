"use client";
import React from 'react';
import Image from 'next/image';

export function Sidebar() {
    return (
        <aside className="flex w-8 md:w-14 h-screen fixed z-10">
            <div className="flex flex-col pt-4 px-1 md:px-2">
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
}
