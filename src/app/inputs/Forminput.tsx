

const Forminput = ({Type,Value,OnChang}) => {
  return (
   <input type={Type} className="Inputs"  value={Value} onChange={OnChang}/>
  )
}

export default Forminput
