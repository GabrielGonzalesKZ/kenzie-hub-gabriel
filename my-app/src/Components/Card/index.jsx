export const Card = ({item}) => {
    return(
        <li key={item.length} id={item.id}>
          <p>{item.title}</p>
          <span>{item.status}</span>
        </li>
      )
}