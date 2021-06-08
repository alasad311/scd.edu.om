import { bodData } from '../../lib/swr-hooks';
import Bod from "./bod"
export default function BodsAccordion() {
    const { bots } = bodData()
  return (
    <div className="accordion padding-bottom-20" id="accordionPrimary">
      <Bod data={bots}/>
    </div>
  )
}
