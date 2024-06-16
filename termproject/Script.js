

// JavaScript source code

window.onload = function (e) {

 const bttn = document.getElementById("bttn"); 

  //bttn.addEventListener("click", () => alert("f"));
  bttn.addEventListener("click", click_it);

};

function click_it() {

 const nm = document.getElementById("input");
 const out = document.getElementById("output");

  //out.textContent = nm.textContent

 alert(nm.value);

}


function App() {
    return (<h2>Hello, React!</h2>);
}

ReactDOM.render(<App />, document.getElementById('test-div'));


function App_Test() {
    return (
        <h1>Hello there</h1>
    );
}

//ReactDOM.Render(< App_Test />, document.getElementById('test-div'));


