import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";


let sectionData= [{
    title:"Skills",
    description: "jhdcjc"
}, {
    title:"Qualification",
    description: "jhdcjc"
},{
    title:"Projects",
    description: "jhdcjc"
}]
const App=()=>{
    return (
        <div>
            <Navbar />
            <About />

            {/* <Section title="Skills" description="gfgf" />
            <Section title="Qualification" description="thfth" />
            <Section title="Projects" description="fwasrg" /> */}

            {  // writing curly braces because map fnc is a js code, and we write curly braces whenever we are writing js code
                sectionData.map((item ,ind)=>{
                    return <Section key={ind} title={item.title} description={item.description} />
                })
            }
        </div>
    )
}


export default App