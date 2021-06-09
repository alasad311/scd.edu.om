import Bod from "./bod"
export default function BodsAccordion({bods}) {
  return (
    <div className="accordion padding-bottom-20" id="accordionPrimary">
      <Bod data={bods}/>
    </div>
  )
}
