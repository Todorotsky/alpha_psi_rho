import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-full sm:w-[72%] mx-auto">
      <h1 className="pt-4 pl-2 pb-2 text-2xl font-bold">
        Always Be Bold and Strong.
      </h1>
      <div className="relative w-full">
        <Image src="/about_us.jpg" alt="Image" width={1920} height={1280} />
        <div className="`relative ${sm ? 'absolute' : ''}` bg-[#09243F] text-white w-full sm:w-[45%]">
          <h1 className="text-2xl font-bold pl-0 sm:pl-4 py-4 text-center">
            About Us
          </h1>
          <p>
            The Delta Chapter of the Alpha Psi Rho Fraternity was founded at the
            University of Nevada, Las Vegas on April 2nd, 2011. Originating from
            the 12 Charters that helped bring this fraternity to Las Vegas, we
            have grown to become the first and premier Asian-Pacific Islander
            Interest Organization at UNLV. The pillars of Brotherhood,
            Academics, Prosperity, and Strength capture the essence of what
            every Gentleman excels at and is the basis of this Fraternity.
          </p>
        </div>
      </div>
    </main>
  );
};
export default AboutPage;
