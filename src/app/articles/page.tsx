import AnimatedText from "@/components/AnimatedText";
import MainLayout from "@/components/MainLayout";
import article1 from "../../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../../public/images/articles/smooth scrolling in reactjs.png";
import Article from "../../components/Article/Article";
import FeaturedArticle from "../../components/Article/FeaturedArticle";
import type { Metadata } from "next";
import TransitionEffect from "@/components/TransitionEffect";
import noDataIcon from "../../../public/images/svgs/Nodata.svg";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Ahmed | Articles",
  description: " My Articles",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

const Articles = () => {
  return (
    <>
      {/* <TransitionEffect /> */}
      <Image src={noDataIcon} alt="no data" />
      {
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden ">
          <MainLayout className="pt-16  w-full mx-auto flex flex-col items-center justify-center  text-center   overflow-hidden sm:py-0">
            <AnimatedText
              text="Words Can Change The World"
              className="mb-16 text-7xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 xl:text-6xl"
            />
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                  Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article1}
              />
              <FeaturedArticle
                title="Build A Custom Pagination Component In Reactjs From Scratch"
                summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                  Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                time="9 min read"
                link="/"
                img={article2}
              />
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-14 mt-32 dark:text-light ">
              All Articles
            </h2>
            <ul>
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article4}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article5}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2024"
                link="/"
                img={article3}
              />
            </ul>
          </MainLayout>
        </main>
      }
    </>
  );
};

export default Articles;
