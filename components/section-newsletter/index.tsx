import { newsletterData } from '../../lib/swr-hooks';
import Newsletter from "./newsletter"
export default function SectionNewsletter() {
    const { links } = newsletterData()
  return (
      <section className="newsletter-section section">
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-9 content">
                    <h3 className="margin-bottom-20">View our magazine</h3>
                    <p>Explore SCD latest magazine ! Mosaic Magazine. You can now view quick tutorials from SCD award winning faculty, articles and interviews from Local and international artist. In addition to a full gallery with SCD students artwork. Finally, Don’t miss the chance to participate in an art competition and show the world your skills and creativity.</p>
                </div>
                <Newsletter data={links} />
            </div>
        </div>
        </section>
  )
}
