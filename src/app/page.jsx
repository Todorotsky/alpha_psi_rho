import ImageWithOverlay from "../components/ImageWithOverlay";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <ImageWithOverlay
          imageUrl="/first_hero_picture.jpg"
          headerText="Alpha Psi Rho"
          subheaderText="Delta ▵ Chapter"
          centerText="The premier Asian-Pacific Islander Interest Fraternity of UNLV"
        />
      </div>
      <div className="flex justify-center py-10 font-bold text-5xl">
        <div>
          What We Offer <br />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
          <div className="items-start font-bold text-3xl pt-7"> Academics </div>
        </div>
        <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
          <div className="items-start font-bold text-3xl pt-7">Brotherhood</div>
        </div>
        <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
          <div className="items-start font-bold text-3xl pt-7">
            Prosperity and Strength
          </div>
        </div>
      </div>
    </main>
  );
}
