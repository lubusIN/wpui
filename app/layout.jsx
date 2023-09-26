import './globals.css';
import { Inter } from 'next/font/google';
import '@wordpress/components/build-style/style.css';
import RootStyleRegistry from './emotion';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WPUI',
  description: 'WordPress Compontent Powered Design Patterns',
}

export default function RootLayout({ children }) {
  return (
    <RootStyleRegistry>
      <html lang="en">
        <body className={inter.className}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {children}
          </div>
        </body>
      </html>
    </RootStyleRegistry>
  )
}
