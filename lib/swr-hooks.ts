import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useSlider() {
  const { data, error } = useSWR(`/api/slider/`, fetcher)

  return {
    sliderData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function useOtherapp() {
  const { data, error } = useSWR(`/api/otherapps/`, fetcher)

  return {
    otherappData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function majorsData() {
  const { data, error } = useSWR(`/api/major/`, fetcher)

  return {
    majors: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function sessionDTData() {
  const { data, error } = useSWR(`/api/sessiondt/`, fetcher)

  return {
    session_DT: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function eventsData() {
  const { data, error } = useSWR(`/api/events/`, fetcher)

  return {
    events: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function importantDatesData() {
  const { data, error } = useSWR(`/api/importantdates/`, fetcher)

  return {
    dates: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function newsletterData() {
  const { data, error } = useSWR(`/api/newsletter/`, fetcher)

  return {
    links: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function newseventsData() {
  const { data, error } = useSWR(`/api/newsevents/`, fetcher)

  return {
    news: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function publicationData() {
  const { data, error } = useSWR(`/api/publications/`, fetcher)

  return {
    publication: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function botData() {
  const { data, error } = useSWR(`/api/bot/`, fetcher)

  return {
    bots: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function botAcademicData() {
  const { data, error } = useSWR(`/api/botacademic/`, fetcher)

  return {
    academicyear: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function bodData() {
  const { data, error } = useSWR(`/api/bod/`, fetcher)

  return {
    bots: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function bodAcademicData() {
  const { data, error } = useSWR(`/api/bodacademic/`, fetcher)

  return {
    academicyear: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function admissionofficeData() {
  const { data, error } = useSWR(`/api/admission-office/`, fetcher)

  return {
    admissionData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function alumnipresidentData() {
  const { data, error } = useSWR(`/api/alumni-president/`, fetcher)

  return {
    presidentData: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function alumniTestimonialData() {
  const { data, error } = useSWR(`/api/alumni-testimonial/`, fetcher)

  return {
    testimonialdata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function alumnieventsData() {
  const { data, error } = useSWR(`/api/alumni-latest-event/`, fetcher)

  return {
    eventsdata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function alumniUpeventsData() {
  const { data, error } = useSWR(`/api/alumni-upcoming-event/`, fetcher)

  return {
    eventsdata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function studentservicesData() {
  const { data, error } = useSWR(`/api/student-services/`, fetcher)

  return {
    servicesdata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function hodGFPData() {
  const { data, error } = useSWR(`/api/hod-gfp/`, fetcher)

  return {
    hodGFP: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function staffGFPData() {
  const { data, error } = useSWR(`/api/staff-gfp/`, fetcher)

  return {
    staffGFP: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function majorBa() {
  const { data, error } = useSWR(`/api/program-majors-ba/`, fetcher)

  return {
    bamajordata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function majorMa() {
  const { data, error } = useSWR(`/api/program-majors-ma/`, fetcher)

  return {
    mamajordata: data,
    isLoading: !error && !data,
    isError: error,
  }
}
export function shortCourses() {
  const { data, error } = useSWR(`/api/program-short-courses/`, fetcher)

  return {
    scData: data,
    isLoading: !error && !data,
    isError: error,
  }
}