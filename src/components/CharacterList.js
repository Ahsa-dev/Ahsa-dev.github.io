import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import api from '../data/api';
import { CardListElement } from './CardDetail';
import Paginator from './Paginator';
import { charLink } from '../styles/modules/char-list.module.scss';

const  CharacterList = (props) => {
    
    let location = useLocation();
    const apiUrl = "https://rickandmortyapi.com/api/character/?page=";
    const [state, setState] = useState({
        data: null,
        actualPage: props.actualPage,
        pages: 0,
        loading: true
    });



    useEffect(()=> {
        getCharacters();  
    },[location]);
    
    const getCharacters = async () => {
        setState({...state, loading: true });
        try {
            const data = await api.data.getData(apiUrl+props.pageId);
            setState({
                ...state,
                data: data.results,
                pages: data.info.pages,
                loading: false,
            });
        }catch(e){
            console.log('error',e);
        }
    }

    return (
        <>
            {state.data !==null &&
                <>
                    <div className={`characters ${state.loading ? 'loading':'loaded'}`}>
                        {state.data.map(function(current,index){
                            return (
                                <Link className={charLink} key={current.id} to={"/character/"+current.id}>
                                    <CardListElement image={current.image} name={current.name} key={current.name+'-'+index}/>
                                </Link>
                            )
                        })}
                    </div>
                    <Paginator  
                        currentPage={props.pageId}
                        totalPages={state.pages}
                    />
                </>
            }
        </>
    );
}

export default CharacterList;
