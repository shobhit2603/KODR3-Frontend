const Card = ({ title, description }) => {

  return (
    <div>
      <h3 className="text-2xl font-bold mb-3 tracking-tighter">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card