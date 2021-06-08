import '../styles/globals.css'
import '../styles/flaticon.css'
import '../styles/button.css'
import "../styles/tabs.css"
import "../styles/footer.css"
import "../styles/circular-bar.css"
import "../styles/cascading-images.css"
import "../styles/custom-owl-carousel.css"
import "../styles/featured-box.css"
import "../styles/accordion.css"
import "../styles/thumb-info.css"
import "../styles/counter.css"
import "../styles/simpletextrotator.css"
import "../styles/testimonial.css"
import "../styles/flip-card.css"
import "../styles/call-to-action.css"
import "../styles/cards.css"
import "../styles/process.css"
import "../styles/instagram.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
