function OtherApp({ data }) {
  
  if (data) {
    return (
      <ul className="nav nav-pills">
         {data.map((e) => (
            <li key={e.id} style={{alignSelf:"center",marginTop:"20px"}} className="nav-item nav-item-anim-icon d-none d-md-block nav-item-left-border">
                <a className="nav-link" href={e.link} data-elink={e.name.toLowerCase()}> {e.name}</a>
            </li>
            ))}
      </ul>
    )
  } else {
    return null
  }
}

export default OtherApp

