function Clickevent() {
    function callfun() {
        alert("here the function is called");
    }

    function apple() {
        alert("call for apple!!");
    }

    return (
        <div>
            <h1>event and fun call</h1>
            <button onClick={() => {
                callfun(); 
                apple();
                banana();
            }}>
                Click Me
            </button>
        </div>
    );
}

export default Clickevent;
