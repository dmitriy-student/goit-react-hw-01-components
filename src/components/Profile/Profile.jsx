import css from './Profile.module.css';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats_list}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.stats_list}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.stats_list}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
