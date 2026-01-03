import './globals.css'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SmartCare Bracelet - Dispositif médical intelligent pour enfants',
  description: 'Un dispositif médical intelligent qui améliore l\'autonomie, la sécurité et le calme des enfants avec Trisomie 21.',
  keywords: 'SmartCare, bracelet médical, Trisomie 21, dispositif médical, sécurité enfants, IoT santé',
  openGraph: {
    title: 'SmartCare Bracelet - Dispositif médical intelligent pour enfants',
    description: 'Un dispositif médical intelligent qui améliore l\'autonomie, la sécurité et le calme des enfants avec Trisomie 21.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'auto';
                document.documentElement.setAttribute('data-theme', theme);
                
                // Apply auto theme immediately
                if (theme === 'auto') {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    document.documentElement.setAttribute('data-theme', 'auto');
                  }
                }
              })();
            `,
          }}
        />
        {children}
        <Script
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="lazyOnload"
          type="module"
        />
      </body>
    </html>
  )
}

