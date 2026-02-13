import { useNavigate } from "react-router-dom";
import "../styles.css";

function Home(){

    const navigate = useNavigate();

    const handleButtonClick=()=>{
        navigate('/summarize');
    };

    return(
    <div className="-my-55 mx-10">
        <h1 className="font-mono text-2xl text-white">
            Documents Summarized in Seconds..
        </h1>
        {/*Div for Buttons */}
        <div className="flex justify-baseline space-x-3">
          {/*Create button */}  
        <button onClick={handleButtonClick} className="mt-8 mb-5 flex flex-row justify-between hover:bg-white hover:text-slate-400">
            <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"
style={{fill:"#FFFFFF"}}>
    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
</svg>Create
        </button>

        {/*How to button */}  
        <button className="mt-8 mb-5 flex flex-row justify-between hover:bg-white hover:text-slate-400">
  <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,45,45"
style={{fill:"#FFFFFF"}}>
    <path d="M25,8c-6.341,0 -11.5,5.159 -11.5,11.5c0,4.193 2.02442,6.46702 3.98242,8.66602c1.81,2.031 3.51758,3.94998 3.51758,7.33398c0,0.276 0.224,0.5 0.5,0.5h7c0.276,0 0.5,-0.224 0.5,-0.5c0,-3.384 1.70758,-5.30298 3.51758,-7.33398c1.958,-2.199 3.98242,-4.47302 3.98242,-8.66602c0,-6.341 -5.159,-11.5 -11.5,-11.5zM10,10c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM40,10c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM7,20c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM43,20c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM10,30c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM40,30c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1zM22,37c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1h0.03516c0.40018,1.26452 1.56788,2.1875 2.96484,2.1875c1.39696,0 2.56466,-0.92298 2.96484,-2.1875h0.03516c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1z"></path>
</svg>How to?
        </button>
        </div>

        {/*Recent docs Section */}  
        <div className="font-semibold text-2xl">
            Recent Documents
        </div>
        <div>
            <section onClick={handleButtonClick} className="hover:bg-gray-900 transation delay-100 ease-in border-2 border-slate-500 w-60 h-60 mt-8 rounded-2xl flex justify-center items-center">
                <svg className="flex flex-col" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"
style={{fill:"#FFFFFF"}}>
    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
</svg> 
            </section>
        </div>
        <div>
        </div>
    </div>
    );
}

export default Home;