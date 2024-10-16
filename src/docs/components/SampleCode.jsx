import PropTypes from "prop-types";

const SampleCode = ({ code }) => {
  return (
    <pre>
      <code>
        {code}
      </code>
    </pre>
  );
}

SampleCode.propTypes = {
  code: PropTypes.string
}

export default SampleCode;