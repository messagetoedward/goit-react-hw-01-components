import PropTypes from 'prop-types';
import { AvatarWrapper, AvatarImg, UserName, Tag, Location, StatsList, StatsListTitle, StatsListStat, StatsListItem } from './Profile.styled';

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
      <StatsListItem>
        <StatsListTitle>Followers</StatsListTitle>
        <StatsListStat>{stats.followers}</StatsListStat>
      </StatsListItem>
      <StatsListItem>
        <StatsListTitle>Views</StatsListTitle>
        <StatsListStat>{stats.views}</StatsListStat>
      </StatsListItem>
      <StatsListItem>
        <StatsListTitle>Likes</StatsListTitle>
        <StatsListStat>{stats.likes}</StatsListStat>
      </StatsListItem>
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