const LabelInput = (props) => {
  const { id, label, type, className} = props;
  return (
    
    <div className={`flex items-center mb-7 p-1 ${className}`}>
      <label htmlFor={id} className="mr-2">
        {label} :
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="outline-none border-b border-slate-500 "
      />
    </div>

  );
};
export default LabelInput;
