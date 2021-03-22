import React from 'react';
import {motion} from 'framer-motion';

const ReactionIcons = (props) => {
    return (
        <motion.div className="icon-wrapper" initial = {props.initial} variants = {props.variants} animate = {props.hover ? "visible" : "hidden"}>
            {props.children}
        </motion.div>
    )
}

export default ReactionIcons;