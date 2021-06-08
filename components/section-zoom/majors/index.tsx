import Select from 'react-select'

function Majors({ data,fields }) {
  
  if (data) {
    const options = Object.keys(data).map(key => (
      { value: data[key]['id'] , label: data[key]['major_name']}
      
  ))
  return (
    
      <div>
        <Select
        className="basic-single"
        classNamePrefix="select"
        placeholder="Select Major"
        isClearable={true}
        isSearchable={true}
        name="major"
        options={options}
        {...fields}
      />
     
      </div>
  )
} else {
  return null
}
}

export default Majors

