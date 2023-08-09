import React, {useState} from 'react';
import './SearchBar.css';


export default function SearchBar(props) {
    const [skuQuery, setSkuQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.get(skuQuery);
        setSkuQuery("");
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    className='inpt' 
                    onChange={(e) => setSkuQuery(e.target.value)} 
                    value = {skuQuery}
                    placeholder='SKU'
                />
                <button className='btn' type='submit'> SEARCH </button>
            </form>
        </div>
    );
}


