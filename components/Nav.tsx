"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact"}
]

const Nav = () => {
    return (
        <nav className="flex gap-4">
           {links.map((link, index) => {
            return (
                <Link href={link.path} key={index}>
                    {link.name}
                </Link>
            )
           })}
        </nav>
    );
}

export default Nav;
