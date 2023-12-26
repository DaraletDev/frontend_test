import { Open_Sans } from 'next/font/google';
import './globals.css';

// Font Awesome Config
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Open Sans Font
const open_sans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Sistema ventas',
    description: 'Sistema de administracion'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='scroll-smooth'>
            <body className={open_sans.className}>{children}</body>
        </html>
    );
}
