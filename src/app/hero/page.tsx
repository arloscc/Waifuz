"use client";
import Image from "next/image";
import { File, Crop, Check, AlertCircle } from "react-feather";
import React, { useEffect ,useState} from 'react';
import axios from 'axios';
import Link from "next/link";






export default function Hero() {
  const [responseData, setResponseData] = useState<any>("");
  useEffect(() => {
    const apiUrl = 'https://api.waifu.pics/sfw/happy';
  
    axios.get(apiUrl)
      .then(response => {

        setResponseData(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error making the GET request:', error.message);
      });
  }, []); 
  
  return (
    <>
    <div id="home">
      <div className="w-1/2 flex justify-center absolute">
        <Image
          className="absolute w-screen my-12 "
          src="/shape.png"
          width={1920}
          height={1080}
          alt="Shape pngs"
        />
      </div>
      <div className="flex items-center justify-evenly mx-12 ">
        <div className="font-bold font text-4xl my-40 p-6 px-16 w-screen">
          <h1 className="text-pink-400">
           Explore{" "}
            <span className="text-pink-500 !font-extrabold"> Find </span> Your{" "}
            <span className="text-pink-500 p-"> Waifu </span>in
          </h1>
          <h1 className="!font-extrabold text-pink-500 py-8 ">Waifuz</h1>
        </div>

        <div className="mx-60">
          <img
            className=" scale-100 rounded-3xl mx-48"
            src={responseData.url}
            alt="Image"
          />
          
        </div>
      </div>
      <div>
        <h1 className=" mr-8  font-bold font text-4xl text-pink-400 text-center my-12 ">
          What we can do ?
        </h1>

      <div className="">
        <div className="Icons flex font-semibold font text-xl text-pink-400 p-2 justify-evenly ">
          <div className="p-4 items-center flex flex-col ">
            <div className="bg-pink-500 rounded-full w-fit p-4 text-white">
              <AlertCircle />
            </div>
            <h1 className="text-center">No NSFW</h1>
          </div>

          <div className="p-4 items-center flex flex-col ">
            <div className="bg-pink-500 rounded-full w-fit p-4 text-white">
              <Check />
            </div>
            <h1 className="text-center">Privacy</h1>
          </div>

          <div className="p-4 items-center flex flex-col">
            <div className="bg-pink-500 rounded-full w-fit p-4 text-white">
              <File />
            </div>
            <h1 className="text-center">Download File</h1>
          </div>

          <div className="p-4 items-center flex flex-col">
            <div className="bg-pink-500 rounded-full w-fit p-4 text-white">
              <Crop />
            </div>
            <h1 className="text-center">No Cropped</h1>
          </div>
        </div>
      </div>
      </div>

<div className="justify-center flex py-10 border-b-2">

      <button className="font-bold text-white  "><h1 className="p-4 bg-pink-500 hover:bg-pink-200 duration-200 hover:text-gray-700 rounded-full"><a href="/">Generate now</a></h1></button>
</div>
</div>  
    </>
  );
}
