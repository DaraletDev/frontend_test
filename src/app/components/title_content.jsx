import React from 'react';

const TitleContent = ({ title, justifyEnd }) => {
    const alignRight = justifyEnd ? 'text-right' : '';
    return (
        <div className={`pb-5 ${justifyEnd ? 'flex justify-end' : ''}`}>
            <div className="sm:w-1/2">
                <h2 className={`text-slate-800 font-extrabold text-5xl pb-5 ${alignRight}`}>
                    {title}
                </h2>

                <p className={`font-semibold text-slate-400 text-md pb-10 ${alignRight}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi veritatis quisquam iste at minus. Esse repellat
                    vitae natus cum amet ut mollitia quo, adipisci voluptate.
                    Alias sunt pariatur
                </p>
            </div>
        </div>
    );
};

export default TitleContent;
