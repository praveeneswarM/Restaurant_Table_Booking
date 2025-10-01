import { useEffect, useState } from "react";
import "./Home.css";
import { IoFastFoodSharp } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import Food from "./Food";
import Book from './Book'
import { FaYoutube, FaSquareFacebook ,FaXTwitter ,FaLinkedinIn ,FaInstagram, FaPhone ,FaLocationDot  } from "react-icons/fa6";

function Home() {



  function Counter({ target }) {
    const [count, setCount] = useState(1);

    useEffect(() => {
      const step = Math.ceil((target - 100) / 50); // 50 steps
      let current = 100;

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 40); // speed of animation

      return () => clearInterval(timer);
    }, []);

    return <span>{count}+</span>;
  }

  const [showBook,setShowBook] = useState(false);
  
  return (
    <>
      <div className="overflow-hidden">
        <div className="home_container">
          <div className="md:w-[500px]">
            <p className="font-[finlandica] home_text">
              Good food choices are good investments.
            </p>
            <p className="font-[Maharlika] home_text_para">
              Eating wholesome and nutritious meals today pays off in a
              healthier and stronger tomorrow.
            </p>
            <span className="flex flex-row md:mx-10.5 gap-4 mx-7 ">
              <a href="#Menu"><button className="home_menu flex flex-row gap-1">
                Menu <IoFastFoodSharp className="mt-0.5" size={18} />
              </button></a>
              <a href="#About"><button className="home_menu1 flex flex-row gap-1">
                {"About >"}
              </button></a>
            </span>
          </div>
        </div>
        <div className="numbers_theme">
          <span className="flex flex-col items-center">
            <span className="num py-2">
              {" "}
              <Counter target={700} />
            </span>
            <span className="theme">Meals</span>
          </span>
          <span className="flex flex-col items-center">
            <span className="num py-2">
              {" "}
              <Counter target={1500} />
            </span>
            <span className="theme">Visitors</span>
          </span>
          <span className="flex flex-col items-center">
            <span className="num py-2">
              {" "}
              <Counter target={1000} />
            </span>
            <span className="theme">Smiles</span>
          </span>
          <span className="flex flex-col items-center">
            <span className="num py-2">
              {" "}
              <Counter target={200} />
            </span>
            <span className="theme">Cuisine</span>
          </span>
        </div>
        <div id="About" className="abt">
          <div className="md:pl-60 py-20 flex md:flex-row flex-col ">
            <img className="abt_img" src="abt_food.webp" alt="" />
            <div className="abt-content">
              <p className="abt-text">
                We pride ourselves on making real food from the best
                ingredients.
              </p>
              <p className="abt-text-para text-justify text-black">
                We pride ourselves on serving authentic South Indian flavors,
                crafted with fresh ingredients and traditional recipes that
                bring every meal to life.
              </p>
              <a href="#Menu"><button className="home_menu flex flex-row gap-1">
                Menu <IoFastFoodSharp className="mt-0.5" size={18} />
              </button></a>
            </div>
          </div>
          <div className="md:pl-60 md:mx-0 mx-2 md:py-18 py-0 flex md:flex-row flex-col-reverse">
            <div className="md:w-[500px] md:py-0 py-10">
              <p className="abt-text md:mx-0 mx-4">
                We make everything by hand with the best possible ingredients.
              </p>
              <p className="abt-text-para text-justify md:mx-0 mx-4">
                At our kitchen, we make everything by hand with the finest
                ingredients, blending tradition and care. From soft idlis to
                crispy dosas, each dish reflects authentic South Indian flavors,
                ensuring every bite carries warmth, freshness, and the taste of
                home.
              </p>
              <ul className="check-list font-[Maharlika] md:mx-0 mx-4">
                <li>
                  <SiTicktick size={22} className="text-[#bb7d3c]" />
                  Freshly ground spices for authentic flavors.
                </li>
                <li>
                  <SiTicktick size={22} className="text-[#bb7d3c]" />
                  Traditional recipes passed down generations.
                </li>
                <li>
                  <SiTicktick size={22} className="text-[#bb7d3c]" />
                  Handcrafted dishes with local ingredients.
                </li>
              </ul>
              <a href="#Menu"><button className="menu-1">
                Menu <IoFastFoodSharp className="mt-0.5" size={18} />
              </button></a>
            </div>
            <span className="flex flex-col md:mx-0 mx-0.5 ">
              <span className="img-container">
                <div className="flex md:ml-0 ml-5 flex-row gap-1 items-baseline">
                  <img
                    src="food2.webp"
                    className="md:w-[240px] w-[170px] h-[80px] md:h-[140px] "
                    loading="lazy"
                    alt=""
                  />
                  <img
                    src="food1.webp"
                    className="md:w-[340px] w-[150px] md:h-[220px]"
                    sizes="40"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </span>
              <span>
                <div className="flex md:mx-4 flex-row gap-1 my-1 items-start">
                  <img
                    src="food4.webp"
                    className="md:w-[390px] w-[180px] h-[120px] md:h-[240px] "
                    loading="lazy"
                    alt=""
                  />
                  <img
                    src="food3.webp"
                    className="md:w-[255px] md:h-[280px] w-[140px] h-[160px]"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </span>
            </span>
          </div>

          <div className="abt-quote flex items-center justify-center font-[finlandica] text-[#bb7d3c]">
            <p className="md:text-4xl text-xl text-center  md:mx-80 mx-3 font-bold">
              {" "}
              When a man's stomach is full it makes no difference whether he is
              rich or poor.
            </p>
          </div>
        </div>
        <div id="Menu" className="foods">
          <div className="food-text">
            <p className="md:text-4xl text-3xl font-bold font-[finlandica] text-[#bb7d3c] md:mx-0 mx-3">
              Explore Our Foods
            </p>
            <p className="md:text-center md:mx-64 mx-3 text-justify mt-6">
              Explore our foods and discover the true taste of South India,
              where every dish is crafted with love and tradition. From soft,
              fluffy idlis to crispy golden dosas, spicy sambar, and fragrant
              filter coffee, each recipe carries the warmth of home and the
              richness of heritage, bringing comfort and flavor to your dining
              experience.
            </p>
          </div>
          <div className="menu-list">
            <Food
              img="food1.webp"
              name="Full Meals"
              time="15 - 20"
              price1="80"
              price2="100"
            />
            <Food
              img="food2.webp"
              name="Masala Roast"
              time="5 - 10"
              price1="60"
              price2="75"
            />
            <Food
              img="food4.webp"
              name="Biriyani"
              time="5 - 10"
              price1="120"
              price2="150"
            />
          </div>
        </div>


        {/* <div className="border-2 ml-10 mr-100 border-gray-200 w-screen h-0 "></div>             */}
        <div id="Footer" className="footer font-[Maharlika]">
            <div className="flex flex-col gap-6 items-center">
                <ul className="flex flex-row gap-10 hover:cursor-pointer ">
                    <li onClick={()=>setShowBook(!showBook)} className="hover:text-[#fff7f7]">Book Table</li>
                    <a href='#About'   className="hover:text-[#fff7f7]">About</a>
                  
                </ul>
                <ul className="flex flex-row gap-3">
                    <li className="hover:text-[#fff7f7]"><FaYoutube size={22}/></li>
                    <li className="hover:text-[#fff7f7]" ><FaSquareFacebook  size={22}/></li>
                    <li className="hover:text-[#fff7f7]"><FaXTwitter  size={22}/></li>
                    <li className="hover:text-[#fff7f7]"><FaLinkedinIn  size={22}/></li>
                    <li className="hover:text-[#fff7f7]"><FaInstagram  size={22}/></li>
                </ul>
                 <ul className="flex flex-col gap-3">
                    <li className="flex flex-row items-center px-3 gap-2"><FaPhone/>  : +91 98765 67890</li>
                    <li className="flex flex-row items-center px-3 gap-2"><FaLocationDot />  : Trichy Road, Salem, TN</li>
                </ul>
                <p>© 2025. ChozhaMandalam. All rights reserved.</p>
            </div>
        </div>

      </div>
      {showBook &&  <Book/>}
    </>
  );
}
export default Home;
