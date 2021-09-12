import CharacterList from '../components/CharacterList.js';

const FrontPage = (props) => {
    return (
        <CharacterList pageId={props.match.params.id}/>
    );
}

export default FrontPage;