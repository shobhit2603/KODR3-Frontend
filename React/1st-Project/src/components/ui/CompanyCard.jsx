const CompanyCard = ({ Icon, name }) => {
    return (
        <div className="flex items-center justify-center gap-2 text-neutral-600 bg-neutral-100 opacity-80 rounded-lg px-1 py-7">
            {Icon && <Icon size={35} />}
            <h2 className="text-2xl font-extrabold">{name}</h2>
        </div>
    );
};

export default CompanyCard;