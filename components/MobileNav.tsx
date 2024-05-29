"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants";

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div>
                    
                </div>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
