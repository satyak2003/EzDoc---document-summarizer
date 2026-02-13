import Hero from "../components/Hero";
import Info from "../components/Info";

export default function LandingPage(){
  return(
    <section className="flex flex-col justify-start items-start">
      <div className="p-55">
       <Hero/>
       <video width="750" height="500" controls>
        <source src="/assets/Ez-Doc-anims.mp4" type="video/mp4"/>
       </video>
      </div>

      <div>
        <Info/>
      </div>

      <div>

      </div>
    </section>
  );
}
