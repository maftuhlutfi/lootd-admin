import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";

const Dropdown = ({ children, value, onChange, placeholder, icon }) => {
    const ref = useRef()
    useOnClickOutside(ref, () => setIsFocus(false))

    const [isFocus, setIsFocus] = useState(false)

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                onChange: () => {
                    onChange(child.props.value)
                    setIsFocus(false)
                }
            })
        }
        return child
    })

    return (
        <div className="relative w-auto z-20" ref={ref}>
            <div className="flex items-center bg-white rounded-2xl py-3 px-4 cursor-pointer hover:bg-blue-100 min-w-[100px]" onClick={() => setIsFocus(p => !p)}>
                {icon && <i className={`${icon} text-lg text-disabled mr-3`} />}
                {placeholder && !value && <span className="text-disabled">{placeholder}</span>}
                {value && <span className="font-medium capitalize">{value}</span>}
            </div>
            <div className={`min-w-max w-full bg-white absolute top-full left-1/2 transform -translate-x-1/2 mt-2 rounded-2xl overflow-hidden ${isFocus ? 'visible' : 'h-0 invisible'}`}>
                {childrenWithProps}
            </div>
        </div>
    );
}

export default Dropdown;