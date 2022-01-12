import PropTypes from 'prop-types';
import { FriendsListItem, IsOnlineTrue, IsOnlineFalse, Avatar, Name } from './FriensList.styled';

export const FriendsList = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListItem>
            {isOnline ? <IsOnlineTrue /> : <IsOnlineFalse />}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendsListItem>
    );
};

FriendsList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};