import css from './FriendList.module.css'

export const FriendList = ({friends}) =>{
    return(
        <ul className={css.friend_list}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return(
                    <li className={css.item} key={id}>
                    <span className={isOnline ? (css.online) : (css.offline)}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                    </li>
                )
            })}
        </ul>
    )
}