
const color = [
    '#5600E8',
    '#7F39FB',
    '#985EFF',
    '#BB86FC',
    '#DBB2FF'
]

const Legends = ({data}) => {
    return (
        <div className="grid grid-flow-col grid-rows-3 gap-y-4 gap-x-8 w-10/12 relative mx-auto mt-8">
            <div className="flex items-center">
                <div className={`w-6 h-4 bg-[#5600E8] mr-4`} />
                <span className="text-sm font-medium">{data[0].label}</span>
            </div>
            <div className="flex items-center">
                <div className={`w-6 h-4 bg-[#7F39FB] mr-4`} />
                <span className="text-sm font-medium">{data[1].label}</span>
            </div>
            <div className="flex items-center">
                <div className={`w-6 h-4 bg-[#985EFF] mr-4`} />
                <span className="text-sm font-medium">{data[2].label}</span>
            </div>
            <div className="flex items-center">
                <div className={`w-6 h-4 bg-[#BB86FC] mr-4`} />
                <span className="text-sm font-medium">{data[3].label}</span>
            </div>
            <div className="flex items-center">
                <div className={`w-6 h-4 bg-[#DBB2FF] mr-4`} />
                <span className="text-sm font-medium">{data[4].label}</span>
            </div>
        </div>
    );
}
 
export default Legends;