import Link from 'next/link';

export default function Button({
    href,
    children,
    variant = 'primary',
    size = 'medium',
    className = '',
    onClick = null,
    newTab = false,
}) {
    // Define styling variants
    const variants = {
        primary: 'px-6 py-2 border-green_light bg-green_light border-2 rounded-full text-xs md:text-md uppercase text-green_dark hover:bg-transparent hover:text-green_light transition duration-400 ease-in-out',
        secondary: 'bg-transparent border-green_light text-green_light hover:bg-green_light hover:text-green_dark',
        dark: 'bg-[#1a1a1a] border-green_light text-green_light hover:bg-green_light hover:text-black',
    };

    const sizes = {
        small: 'px-4 py-1 text-xs',
        medium: 'px-6 py-2 text-sm',
        large: 'px-8 py-3 text-base',
    };

    const baseClasses = 'border-2 rounded-full uppercase transition duration-300 ease-in-out font-medium';

    // Combined classes
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link
                href={href}
                className={buttonClasses}
                target={newTab ? "_blank" : "_self"}
                rel={newTab ? "noopener noreferrer" : undefined}
            >
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={buttonClasses}>
            {children}
        </button>
    );
}