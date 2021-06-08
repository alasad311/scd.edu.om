import Link from 'next/link'

function Bod({ data }) {
  
  if (data) {
    return (
      <div className="row">
        {data.map((e) => (
          <div className="col-lg-6 padding-bottom-10">
            <div className="card card-default" key={e.id}>
                <div className="card-header bg-color-secondary" id="collapsePrimaryHeadingOne">
                    <h4 className="card-title m-0">
                        <a className="accordion-toggle accordion-title" data-bs-toggle="collapse" data-bs-target="#collapsePrimaryOne" aria-expanded="true" aria-controls="collapsePrimaryOne">
                            {e.bod_name}
                        </a>
                    </h4>
                </div>
            </div>
          </div>
           ))}
        </div>
      
    )
  } else {
    return null
  }
}

export default Bod

