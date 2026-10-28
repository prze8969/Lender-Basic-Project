import type {Metadata} from 'next';
import Link from 'next/link';
import './global.css';
//writing the metadata of the website
export const metadata: Metadata = {
    title : "Lender-Borrower Website",
    description : "Welcome to solana based lender borrower website",
};
//Pages array for storing where the pages should be and what it is called

const navItems = [
    {name: 'Home' , href:"/"},
    {name: 'Be a Lender' , href:"/lender"},
    {name: 'Do you want to Borrow?' , href:"/borrower"},
    {name: 'Contact' , href:"/contact"},
]

//writing function for navbar to accept the items given in array of dict

function Navbar({items}: {items : typeof navItems}){
    return (
        <nav className="flex gap-6 p-4 bg-gray-900 text-white font-medium" >
            {items.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-blue-400 transition-colors">
                    {item.name}
                </Link>
            ))}
        </nav>
    )
}

//writing the default function for accepting "children"

export default function RootLayout({children,} : 
    {children : React.ReactNode;}) 
    {
    return (
        <html lang="en">
            <body>
                <Navbar items={navItems}/>
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
