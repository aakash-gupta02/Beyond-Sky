import Image from 'next/image';
import React from 'react';

const Logo = ({ size }) => {
    if (!size) size = 30;

    return (
        <div className="flex items-center gap-2 min-w-0">
            <Image
                src="/cloud-nasa.svg"
                alt="Logo"
                width={size}
                height={size}
                className="flex-shrink-0"
            />
            <span
                className="text-lg font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis"
                style={{ minWidth: 0 }}
            >
                Beyond Sky!!
            </span>
        </div>
    );
};

export default Logo;