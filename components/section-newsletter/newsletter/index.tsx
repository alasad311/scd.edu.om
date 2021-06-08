import Link from 'next/link'

function Newsletter({ data }) {
  
  if (data) {
    return (
      <div className="col-12 col-md-3 d-flex justify-content-md-center btn">
         {data.map((e) => (
           <Link key={e.id} href={{ pathname: '/magazine', query: { keyword: encodeURIComponent(e.nl_link) } }} ><a target="_blank" className="main-btn download-btn book-session-btn">Download</a></Link>
           ))}
      </div>
      
    )
  } else {
    return null
  }
}

export default Newsletter

