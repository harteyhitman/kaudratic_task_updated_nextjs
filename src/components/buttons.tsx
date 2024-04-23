
interface IButtons{
  label: string;
  className: any;
  icon?: any;
  onClick?: () => void;
  
}

const Buttons = ({onClick, label, className, icon,  } : IButtons) => {
  return (
    <button onClick={onClick} 
    className={className}>
            {icon}
            {label}
    </button>
  )
}

export default Buttons