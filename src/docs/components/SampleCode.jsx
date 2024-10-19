import PropTypes from "prop-types";

const SampleCode = ({ code }) => {
  return (
    <>
      <h2 className="sample-code-title">Sample code</h2>
      <pre>
        <code>
          {code}
        </code>
      </pre>
    </>
  );
}

SampleCode.propTypes = {
  code: PropTypes.string
}

export default SampleCode;