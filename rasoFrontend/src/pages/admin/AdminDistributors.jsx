import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';  
import { DistributorCard } from '../../components';

function AdminDistributors() {
    const [distributors, setDistributors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/rasoBackend/distributors.php')
      .then(response => {
        setDistributors(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    }, []);

    return (
        <div className='w-full p-4'>
            <div className='w-full flex justify-between py-2'>
                <h2 className='font-medium text-black text-base md:text-lg lg:text-xl'>Distributors</h2>
                <Link to='/admin/add-distributor' className='px-4 py-2 bg-old-brick-600 border font-medium text-white border-old-brick-600 hover:bg-white hover:text-black'>Add Distributor</Link>
            </div>
            <div className='w-full max-w-7xl px-4 gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mx-auto justify-center my-10'>
                {distributors.map((item) => (
                    <DistributorCard key={item.id} distributor={item} />
                ))}
            </div>
        </div>
    )
}

export default AdminDistributors
