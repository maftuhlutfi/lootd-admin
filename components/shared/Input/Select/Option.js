const Option = ({children, onChange, value}) => {
    return (
        <div className="py-3 px-4 hover:bg-gray-200 cursor-pointer text-center" onClick={() => onChange()}>
            {children}
        </div>
    );
}
 
export default Option;