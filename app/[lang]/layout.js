 
import "../globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "LWS-XStream",
  description: "LWS-XStream",
};

export default function RootLayout({ children ,modal,params}) {
    const {lang} = params;
 
  return (
    <html lang="en">
      <body className="bg-color-bg text-white font-exo">
        <div className="container mx-auto px-4 py-4">
          <Header lang={lang}/>
          {children} 
          {modal}
        </div>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}