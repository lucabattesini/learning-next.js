import "./globals.css";

//All the contet that goes to <head> is set with 'metadata'
export const metadata = {
  title: 'My NextJS project',
  description: 'Nothing to say'
};

//Children is the content in the page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}