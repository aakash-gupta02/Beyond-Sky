import React from 'react';

const BackgroundLayer = () => {
    return (
        <div className="fixed inset-0 -z-10">
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(1200px 500px at 20% -10%, rgba(59,130,246,.20), transparent 60%), radial-gradient(1000px 600px at 90% 10%, rgba(168,85,247,.18), transparent 60%)'
                }}
            ></div>
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            ></div>
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.6) 60%, rgba(0,0,0,.9) 100%)'
                }}
            ></div>
        </div>
    );
};

export default BackgroundLayer;