"use client"

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants";
import { useState } from "react";

const MobileNav = () => {
    const pathname = usePathname()
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-24 mb-8 text-center">
                    <Link href="/">
                        <h1 className="text-4xl">Muli<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                href={link.path}
                                onClick={() => setIsSheetOpen(false)}
                                className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize text-xl hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
