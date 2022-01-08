import {FriendsList} from "../FriendsList/FriendsList"

export const Friends = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendsList
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
}
  