// app/landing/layout.tsx
import Navbar from './components/layout/Navbar/Navbar';


export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white">
        <Navbar />
   
        {children}
      </body>
    </html>
  );
}
