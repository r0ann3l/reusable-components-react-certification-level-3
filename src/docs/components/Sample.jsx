import PropTypes from "prop-types";
import SampleCode from "./SampleCode";
import Description from "./Description";

const Sample = ({ description, code, children }) => {
  return (
    <div className="sample">
      {
        description && <Description>{description}</Description>
      }
      <div className="sample-body">
        <div className="sample-panel sample-panel-left">
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
  description: PropTypes.string,
  code: PropTypes.string,
  children: PropTypes.node
}

export default Sample;