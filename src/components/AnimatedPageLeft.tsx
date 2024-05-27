import {motion} from "framer-motion";
import {ReactNode} from "react";

const animations={
    initial: { x: -150},
    animate: { x: 0, transition: {duration: 1.2}},
    exit: { x: 150, transition: {duration: 1.2}}
}

interface AnimatedPageProps {
    children: ReactNode;
}

const AnimatedPageLeft = ({ children } : AnimatedPageProps) => {
    return(
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit">
            {children}
        </motion.div>
    
    )
};

export default AnimatedPageLeft;