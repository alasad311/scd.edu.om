import { admissionofficeData } from '../../lib/swr-hooks';
import Office from "./office"
export default function AdmissionOffice() {
    const { admissionData } = admissionofficeData()
  return (   
      <Office data={admissionData} />
  )
}
