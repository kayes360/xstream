 
import "./globals.css"; 

export const metadata = {
  title: "LWS-XStream",
  description: "LWS-XStream",
};

export default function RootLayout({ children }) {
    
  return (
    <html lang="en">
      <body className="bg-color-bg text-white font-exo">
        <div className="container mx-auto px-4 py-4"> 
          {children}  
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}