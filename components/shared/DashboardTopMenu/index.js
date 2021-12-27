import Image from "next/image";

const DashboardTopMenu = ({title, subTitle}) => {
    return (
        <div className="flex w-full items-center justify-between">
            <div>
                <span className="text-sm font-medium text-disabled mb-2">{subTitle}</span>
                <h5 className="text-2xl font-bold">{title}</h5>
            </div>
            <Image src={'/icons/default-user.svg'} width={48} height={48} className="object-cover object-center rounded-full" />
        </div>
    );
}
 
export default DashboardTopMenu;