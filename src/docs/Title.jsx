import PropTypes from "prop-types";

const Title = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold">
      {children}
    </h1>
  );
}

Title.propTypes = {
  children: PropTypes.node
}

export default Title;