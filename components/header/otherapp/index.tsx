function OtherApp({ data }) {
  
  if (data) {
    return (
      <ul className="nav nav-pills">
         {data.map((e) => (
            <li key={e.id} className="nav-item nav-item-anim-icon d-none d-md-block nav-item-left-border">
                <a className="nav-link" href={e.link}> {e.name}</a>
            </li>
            ))}
      </ul>
    )
  } else {
    return null
  }
}

export default OtherApp

