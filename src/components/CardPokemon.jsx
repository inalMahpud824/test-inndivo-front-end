const CardPokemon = (props) => {
  const {title = 'pikachu', id, img} = props
  return (
    <a href={`/detail-pokemon/${id}`}>
    <div className="w-40 p-4 m-2 px-2 bg-blue-500 rounded-md flex flex-wrap justify-center gap-3">
      <img
        src={img}
        alt=""
        className="w-[120px] h-[120px]  rounded-full bg-white"
      />
      <div className="flex justify-center gap-3">
        <img src="/images/pokeball.png" alt="" className="h-6" />
        <h5 className="flex justify-center font-sm text-white">{title}</h5>
      </div>
    </div>
    </a>
  )
}
export default CardPokemon