import PropTypes from "prop-types";
import SampleCode from "./SampleCode";

const Sample = ({ description, code, children }) => {
  return (
    <div>
      <span>{description}</span>
      {children}
      <SampleCode code={code} />
    </div>
  );
}

Sample.propTypes = {
  description: PropTypes.string,
  code: PropTypes.string,
  children: PropTypes.node
}

export default Sample;