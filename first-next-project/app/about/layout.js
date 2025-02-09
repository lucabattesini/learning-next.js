import "../globals.css";

export const metadata = {
  title: 'My NextJS project',
  description: 'Nothing to say'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}