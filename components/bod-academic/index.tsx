import { bodAcademicData } from '../../lib/swr-hooks';
import AcademicYear from "./academicyear"
export default function BodAcademicYearText() {
    const { academicyear } = bodAcademicData()
  return (
    <AcademicYear data={academicyear}/>
  )
}
