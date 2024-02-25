export default function Home() {
  return (
    <main className="">
      <div className="flex justify-start ml-40 py-10">
        <video
          width={320}
          height={240}
          src="/spring2024_rush.mp4"
          type="video/mp4"
          controls
        ></video>
      </div>
    </main>
  );
}
