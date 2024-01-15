export const Carrousel = ({ imgs, count }) => {
  return (
    <picture>
      <div
        className="flex transition ease-in-out duration-300 animate-fade"
        style={{
          transform: `translateX(-${count * 100}%)`,
        }}
      >
        {imgs.map((img, index) => (
          <img key={index} src={img} alt="product" />
        ))}
      </div>
    </picture>
  );
};
