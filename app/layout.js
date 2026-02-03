import './globals.css'

export const metadata = {
  title: 'PickMyEV - Find Your Perfect Electric Vehicle in Ireland',
  description: 'Answer 6 quick questions and get personalized EV recommendations for the Irish market. Compare prices, range, and features.',
  keywords: 'EV, electric vehicle, Ireland, car quiz, EV recommendation, electric car',
  openGraph: {
    title: 'PickMyEV - Find Your Perfect Electric Vehicle',
    description: 'Get personalized EV recommendations for Ireland in under 2 minutes',
    url: 'https://pickmyev.ie',
    siteName: 'PickMyEV',
    locale: 'en_IE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PickMyEV - Find Your Perfect Electric Vehicle',
    description: 'Get personalized EV recommendations for Ireland',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
