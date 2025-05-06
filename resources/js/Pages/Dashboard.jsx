import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import BarChart from '@/Components/BarChart';
import Stat from '@/Components/Stat';

function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-center  text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-5 flex-1 overflow-x-auto z-30">
                <div className='mb-4'>
                <Stat></Stat>
                </div>
                
                <div className="md:flex justify-between mx-auto max-w-7xl gap-4">
                    <div className='bg-white rounded-xl p-4 shadow w-full flex-1 mb-2'>
                        <BarChart></BarChart>
                    </div>
                    <div className='bg-white rounded-xl p-4 shadow w-full flex-1 mb-2'>
                        <BarChart></BarChart>
                    </div>
                </div>
            </div>

            
        </AuthenticatedLayout>
    );
}

export default Dashboard