const Description = ({ Heading1, Heading2, text }) => {
    return (
        <div className="flex items-end gap-[100px] w-300">
            <div className="flex flex-col gap-3 w-2/3">
                <h3 className="instrument text-3xl">{Heading1}</h3>
                <h1 className="text-6xl font-bold tracking-tighter leading-17">{Heading2}</h1>
            </div>
            <div className="w-1/3">
                <p className="text-neutral-400">{text}</p>
            </div>
        </div>
    )
}

export default Description;