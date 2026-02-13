import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import moment from "moment";

function Tweet(props) {

    const [like, setLike] = useState(false);
    const [moreOne, setMoreOne] = useState(props.nbLike);


    const handleClickLikes = () => {
        setLike(prevLike => !prevLike);
        setMoreOne(prevCount =>
            like ? prevCount - 1 : prevCount + 1
        );
    };

    return(
        <div className={styles.tweet}>
            <div className={styles.firstPart}>
                <img src="person.png" alt="image de profil" />
                <span>{props.firstname}</span>
                <span>{props.username}</span>
                <span>{moment(props.time).format("h:mm:ss")}</span>
            </div>
            <div className={styles.secondPart}>
                <p>{props.message}</p>
            </div>
            <div className={styles.thirdPart}>
                <span className={styles.nbLike}>{moreOne}</span>
                <FontAwesomeIcon  icon={faHeart} onClick={() => handleClickLikes()} style={like === true ? {color: "red"} : null}/>
            </div>
        </div>
    )
}

export default Tweet;
