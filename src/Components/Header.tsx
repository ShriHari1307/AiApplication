export default function Header() {
  return (
    <>
    <div className='  sticky top-0 z-10 h-14 border-b border-gray-700 backdrop-filter backdrop-blur-lg'>
    <div className='flex items-center justify-between h-full pb-2 px-50 2xl:px-70 '>
        <h3 className='text-white font-medium text-xl'>{'>_ Ai Agent'}</h3>  
        <button className='bg-purple-400 py-1.5 px-4 rounded-sm text-black font-medium text-sm'> Get Started</button>
      </div>
    </div>
    </>
  )
}