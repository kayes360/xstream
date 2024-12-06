import Header from "@/components/Header";

export default function VideosLayout({ children, params, modal }) {
  const { lang } = params;
  return (
    <>
      <Header lang={lang} />
      {modal}
      {children}
    </>
  );
}
