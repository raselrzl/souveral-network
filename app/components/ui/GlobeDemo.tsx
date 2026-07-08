import Earth from "../ui2/globe";

function GlobeDemo() {
  return (
    <div className='overflow-hidden bg-black text-white'>
      <article className='mx-auto mt-12 p-5 text-center  border-neutral-900 border rounded-lg relative'>
        <div className='absolute top-0 left-0 z-1 h-full w-full  bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-size-[20px_20px]'></div>
        <div className='relative z-10'>
          <h1 className='text-7xl font-semibold bg-linear-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter'>
            Souveral Network
          </h1>
          <Earth />
        </div>
      </article>
    </div>
  );
}

export default GlobeDemo;
