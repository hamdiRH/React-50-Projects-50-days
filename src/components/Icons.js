import React from 'react';
import {motion} from 'framer-motion';

const Icon = ({icon}) => {
    return (
        <div className="mr-2">
            <motion.img src = {icon} width="40" height="40" alt="" whileHover = {{scale : 1.4}}/>
        </div>
    )
}

export default Icon;