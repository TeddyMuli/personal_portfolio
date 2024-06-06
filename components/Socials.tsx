import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, link: "https://github.com/TeddyMuli" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/teddymuli/" }
]

const Socials = ({ containerStyles, iconStyles } : 
    { containerStyles: any, iconStyles: any }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <a target="_blank" rel="noopener noreferrer" key={index} href={item.link} className={iconStyles}>
                        {item.icon}
                    </a>
                )
            })}
        </div>
    );
}

export default Socials;
