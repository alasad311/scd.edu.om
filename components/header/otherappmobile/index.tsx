function OtherAppMobile({ data }) {
  
  if (data) {
    return (
      <ul className="dropdown-menu">
         {data.map((e) => (
            <li key={e.id}>
                <a href={e.link} className="dropdown-item"> {e.name}</a>
            </li>
            ))}
      </ul>
    )
  } else {
    return null
  }
}

export default OtherAppMobile

