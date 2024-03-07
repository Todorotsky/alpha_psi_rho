import Image from "next/image";

const ContactPage = () => {
  return (
    <main className="w-full sm:w-[72%] mx-auto">
      <div className="bg-[#09243F] text-white text-center py-4">
        <span className="text-4xl font-bold">Contact Us</span>
        <span className="py-4 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#FFCC00] rounded-full p-4">
              <Image
                src={"/envelope.svg"}
                alt="Envelope"
                width={40}
                height={40}
                className="justify-center"
              />
            </div>
            <div className="flex flex-col items-center pt-4">
              <h2 className="font-bold text-xl">Email</h2>
              <h3 className="font-bold text-l">APSIRHO President</h3>
              <p>apsirhopresident@gmail.com</p>
            </div>
          </div>
        </span>
        <span className="py-4 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#FFCC00] rounded-full p-4">
              <Image
                src={"/social_media.svg"}
                alt="Social Media"
                width={40}
                height={40}
                className="justify-center"
              />
            </div>
            <div className="flex flex-col items-center pt-4">
              <h2 className="font-bold text-xl">Social Media</h2>
              <h3 className="font-bold text-l pt-2">Instagram</h3>
              <p>@unlvapsirho</p>
              <h3 className="font-bold text-l pt-2">Tiktok</h3>
              <p>@apsirho.unlv</p>
            </div>
          </div>
        </span>
        <span className="py-4 flex justify-center">
          <div className="flex flex-col items-center">
            <div className="bg-[#FFCC00] rounded-full p-4">
              <Image
                src={"/geo-alt-fill.svg"}
                alt="Address"
                width={40}
                height={40}
                className="justify-center"
              />
            </div>
            <div className="flex flex-col items-center pt-4">
              <h2 className="font-bold text-xl">Address</h2>
              <h3 className="font-bold text-l pt-2">
                University of Nevada, Las Vegas
              </h3>
              <p>4505 S Maryland Pkwy </p>
              <p>Las Vegas, NV 89154</p>
            </div>
          </div>
        </span>
      </div>
    </main>
  );
};
export default ContactPage;
