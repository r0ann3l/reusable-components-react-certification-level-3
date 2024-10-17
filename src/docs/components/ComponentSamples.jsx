import PropTypes from "prop-types";
import Description from "./Description";

const ComponentSamples = ({ title, description, children }) => {
  return (
    <section className="component-sample">
      <h1 className="component-title">{title}</h1>
      {
        description && <Description>{description}</Description>
      }
      {children}
    </section>
  )
}

ComponentSamples.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node
}

export default ComponentSamples;