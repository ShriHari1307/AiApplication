interface ButtonProps {
    label : string
    highlight?: boolean
}

export const Button : React.FC<ButtonProps> = ({label, highlight}) => (
    <button className={`w-full py-2 font-medium cursor-pointer ${
        highlight ? "bg-purple-600 text-white" : "bg-gray-800 text-white"
      }`}>
        {label}
      </button>
)