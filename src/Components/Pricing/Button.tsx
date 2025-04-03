interface ButtonProps {
    label : string
    highlight?: boolean
}

export const Button : React.FC<ButtonProps> = ({label, highlight}) => (
    <button className={`w-full py-2 font-medium cursor-pointer ${
        highlight ? "bg-[#b392f0] text-[#18181b] hover:bg-white" : "bg-gray-800 text-white hover:bg-gray-900"
      }`}>
        {label}
      </button>
)