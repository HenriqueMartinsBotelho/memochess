type OpeningProps = {
  name: string;
  onClick: () => void;
};

const Opening = ({ name, onClick }: OpeningProps) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:bg-orange-400  bg-slate-200"
    >
      {name} -{" "}
    </div>
  );
};

export default Opening;
