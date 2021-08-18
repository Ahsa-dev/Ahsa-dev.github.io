import Character from '../components/Character';

const CharacterDetail = (props) => {
    return (
        <Character id={props.match.params.id}/>
    );
}

export default CharacterDetail;