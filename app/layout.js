import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata = {
  title: 'Sueda Portfolio',
  description: 'Personal portfolio showcasing creative work and projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className="bg-black text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
