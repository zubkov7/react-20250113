export const metadata = {
  title: "Headphones Shop",
  description: "next js app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
