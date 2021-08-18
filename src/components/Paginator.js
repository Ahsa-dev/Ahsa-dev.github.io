import React, {useState, useEffect} from 'react';

const Paginator = ({ changePage, currentPage, totalPages }) => {

    const [state, setState] = useState({buttons: null});
    useEffect(()=>{
        setButtons();
    },[currentPage,totalPages]);

    const setButtons = () => {
        let min = Math.floor(parseInt(currentPage) - 2);
        let max = Math.floor(parseInt(currentPage) + 2);
        if(min <= 0){
            max += Math.abs(min)+1;
            min = 1;
        }
        if(max > totalPages){
            min -= max - totalPages;
            max = totalPages;
        }
        let buttons = [];
        for (let i = min; i <= max; i++){
            buttons.push({value: i});
        }
        setState({ ...state, buttons: buttons });
    }

    return (
        <div className="paginator">
            <button onClick={()=>changePage(1)}>&lt;&lt;</button>
            {state.buttons !== null && 
                state.buttons.map((current)=>{
                    return <button key={`paginator-button-${current.value}`} onClick={()=>changePage(current.value)}>{current.value}</button>
                })
            }
            <button onClick={()=>changePage(totalPages)}>&gt;&gt;</button>
        </div>
    );
}

export default Paginator;