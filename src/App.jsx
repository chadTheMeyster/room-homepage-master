import { useState } from "react";
import { DesktopNavigation } from "./DesktopNavigation";
import { useMediaQuery } from "react-responsive";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const roomsInfo = [
    {
      heading: "Discover innovative ways to decorate",
      text: `
    We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
      imageMobileUrl: "./images/mobile-image-hero-1.jpg",
      imageDesktopUrl: "./images/desktop-image-hero-1.jpg",
      altText: "hero image 1",
    },
    {
      heading: "We are available all across the globe",
      text: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
      imageMobileUrl: "./images/mobile-image-hero-2.jpg",
      imageDesktopUrl: "./images/desktop-image-hero-2.jpg",
      altText: "hero image 2",
    },
    {
      heading: "Manufactured with the best materials",
      text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.
`,
      imageMobileUrl: "./images/mobile-image-hero-3.jpg",
      imageDesktopUrl: "./images/desktop-image-hero-3.jpg",
      altText: "hero image 3",
    },
  ];

  const activeRoom = roomsInfo[count];

  return (
    <div className="flex flex-col w-full overflow-hidden md:h-screen">
      <div className="md:grid md:grid-cols-[3fr_2fr]">
        <div className="relative">
          <img
            src={
              isDesktop ? activeRoom.imageDesktopUrl : activeRoom.imageMobileUrl
            }
            alt={activeRoom.altText}
            className={`w-full h-full object-cover transition ease-in-out duration-1000 ${
              activeRoom ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="absolute top-15 flex justify-between items-center w-full pr-8 pl-8 md:hidden">
            <button
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <img
                src="./images/icon-hamburger.svg"
                alt="menu-icon"
                className="h-5"
              />
            </button>
            <img src="./images/logo.svg" alt="room tag" className="h-5" />
            <div></div>
          </div>

          <div className="absolute top-0 justify-between items-center pr-8 pl-8 hidden md:flex">
            <img
              src="./images/logo.svg"
              alt="room tag"
              className="ml-10 mr-8"
            />
            <nav className="flex justify-between items-center pr-6 pl-6 pt-15 pb-15 font-bold text-white w-96">
              <DesktopNavigation />
            </nav>
          </div>

          <div className={`absolute top-0 w-full ${isOpen ? "" : "hidden"}`}>
            <nav className="bg-white flex justify-between items-center pr-6 pl-6 pt-15 pb-15 font-bold">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <img
                  src="./images/icon-close.svg"
                  alt="close icon"
                  className="mr-8 h-6"
                />
              </button>
              <a href="#">home</a>
              <a href="#">shop</a>
              <a href="#">about</a>
              <a href="#">contact</a>
            </nav>
            <div className="h-screen w-full bg-black opacity-60"></div>
          </div>
          {/*Code for controlling state and image transitions*/}
          <div
            className="absolute bottom-0 right-0 flex bg-black 
          md:-right-37
          "
          >
            <button
              className="pr-8 p-7
              hover:bg-primaryGrey-800
                active:bg-primaryGrey-800"
              onClick={() => {
                if (count <= 0) {
                  setCount(roomsInfo.length - 1);
                } else {
                  setCount((updateCount) => {
                    return updateCount - 1;
                  });
                }
              }}
            >
              <img
                src="./images/icon-angle-left.svg"
                alt="left arrow icon"
                className="h-6"
              />
            </button>
            <button
              className="pl-8 p-7
              hover:bg-primaryGrey-800
                active:bg-primaryGrey-800"
              onClick={() => {
                if (count >= roomsInfo.length - 1) {
                  setCount(0);
                } else {
                  setCount((updateCount) => {
                    return updateCount + 1;
                  });
                }
              }}
            >
              <img
                src="./images/icon-angle-right.svg"
                alt="right arrow icon"
                className="h-6"
              />
            </button>
          </div>
        </div>
        {/*this code contains the heading and paragraph text */}
        <div className="md:m-25">
          <h1
            className="m-12 mt-14 mb-6 font-bold text-[2.5rem] leading-12
                md:m-0"
          >
            {activeRoom.heading}
          </h1>
          <p
            className="mr-13 ml-13 text-[1.09rem] text-primaryGrey-500
                md:m-0 md:mt-6"
          >
            {activeRoom.text}
          </p>

          <button
            className="flex items-center mr-13 ml-13 mt-12 w-full
                md:m-0 md:mt-6
                hover:text-primaryGrey-800
                active:text-primaryGrey-800"
          >
            <span className="font-bold text-lg tracking-[0.8rem]">
              SHOP NOW
            </span>
            <img
              src="./images/icon-arrow.svg"
              alt="arrow icon"
              className="ml-8 h-4"
            />
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-[1.2fr_1.8fr_1.31fr]">
        <img
          src="./images/image-about-dark.jpg"
          alt="empty room with coffee table"
          className="mt-20
        md:m-0"
        />

        <div className="md:m-10 md:mt-14 md:mb-14">
          <h2
            className="mt-10 w-full mr-13 ml-13 font-bold tracking-[0.4rem] text-lg
        md:m-0"
          >
            ABOUT OUR FURNITURE
          </h2>

          <p
            className="mr-13 ml-13 mt-4 text-[1.09rem] text-primaryGrey-500
      md:m-0 md:mt-3 md:text-base"
          >
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>

        <img
          src="./images/image-about-light.jpg"
          alt="empty chair"
          className="mt-10
        md:m-0 md:w-full"
        />
      </div>
    </div>
  );
}

export default App;
