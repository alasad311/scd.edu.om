import moment from 'moment'
import Select from 'react-select'
function SessionSelect({ data,fields}) {
 
    if (data) {
      const options = Object.keys(data).map(key => (
        { value: data[key]['id'] , label: "Date: "+moment(data[key]['zs_date']).format('DD-MMM-YYYY')+" From: "+ 
        moment(data[key]['zs_f_time']).format('hh:mm A')+" To: "+moment(data[key]['zs_t_time']).format('hh:mm A')}
        
    ))
    return (
      
        <div>
          <Select
          className="basic-single"
          classNamePrefix="select"
          placeholder="Select Session"
          isClearable={true}
          isSearchable={true}
          name="sessionDT"
          options={options}
          {...fields}
        />
       
        </div>
    )
  } else {
    return null
  }
}

export default SessionSelect

