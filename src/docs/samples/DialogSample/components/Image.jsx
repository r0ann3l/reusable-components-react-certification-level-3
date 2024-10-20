import PropTypes from "prop-types";

const Image = ({ id, height = 150, ratio = 1.5, ...props }) => {
  const width = height * ratio;

  return (
    <img
      src={`https://picsum.photos/id/${id}/${width}/${height}`}
      alt="Random image from Lorem Picsum service"
      {...props}
    />
  );
}

Image.propTypes = {
  id: PropTypes.number,
  height: PropTypes.number,
  ratio: PropTypes.number,
}

export default Image;