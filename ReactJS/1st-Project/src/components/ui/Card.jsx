const Card = ({ cname, cdescription }) => {

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3 tracking-tighter">{cname}</h3>
      <p>{cdescription}</p>
    </div>
  )
}

export default Card