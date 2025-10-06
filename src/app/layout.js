import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.css';
import CustomCursor from '../components/CustomCursor';

export const metadata = {
  title: 'Jhon Prima - Portfolio',
  description: 'Personal Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}