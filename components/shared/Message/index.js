const Message = ({ type, message }) => {
    if (!type) {
        return ''
    }

    return (
        <div className={`${type == 'error' ? 'bg-custom-red' : 'bg-custom-green'} text-white fixed ${message ? 'top-0' : '-top-full'} transition-all duration-100 text-center w-full left-0 px-20 py-2 font-medium`}>
            {message}
        </div>
    );
}

export default Message;