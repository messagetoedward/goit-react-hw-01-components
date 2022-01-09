import PropTypes from 'prop-types';

export const FriendsList = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
}

FriendsList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};