import detail from '../styles/modules/char-detail.module.scss';
import charList from '../styles/modules/char-list.module.scss';

export const CardDetail = ({data}) => (
    <div className={detail.detail}>
        <img className={detail.image} src={data.image} alt={data.name} />
        <div className={detail.name}>{data.name}</div>
        <div className="status">{data.status}</div>
        <div className="origin">{data.origin.name}</div>
        <div className="location">{data.location.name}</div>
        <div className="species gender">{data.species} - {data.gender}</div>
    </div>
);

export const CardListElement = ({ image, name }) => (
    <div className={charList.character}>
        <div className={charList.image}>
            <img src={image} alt={name}/>
        </div>
    </div>
);