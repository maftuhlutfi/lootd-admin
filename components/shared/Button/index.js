const Button = ({ className, children, ...otherProps }) => {
    return (
        <button className={`flex items-center justify-center p-4 bg-linear-primary text-white rounded-2xl font-bold ${className}`} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;