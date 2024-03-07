const JoinPage = () => {
  return (
    <main className="w-[95%] sm:w-[72%] mx-auto">
      <div className="absolute pt-4 pb-2 pl-0">
        <span className="text-2xl font-bold">How to Join</span>
        <div className="relative flex justify-start pl-1">
          <hr className="relative mt-3 mb-4 w-[55%] border-black border-t-2" />
        </div>
        <div className="bg-[#F7F7F7] w-[95%] sm:w-[72%] py-4">
          <div className="font-bold text-2xl flex justify-center">
            <div className="bg-black text-white px-4 py-2">What is Rush?</div>
          </div>
          <div className="font-bold">
            <div className="my-4">
              <p>
                Recruitment, also known as &quot;Rush&quot;, is a short period
                of time at the start of the semester where fraternities host fun
                events for you to get to know the brhothers of the fraternity.
                Our Rush events usually happen 2-3 weeks since the start of the
                semester. All our events are free and we will cover any food
                expenses. These events are for potential members to get to know
                the Brotherhood before they make their decision whether or not
                the Fraternity is right for them. Bonfire is our most popular
                event where you can talk to the brhos and enjoy good food. There
                is no obligation for you to join Alpha Psi Rho if you attend any
                of our Rush events.
              </p>
            </div>
            <div className="my-4">
              <p>
                If you need a ride to attend any event, we are more than willing
                to drive you!
              </p>
            </div>
            <p>
              Follow our Instagram:
              <a
                href="https://www.instagram.com/unlvapsirho/"
                className="bg-yellow-300"
              >
                {" "}
                @unlvapsirho{" "}
              </a>
              for up-to-date details!
            </p>
            <div className="font-bold text-2xl flex justify-center pt-4">
              <div className="bg-black text-white px-4 py-2">Requirements</div>
            </div>
            <div className="font-bold">
              <div className="my-4">
                <ul>
                  <li>• Must be a UNLV student of good standing </li>
                  <li>
                    • Have at least a 2.5 GPA <span>(</span>Cumulative and
                    Semester <span>)</span>
                  </li>
                  <li>
                    • Must attend APsiRho 101 and at least two rush events
                  </li>
                  <li>
                    • APsiRho 101 can be taught in any rush event if needed
                  </li>
                  <li>• Schedule an interview with one of the brhos </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default JoinPage;
