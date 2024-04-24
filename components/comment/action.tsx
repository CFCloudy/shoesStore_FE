import React from "react";

type Tprops = {
    handleClick: any,
    type: any,
    className: any,
    hidden: boolean
}

const Action = (props: Tprops) => {
    const { className, handleClick, type, hidden } = props;

    return (
        <div className={className} onClick={handleClick} hidden={hidden}>
            {type}
        </div>
    );
};

export default Action;