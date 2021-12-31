const TextField = ({ className, ...otherProps }) => {
    return (
        <input autoComplete="off" className={`p-4 bg-white rounded-2xl outline-none focus:ring-2 focus:ring-offset-indigo-500 transition-all duration-100 ${className}`} {...otherProps} />
    );
}

export default TextField;