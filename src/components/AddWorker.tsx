import React, { useState } from 'react';
import { addWorker } from '../reducer';
import { useDispatch } from 'react-redux';

const AddWorker: React.FC = () => {
  
    const[name,setName] = useState<string>('');
    const dispatch = useDispatch();
    
    const handleAddWorker = () => {
        dispatch(addWorker(name))
    }
  
    return (
    <>
        <input
        placeholder='enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddWorker}>add worker</button>
    </>
  )
}

export default AddWorker