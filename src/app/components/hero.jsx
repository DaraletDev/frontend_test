'use client';
import React from 'react';
import Button from './button';
import Image from 'next/image';
import HeroAnimation from './hero_animation';
import Header from './header';
import Link from 'next/link';
const Hero = () => {
    return (
        <>
            <Header />
            <main className="lg:-mt-20 h-screen sm:h-[70vh] sm:py-10 justify-start m-auto flex flex-col sm:flex-row lg:h-screen items-center">
                <div className="py-10">
                    <h1 className="text-slate-800 font-extrabold text-5xl xl:text-6xl pb-5">
                        Lorem Ipsum Design
                    </h1>
                    <p className="text-slate-400 font-semibold text-md pb-10">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In dicta sint voluptate doloribus, deleniti, nam
                        corrupti qui quisquam voluptatem
                    </p>
                    <button className="uppcercase bg-blue-500 text-white font-bold px-7 py-2">
                        <Link href="/pages/newSale">Login</Link>
                    </button>
                </div>
                <div className="relative">
                    <Image
                        src="/assets/hero_mobile_img.svg"
                        layout="responsive"
                        width={75}
                        height={75}
                        alt="Blue background color and icon of card"
                        className="md:w-1/2 lg:hidden lg:w-1/3"
                    />
                    <Image
                        src="/assets/hero_img.svg"
                        layout="responsive"
                        width={75}
                        height={75}
                        alt="Blue background color and icon of card"
                        className="hidden lg:block md:w-1/2 lg:w-1/3"
                    />
                    {/* <HeroAnimation /> */}
                </div>
            </main>
        </>
    );
};

export default Hero;
