const MediaPage = () => {
  return (
    <div>
      The Four Pillars Spring 2013
      <iframe
        className="w-full sm:w-auto"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/OxcvU5WZvVg?si=t2lUogYNj5XFlVbR"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      Rho Knows ft. Ryan Higa Fall 2014
      <div className="flex justify-center">
        <iframe
          className="w-full sm:w-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bsSoujQZgjA?si=DIbPg_v91HGhl7Bj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
export default MediaPage;
