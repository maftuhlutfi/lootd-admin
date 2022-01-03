const TextArea = ({ className, ...otherProps }) => {
    return (
        <textarea autoComplete="off" className={`p-4 rounded-2xl outline-none focus:ring-2 focus:ring-offset-indigo-500 transition-all duration-100 ${className}`} {...otherProps} />
    );
}

export default TextArea;