import React, { useState, useEffect } from 'react';
import api from '../data/api';

const Character = ({id}) => {

    const apiUrl = "https://rickandmortyapi.com/api/character/";
    const [state, setState] = useState({
        data: null,
        loading: true
    });

    useEffect(()=>{
        getData();
    },[id]);

    const getData = async () => {
        setState({...state, loading: true });
        try {
            const data = await api.data.getData(apiUrl+id);
            console.log('data',data);
            setState({
                ...state,
                data: data,
                loading: false,
            });
        }catch(e){
            console.log('error',e);
        }
    }

    return (
        <div></div>
    );
}

export default Character;