
import MovingBorderDemo from '@/components/MovingBorderDemo'
import EventPage from '../components/EventPage'
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Layout from "@/components/Layout";
// import Footer from "@/components/Footer";
export default function Home() {
  return (

    <Layout>
      {/* <SidebarDemo/> */}
        <AuroraBackgroundDemo>
          <div className="flex justify-center items-center min-h-screen w-full  z-50">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-black font-semibold sm:text-[5rem] text-[3.5rem] sm:leading-[4rem] leading-[2.5rem] flex text-center flex-col font-beatrice">TBI GEHU Haldwani</h1>
              <p className="sm:text-[1.750rem] sm:leading-[2rem] text-head_border flex flex-col text-center">Incubating your dreams into reality</p>
              <MovingBorderDemo/>
            </div>
          </div>
          <BentoGridDemo/>

          {/* <Footer/> */}
        </AuroraBackgroundDemo>
      </Layout>
  );
}
