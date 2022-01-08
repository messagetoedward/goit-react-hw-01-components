export const FriendsList = ({id, avatar, name, isOnline}) => {
    return (
        <li>
            <span>{isOnline}</span>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </li>
    );
}