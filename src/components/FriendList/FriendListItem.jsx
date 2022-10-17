import styles from './friendList.module.css';
const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span
      className={isOnline === true ? styles.statusOnline : styles.statusOffline}
    ></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
