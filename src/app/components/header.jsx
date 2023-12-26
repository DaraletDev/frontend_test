import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="py-5">
                <ul className="flex gap-7 justify-around sm:justify-end font-bold text-slate-700">
                    <li>
                        <a href="#content1">Content 1</a>
                    </li>
                    <li>
                        <a href="#content2">Content 2</a>
                    </li>
                    <li className="text-blue-500">
                        <Link href="/pages/newSale">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
