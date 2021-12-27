import Navigation from "../components/shared/Navigation";

const DashboardLayout = ({children}) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-start gap-10 py-10 pr-10 pl-[296px] bg-purple-light">
            <Navigation />
            {children}
        </div>
    );
}
 
export default DashboardLayout;