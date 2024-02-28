import ImageWithOverlay from "../components/ImageWithOverlay";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <ImageWithOverlay
          imageUrl="/first_hero_picture.jpg"
          headerText="Alpha Psi Rho"
          subheaderText="Delta ▵ Chapter"
          centerText="The premier Asian-Pacific Islander Interest Fraternity of UNLV"
        />
      </div>
      <div className="static">
        <div className="flex justify-center py-10 font-bold text-5xl">
          <div>
            What We Offer <br />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
            <div className="text-center font-bold text-3xl pt-7">
              {" "}
              Academics{" "}
              <div className="pt-2 flex space-evenly justify-center">
                <Image
                  className="mr-4"
                  src="/academics.svg"
                  width={75}
                  height={75}
                  alt="Academics Written in Tagalog"
                />
                <Image
                  className="ml-4"
                  src="/academic_2.svg"
                  width={75}
                  height={75}
                  alt="Academic Graphic"
                />
              </div>
              <div className="font-normal text-base pt-4 px-1">
                • Access to brhothers who can offer advice, share experiences,
                and provide resources to help you excel in your studies and
                beyond.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
            <div className="text-center font-bold text-3xl pt-7">
              {" "}
              Brotherhood{" "}
              <div className="pt-2 flex space-evenly justify-center">
                <Image
                  className="mr-4"
                  src="/brotherhood.svg"
                  width={75}
                  height={75}
                  alt="Brotherhood Written in Japanese"
                />
                <Image
                  className="ml-4"
                  src="/brotherhood_2.svg"
                  width={75}
                  height={75}
                  alt="Brotherhood Graphic"
                />
              </div>
              <div className="font-normal text-base pt-4 px-1">
                • Join a tight-knit community where bonds last a lifetime,
                creating a sense of belonging and camaraderie that extends far
                beyond your college years.
              </div>
            </div>
          </div>
          <div className="bg-gray-200 w-1/4 h-64 m-4 flex justify-center">
            <div className="text-center font-bold text-3xl pt-7">
              Prosperity and Strength
              <div className="pt-2 flex space-evenly justify-center">
                <Image
                  className="mr-4"
                  src="/prosperity.svg"
                  width={75}
                  height={75}
                  alt="Prosperity Written in Korean"
                />
                <Image
                  className="ml-4"
                  src="/strength.svg"
                  width={75}
                  height={75}
                  alt="Strength Written in Mandarin"
                />
              </div>
              <div className="font-normal text-base pt-4 px-1">
                • Challenge yourself to step out of your comfort zone, explore
                new interests, and discover your potential in a supportive and
                empowering environment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
