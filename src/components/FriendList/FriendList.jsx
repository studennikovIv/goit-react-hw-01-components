import styles from './friendList.module.css';
import FriendListItem from './FriendListItem.jsx';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ avatar, name, isOnline }) => {
      return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />;
    })}
  </ul>
);

FriendList.prototype = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
