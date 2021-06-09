import Bot from "./bot"
export default function BotsAccordion({bots}) {
  return (
    <div className="accordion padding-bottom-20" id="accordionPrimary">
      <Bot data={bots}/>
    </div>
  )
}
