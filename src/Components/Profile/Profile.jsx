import PropTypes from 'prop-types';
import { AvatarWrapper, AvatarImg, UserName, Tag, Location, StatsList } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<div key={tag}>
    <AvatarWrapper>
      <AvatarImg
        src={avatar}
        alt="User avatar"
      />
      <UserName>{username}</UserName>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </AvatarWrapper>
    <StatsList>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </StatsList>
  </div>);
};

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
};