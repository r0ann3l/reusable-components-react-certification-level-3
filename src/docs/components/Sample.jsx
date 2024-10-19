import PropTypes from "prop-types";
import SampleCode from "./SampleCode";
import Description from "./Description";

const Sample = ({ description, code, children }) => {
  return (
    <div className="sample">
      <div className="sample-body">
        <div className="sample-panel sample-panel-left">
          {
            description && <Description>{description}</Description>
          }
          {children}
        </div>
        <div className="sample-panel sample-panel-right">
          <SampleCode code={code} />
        </div>
      </div>
    </div>
  );
}

Sample.propTypes = {
  description: PropTypes.node,
  code: PropTypes.string,
  children: PropTypes.node
}

export default Sample;