import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { useRouter } from 'next/router'
import { useUserAgent } from 'next-useragent'
export default function magazine ({props}){
  const router = useRouter()
  let ua;
  if (props) {
    ua = useUserAgent(props)
  } else {
    ua = useUserAgent(window.navigator.userAgent)
  }

  
 
  
  return (
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
      </Head>
          {!ua.isMobile && !ua.isTablet &&
            <object data={"assets/files/"+router.query['keyword']+"#zoom=110&toolbar=0&statusbar=0&navpanes=0&scrollbar=0"} style={{height:"90vh",border:"none",overflow:"hidden", display:"block", margin:"0 auto"}} type='application/pdf' width='100%' ></object>
          }
    </div>
  )
}

export function getServerSideProps(context) {
  let ua;
  let props = context.req.headers['user-agent'];

  if (props) {
    ua = useUserAgent(props)
  } else {
    ua = useUserAgent(window.navigator.userAgent)
  }
  if(ua.isMobile || ua.isTablet)
  {
    context.res.writeHead(302, { Location: "assets/files/"+context.query.keyword });
    context.res.end();
  }


  return {
    props: {
      props: props
    }
  }
}
