
interface IButtons{
  label: string;
  className: any;
  icon?: any;
  onClick?: () => void;
  onMouseUp: any
}

const Buttons = ({onClick, label, className, icon, onMouseUp  } : IButtons) => {
  return (
    <button onMouseUp={onMouseUp}  onClick={onClick} 
    className={className}>
            {icon}
            {label}
    </button>
  )
}

export default Buttons