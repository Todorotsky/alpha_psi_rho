const Chapter = ({ name, date, link, image }) => {
  return (
    <main className="py-4 px-2 bg-[#09243F] rounded-xl text-white font-bold w-[75%]">
      <a href={link}>
        <div>
          {name}
          <div>{`Est. ${date}`}</div>
        </div>
      </a>
    </main>
  );
};

export default Chapter;
