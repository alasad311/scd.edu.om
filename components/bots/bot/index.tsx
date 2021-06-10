import Link from 'next/link'

function Bot({ data }) {
  
  if (data) {
    return (
      <div className="row">
        {data.map((e) => (
          <div className="col-lg-6 padding-bottom-10">
            <div className="card card-default" key={e.bot_id}>
                <div className="card-header bg-color-secondary" id={"collapsePrimaryHeadingOne-"+e.bot_id}>
                    <h4 className="card-title m-0">
                        <a className="accordion-toggle accordion-title" data-bs-toggle="collapse" data-bs-target={"#according-content-"+e.bot_id} aria-expanded="true" aria-controls={"according-content-"+e.bot_id}>
                            {e.bot_name}
                        </a>
                    </h4>
                </div>
                {e.bot_description && 
                <div id={"according-content-"+e.bot_id} className="collapse" aria-labelledby={"collapsePrimaryHeadingOne-"+e.bot_id} data-bs-parent="#accordionPrimary">
                  <div className="card-body" style={{height:"100%"}}>
                      <p className="mb-0">{e.bot_description}</p>
                  </div>
                </div>
                }
                
            </div>
          </div>
          ))}
      </div>
    )
  } else {
    return null
  }
}

export default Bot

