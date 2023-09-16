import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import QuranBanner from "@/components/quranBanner/QuranBanner";

export default function Home() {
  return (
   <main>
    <Banner />
    <QuranBanner/>
    <About/>
    <Blogs/>
    <Contact/>

   </main>
  )
}
