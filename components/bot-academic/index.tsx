import { botAcademicData } from '../../lib/swr-hooks';
import AcademicYear from "./academicyear"
export default function BotAcademicYearText() {
    const { academicyear } = botAcademicData()
  return (
    <AcademicYear data={academicyear}/>
  )
}
