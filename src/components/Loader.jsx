function Loader({ text }) {
  return (
    <div className="loaderWrap" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span className="loaderText">{text}</span>
    </div>
  );
}
export default Loader;
