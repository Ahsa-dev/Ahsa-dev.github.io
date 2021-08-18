import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../data/api';
import { CardListElement } from './CardDetail';
import Paginator from './Paginator';
const  CharacterList = (props) => {

    const apiUrl = "https://rickandmortyapi.com/api/character/?page=";
    const [state, setState] = useState({
        data: null,
        actualPage: 1,
        pages: 0,
        loading: true
    });

    useEffect(()=> {
        getCharacters();
    },[state.actualPage]);

    const getCharacters = async () => {
        setState({...state, loading: true });
        try {
            const data = await api.data.getData(apiUrl+state.actualPage);
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

    const changePage = (page) => {
        setState({...state, actualPage: page });
    }

    return (
        <>
            <div className={`characters ${state.loading ? 'loading':'loaded'}`}>
                {state.data !==null &&
                    state.data.map(function(current,index){
                        console.log('char',current);
                        return (
                            <Link className="char-link" to={"/character/"+current.id}>
                                <CardListElement image={current.image} name={current.name} key={current.name+'-'+index}/>
                            </Link>
                        )
                    })   
                }
            </div>
            <Paginator  
                changePage={changePage} 
                currentPage={state.actualPage}
                totalPages={state.pages}
            />
        </>
    );
}

export default CharacterList;
