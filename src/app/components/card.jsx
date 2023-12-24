import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="flex flex-col justify-center gap-5">
            <Image
                src="/assets/card_img.png"
                alt="Blue background color and icon of image"
                width={300}
                height={300}
            />
            <p className='text-slate-500 font-semibold text-sm'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus quis commodi ducimus ratione, alias, perferendis
                rerum dolor voluptatum repellendus quos veritatis sequi esse
                nulla ipsam? Unde doloremque reprehenderit quia iste.
            </p>
        </div>
    );
};

export default Card;
