

const Button = ({label, shape, hoverEffect,background}) => {
  return (
    <button className={`w-full  p-3 ${shape === 'rounded' ? 'rounded-full' :'rounded-md'} ${hoverEffect ? 'bg-master-blue border-[1px] border-slate-200' : 'bg-slate-50 '}
    font-textFont2 text-sm font-bold tracking-wide hover:bg-master-blue hover:border-[1px] hover:border-slate-200
    ${background === 'light' ? 'border-[1px] border-master-blue' : 'border-[1px] border-slate-200'}`}>
        {label}
    </button>
  )
}

export default Button