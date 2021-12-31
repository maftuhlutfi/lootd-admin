const TextFieldWithIcon = ({ className, icon, ...otherProps }) => {
    return (
        <div className={`relative`}>
            <input className={`peer border-0 bg-white rounded-2xl outline-none p-4 px-14 focus:ring-2 focus:ring-offset-indigo-500 transition-all duration-100 ${className}`} {...otherProps} />
            <i className={`${icon} text-2xl text-disabled mr-4 absolute left-4 top-1/2 transform -translate-y-1/2 peer-focus:text-indigo-300 transition-all duration-100`} />
        </div>
    );
}

export default TextFieldWithIcon;