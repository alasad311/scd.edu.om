import Publications from "./publication"
export default function PublicationOwl({publication}) {
  return (
    <div className="col-lg-12">
        <Publications data={publication} /> 
    </div>
  )
}
