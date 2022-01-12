import PropTypes from 'prop-types';
import { FriendsList } from "../FriendsList/FriendsList";
import { FriendsListContainer } from './Friends.styled';

export const Friends = ({ friends }) => {
    return (
        <FriendsListContainer>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsList
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </FriendsListContainer>
    );
};

Friends.propTypes = {
    friends: PropTypes.array.isRequired,
};