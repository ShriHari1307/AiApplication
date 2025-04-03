interface cardProps {
    props: {
        name: string
        company: string
        testimonial: string
    }
}


export const Card: React.FC<cardProps> = ({ props }) => {



    return (
        <div className="flex justify-start items-center">
            <div className=" flex flex-col border border-t overflow-hidden border-gray-700 p-4 h-full">
                <div className=" flex justify-start ">
                    <img className=" rounded-full w-12 h-12" src="https://github.com/shadcn.png" alt="avatar" />
                    <div className=" flex flex-col pl-6">
                        <h1>{props.name}</h1>
                        <h1>{props.company}</h1>
                    </div>
                </div>
                <div className=" flex justify-start py-4">
                    <p>{props.testimonial}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card