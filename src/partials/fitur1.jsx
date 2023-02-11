function Fitur1(props) {
  const heading1 = props.heading1;
  const heading2 = props.heading2;
  const icon = props.icon;

  return (
    <>
      <div className="flex flex-row space-x-2 container items-center">
        <div className="dot flex-none px-6 py-6">
          <i class={icon} style={{fontSize:'70px',color:'green'}}></i>
        </div>
        <div className="flex flex-col font-cabin">
          <h1 className="font-bold">{heading1}</h1>
          <p className="text-sm">{heading2}</p>
        </div>
      </div>
    </>
  );
}

export default Fitur1;
