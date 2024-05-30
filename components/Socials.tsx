import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, link: "/#" },
    { icon: <FaLinkedin />, link: "/#" }
]

const Socials = ({ containerStyles, iconStyles } : 
    { containerStyles: any, iconStyles: any }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.link} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Socials;
