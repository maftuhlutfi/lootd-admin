const Card = ({className, children}) => {
    return (
        <div className={`bg-white p-6 rounded-4xl ${className}`}>
            {children}
        </div>
    );
}
 
export default Card;