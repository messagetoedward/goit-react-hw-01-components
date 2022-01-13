import PropTypes from 'prop-types';
import { FriendsListElement, IsOnlineTrue, IsOnlineFalse, Avatar, Name } from './FriensListItem.styled';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <FriendsListElement>
            {isOnline ? <IsOnlineTrue /> : <IsOnlineFalse />}
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </FriendsListElement>
    );
};

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};