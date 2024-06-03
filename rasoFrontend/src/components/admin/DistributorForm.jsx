import React, {useState} from 'react'
import Input from '../Input';
import axios from 'axios';

function DistributorForm({
    title = "Add Distributor",
}) {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setError('');
        setMessage(null);
        const distributor = { name, city, phone, address };

        try {
            const response = await axios.post('http://localhost/rasoBackend/adddistributor.php', distributor);
            console.log('Distributor added:', response.data);
            // Optionally, reset the form fields
            setMessage(response.data);
            setName('');
            setCity('');
            setPhone('');
            setAddress('');
        } catch (error) {
            console.error('There was an error adding the distributor:', error);
        }
        setIsSubmitted(false);
    };
    return (
        <div className='w-full'>
            <h2 className='text-black font-semibold text-base md:text-lg lg:text-xl text-center my-2'>{title}</h2>
            {message && <p className={`text-base text-center ${message.status === 'success' ? 'text-green-600' : 'text-red-600'} my-2`}>{message.message}</p>}
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-y-4 px-2'>
                <Input label='Name' placeholder="Enter distributor name" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label='City' placeholder="Enter distributor city" value={city} onChange={(e) => setCity(e.target.value)}/>
                <Input label='Address' placeholder="Enter distributor address in city" value={address} onChange={(e) => setAddress(e.target.value)} />
                <Input label='Phone' placeholder="Enter phone number" type='tel' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <button disabled={isSubmitted} type='submit' className='px-4 py-2 font-medium text-lg text-white bg-old-brick-600 disabled:bg-old-brick-900 rounded-md'>Add Distributor</button>
            </form>
        </div>
    )
}

export default DistributorForm
