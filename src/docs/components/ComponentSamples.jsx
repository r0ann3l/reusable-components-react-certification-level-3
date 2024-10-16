import Title from "./Title";
import PropTypes from "prop-types";

const ComponentSamples = ({ title, description, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <span>{description}</span>
      {children}
    </>
  )
}

ComponentSamples.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

export default ComponentSamples;