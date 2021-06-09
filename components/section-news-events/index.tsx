import React from 'react';
import NewsEvents from "./newsevents"
export default function SectionNewsEvents({news}) {
  return (
    <section className="events-section section">
        <div className="container">
            <h2 className="margin-bottom-50">Latest News</h2>
            <NewsEvents data={news} />
        </div>
    </section>
  )
}
