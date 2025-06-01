"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
    const [isInProjectHero, setIsInProjectHero] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const isProjectPage = pathname.startsWith('/projects/');

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const checkHeroSection = () => {
            if (!isProjectPage) return;

            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                const heroRect = heroSection.getBoundingClientRect();
                const isOverlapping = heroRect.top <= 0 && heroRect.top > -100;
                setIsInProjectHero(isOverlapping && isMobile);
            } else {
                setIsInProjectHero(false);
            }
        };

        checkMobile();
        checkHeroSection();

        window.addEventListener('resize', checkMobile);
        window.addEventListener('scroll', checkHeroSection);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('scroll', checkHeroSection);
        };
    }, [isProjectPage, isMobile]);

    const shouldApplyBlackFilter = isProjectPage && isMobile && isInProjectHero;

    return (
        <aside className="flex w-7 md:w-14 h-screen fixed z-10 site-logo">
            <div className="flex flex-col pt-4 px-1 md:px-2">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Weshark"
                        width={40}
                        height={40}
                        priority={false}
                        className="hero-section-logo"
                        style={{
                            filter: shouldApplyBlackFilter ? 'brightness(0) saturate(100%)' : 'none'
                        }}
                    />
                </Link>
            </div>
        </aside>
    );
}