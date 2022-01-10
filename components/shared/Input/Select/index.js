const Select = ({ className, optionList, ...otherProps }) => {
    return (
        <>
            <select className={`p-4 rounded-2xl outline-none focus:ring-2 focus:ring-offset-indigo-500 transition-all duration-100 ${className}`} {...otherProps}>
                {optionList && optionList.map((d, i) => <option value={d} key={i}>{d}</option>)}
            </select>
        </>
    );
}

export default Select;