const CardTitle = ({title, className}) => {
    return (
        <h3 className={`text-lg font-semibold mb-6 ${className}`}>
            {title}
        </h3>
    );
}
 
export default CardTitle;