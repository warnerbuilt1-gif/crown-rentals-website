import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import MobileCallBar from '../components/MobileCallBar'
import ReserveModal from '../components/ReserveModal'
import { ReserveProvider } from '../components/ReserveContext'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../config/site'

const shareImage = `${SITE_URL}/skid-steer-job.jpg`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReserveProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="theme-color" content="#050505" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={`${SITE_NAME} | Anaconda, MT`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Crown Rentals — crown mark with skid steer and Z-boom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE_NAME} | Anaconda, MT`} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={shareImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Crown Rentals',
              url: 'https://crownrentalsmt.com',
              telephone: '+1-406-595-4472',
              email: 'crownconstrustion@gmail.com',
              image: shareImage,
              address: {
                '@type': 'PostalAddress',
                streetAddress: '218 E Commercial Ave',
                addressLocality: 'Anaconda',
                addressRegion: 'MT',
                postalCode: '59711',
                addressCountry: 'US',
              },
              areaServed: ['Anaconda', 'Butte', 'Deer Lodge', 'Philipsburg'],
            }),
          }}
        />
      </Head>
      <Component {...pageProps} />
      <MobileCallBar />
      <ReserveModal />
    </ReserveProvider>
  )
}
