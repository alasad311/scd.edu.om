import { botData } from '../../lib/swr-hooks';
import Bot from "./bot"
export default function BotsAccordion() {
    const { bots } = botData()
  return (
    <div className="accordion padding-bottom-20" id="accordionPrimary">
      <Bot data={bots}/>
    </div>
  )
}
