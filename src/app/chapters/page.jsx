import Chapter from "../../components/Chapter";

const ChaptersPage = () => {
  return (
    <main className="w-[95%] sm:w-[72%] mx-auto">
      <div className="absolute pt-4 pb-2 pl-0">
        <span className="text-2xl font-bold">Chapters</span>
        <div className="relative flex justify-start pl-1">
          <hr className="relative mt-3 mb-4 w-[55%] border-black border-t-2" />
        </div>
        <div className="relative">
          <Chapter
            name="SDSU (Alpha Chapter)"
            date="March 1st, 2000"
            link="https://apsirho.wixsite.com/sdsuapsirho"
            image="place link here"
          />
          <br />
          <Chapter
            name="CSU Northridge (Beta Chapter)"
            date="September 1st, 2003"
            link="http://alphapsirho.wixsite.com/betachapter"
            image="place link here"
          />
          <br />
          <Chapter
            name="CSU San Marcos (Gamma Chapter)"
            date="February 12th, 2012"
            link="https://gammasecretary.wixsite.com/alphapsirho-gamma"
            image="place link here"
          />
          <br />
          <Chapter
            name="UNLV (Delta Chapter)"
            date="April 2nd, 2011"
            link="/"
            image="place link here"
          />
        </div>
      </div>
    </main>
  );
};
export default ChaptersPage;
