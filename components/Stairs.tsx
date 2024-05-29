import { animate, motion } from "framer-motion";
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
};

const reverseIndex = (index: number) => {
    const totalSteps = 6; //number of steps
    return totalSteps - index - 1;

}

const Stairs = () => {
    return (
        <>
            {/** Render 6 motion divs each representing a step of the stairs  */}
            {[...Array(6)].map((_, index) => {
                <motion.div 
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate" 
                    exit="exit"
                />
            })}
        </>
    );
}

export default Stairs;
