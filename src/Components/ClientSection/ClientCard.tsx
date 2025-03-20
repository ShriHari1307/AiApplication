interface ClientProps {
    image: string;
  }

export function ClientCard({image}:ClientProps){
    return (
        <div className="col-span px-6 py-4 border-l-1 border-b-1 border-[#292C32]">
            <img
            className="object-contain h-full w-full opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-500"
            src={image} 
            alt="Client Logo"
            />
        </div>
    )
}