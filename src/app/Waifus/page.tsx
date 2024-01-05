import Image from "next/image"


export default function Waifus() {
    return(
        <>
        <div className="" id="Waifus">

        <div className="font-bold font text-4xl text-pink-400 mx-12 p-8 my-20 border-b-2">
            <h1>Check Favorite Waifus Below :</h1>
            <Image
          className="scale-50 !justify-start rounded-full my-12 "
          src="/fern2.jpg"
          width={1920}
          height={1080}
          alt="Shape pngs"
        />
           
        </div>
        </div>

        </>
    )
}