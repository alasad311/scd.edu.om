import { hodGFPData } from '../../lib/swr-hooks';
import HodGFP from "./gfphod"
export default function HodGFPDiv() {
    const { hodGFP } = hodGFPData()
  return (   
      <HodGFP data={hodGFP} />
  )
}
