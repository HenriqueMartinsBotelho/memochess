type ChessRowProps = {
  opening_name: string;
  images: string[];
};

const ChessRow = ({ opening_name, images }: ChessRowProps) => {
  return (
    <div className="bg-green-300 p-4">
      <h1>{opening_name}</h1>
      <div className="flex justify-evenly">
        {images.map((image, index) => (
          <img key={index} src={image} alt="chess piece" />
        ))}
      </div>
    </div>
  );
};

export default ChessRow;
