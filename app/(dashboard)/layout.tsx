import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/app-limit";

const DashboardLayout = async ({
     children 
    }: {
        children: React.ReactNode;
}) => {
        const apiLimitCount = await getApiLimitCount();

    return (
        <div className="h-full relative">
            <div className="hidden md:flex md:w-72 md:flex-col md:fixed h-full 
            md:insert-y-0 bg-gray-900">
                <Sidebar apiLimitCount={apiLimitCount}/>
            </div>
            <main className="md:pl-72">
                 <Navbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;