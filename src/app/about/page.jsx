import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-[95%] sm:w-[72%] mx-auto">
      <h1 className="pt-4 pb-2 text-2xl font-bold flex justify-center sm:justify-start">
        Always Be Bold and Strong.
      </h1>
      <div className="flex justify-center">
        <div className="relative w-[95%]">
          <Image
            className="pb-6 "
            src="/about_us.jpg"
            alt="Image"
            width={1920}
            height={1280}
          />
          <div className="`relative ${sm ? 'absolute' : ''}` bg-[#09243F] text-white w-full sm:w-[45%]">
            <h1 className="text-2xl font-bold pl-0 sm:pl-4 py-4 text-center">
              About Us
            </h1>
            <p className="pb-4 px-3 text-center">
              The Delta Chapter of the Alpha Psi Rho Fraternity was founded at
              the University of Nevada, Las Vegas on April 2nd, 2011.
              Originating from the 12 Charters that helped bring this fraternity
              to Las Vegas, we have grown to become the first and premier
              Asian-Pacific Islander Interest Organization at UNLV. The pillars
              of Brotherhood, Academics, Prosperity, and Strength capture the
              essence of what every Gentleman excels at and is the basis of this
              Fraternity.
            </p>
          </div>

          <div className="`relative ${sm ? 'absolute' : ''}` text-black w-full sm:w-[45%] text-center">
            <h1 className="text-2xl font-bold pl-0 sm:pl-4 py-4">
              Mission Statement
            </h1>
            <p className="font-bold pb-4">
              We, the Gentlemen of Alpha Psi Rho, strive to achieve Brotherhood
              through active participation in the community by promoting
              Asian/Pacific Islander awareness. Through fostering scholastic
              achievement, we shall mold future leaders who will actively pursue
              the apex of life. Our cultural background shall provide us with
              the strength and unity to attain greatness. Through brotherhood,
              we will produce high-caliber men who will be triumphant in the
              face of perseverance. We are the Gentlemen of Alpha Psi Rho.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AboutPage;
