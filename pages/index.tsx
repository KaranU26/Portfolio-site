import Head from "next/head";
import { Inter } from "next/font/google";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karandeep Ubhi's Portfolio</title>
      </Head>
      <main className=" bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons font-bold">developedbykaran</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className=" text-5xl py-2 text-teal-600 font-medium">
              {" "}
              Karandeep Ubhi
            </h2>
            <h3 className=" text-2xl py-2"> Developer and designer.</h3>
            <p className=" text-md py-5 leading-8 text-gray-800">
              Junior Software Engineer experienced in Ruby on Rails and React.js
            </p>
          </div>
          <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
          </div>
          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"></Image>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Blah Blah Blah
            </p>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Blah Blah Blah
            </p>
          </div>
          <div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} className="m-auto"></Image>
              <h3 className=" text-large font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating amazing designs!</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Illustrator</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} className="m-auto"></Image>
              <h3 className=" text-large font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating amazing designs!</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Illustrator</p>
            </div>
            <div className=" text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} className="m-auto"></Image>
              <h3 className=" text-large font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">Creating amazing designs!</p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className=" text-gray-800 py-1">Figma</p>
              <p className=" text-gray-800 py-1">Illustrator</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Blah Blah Blah
            </p>
            <p className=" text-md py-2 leading-8 text-gray-800">
              Blah Blah Blah
            </p>
          </div>

        </section>
      </main>
    </div>
  );
}
