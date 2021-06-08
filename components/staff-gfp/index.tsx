import { staffGFPData } from '../../lib/swr-hooks';
import StaffGFP from "./gfpstaff"
export default function StaffGFPDiv() {
    const { staffGFP } = staffGFPData()
  return (   
      <StaffGFP data={staffGFP} />
  )
}
