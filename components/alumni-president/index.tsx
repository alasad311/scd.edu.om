import { alumnipresidentData } from '../../lib/swr-hooks';
import Preisdent from "./president"
export default function AlumniPresident() {
    const { presidentData } = alumnipresidentData()
  return (
    <Preisdent data={presidentData}/>
  )
}
