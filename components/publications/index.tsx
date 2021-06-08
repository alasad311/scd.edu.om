import { publicationData } from '../../lib/swr-hooks';
import Publications from "./publication"
export default function PublicationOwl() {
    const { publication } = publicationData()
  return (
    <div className="col-lg-12">
        <Publications data={publication} /> 
    </div>
  )
}
