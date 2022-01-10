const Button = ({ className, type, outlined, children, ...otherProps }) => {
    const typeStyle = {
        primary: 'bg-linear-primary text-white',
        danger: 'bg-linear-red text-white',
        success: 'bg-linear-green text-white'
    }

    const outlinedStyle = {
        primary: 'bg-transparent text-indigo-400 border border-indigo-400 hover:bg-linear-primary hover:text-white',
        danger: 'bg-transparent text-custom-red border border-custom-red hover:bg-linear-red hover:text-white',
        success: 'bg-transparent text-custom-green border border-custom-green hover:bg-linear-green hover:text-white'
    }

    return (
        <button className={`flex items-center justify-center p-4 rounded-2xl font-bold ${outlined ? outlinedStyle[type] : typeStyle[type]} ${className}`} {...otherProps}>
            {children}
        </button>
    );
}

export default Button;