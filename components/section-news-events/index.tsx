import Head from 'next/head';
import React from 'react';
import { newseventsData } from '../../lib/swr-hooks';
import NewsEvents from "./newsevents"
export default function SectionNewsEvents() {
    const { news } = newseventsData()
  return (
    <section className="events-section section">
        <div className="container">
            <h2 className="margin-bottom-50">Latest News</h2>
            <NewsEvents data={news} />
        </div>
    </section>
  )
}
