import styles from './friendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.jsx';

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(el => {
      return (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      );
    })}
  </ul>
);

FriendList.prototype = {
  friends: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendList;
