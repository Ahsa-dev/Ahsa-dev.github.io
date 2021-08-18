export const CardDetail = ({data}) => (
    <div className="char-detail">
        <img src={data.image} className="image"/>
        <div className="name">{data.name}</div>
        <div className="status">{data.status}</div>
        <div className="origin">{data.origin.name}</div>
        <div className="location">{data.location.name}</div>
        <div className="species gender">{data.species} - {data.gender}</div>
    </div>
);

export const CardListElement = ({ image, name }) => (
    <div className="character">
        <div className="char-image">
            <img src={image} alt={name}/>
        </div>
    </div>
);