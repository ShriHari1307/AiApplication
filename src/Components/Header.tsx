import menu from "../assets/Menu.png"
export default function Header() {
  return (
    <div className='sticky top-0 z-10 h-14 border-b border-gray-700 backdrop-filter backdrop-blur-lg'>
      <div className='flex justify-between items-center max-w-screen-lg mx-auto p-2'>
        <h3 className='text-white mb-1 '>{'>_ Ai Agent SDK'}</h3>
        <button className='hidden lg:block mb-1 bg-purple-400 py-1 px-3 rounded-sm text-black'> Get Started</button>
        <button className='block lg:hidden mb-1'>
          <img className="w-6 h-6 fill-white" src={menu} />
        </button>
      </div>
    </div>
  )
}
