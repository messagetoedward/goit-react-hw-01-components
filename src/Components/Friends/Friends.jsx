import PropTypes from 'prop-types';
import { FriendsListItem } from "../FriensListItem/FriendsListItem";
import { FriendsListContainer } from './Friends.styled';

export const Friends = ({ friends }) => {
    return (
        <FriendsListContainer>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </FriendsListContainer>
    );
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    })).isRequired,
};