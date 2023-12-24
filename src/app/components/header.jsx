import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="py-5">
                <ul className="flex gap-5 justify-around sm:justify-end font-bold text-slate-700">
                    <li>
                        <Link href={''}>Content 1</Link>
                    </li>
                    <li>
                        <Link href={''}>Content 2</Link>
                    </li>
                    <li className='text-blue-500'>
                        <Link href='/pages/admin'>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
