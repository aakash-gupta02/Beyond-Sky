import Image from 'next/image'
import React from 'react'

const Logo = ({ size }) => {

    if (!size) size = 30;


    return (
        <div className="flex items-center gap-1">
            <Image
                src="/cloud-nasa.svg"
                alt="Logo"
                width={size}
                height={size}
            />
            {/* <span className="text-xl font-semibold tracking-tight">Beyond Sky!!</span> */}
          <span className="text-lg font-medium tracking-tight">Beyond Sky!!</span>

        </div>
    )
}

export default Logo