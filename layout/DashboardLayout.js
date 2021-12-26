import Navigation from "../components/shared/Navigation";

const DashboardLayout = ({children}) => {
    return (
        <div className="relative min-h-screen w-full grid gap-10 py-10 pr-10 bg-purple-light">
            <Navigation />
            {children}
        </div>
    );
}
 
export default DashboardLayout;