import Link from 'next/link'

function AcademicYear({ data }) {
  
  if (data) {
    return (
      data[0]['academic_year']
    )
  } else {
    return null
  }
}

export default AcademicYear

