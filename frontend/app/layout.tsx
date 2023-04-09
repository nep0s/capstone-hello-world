import '../styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <h1>Hello World</h1>
        {children}
      </body>
    </html>
  );
}
