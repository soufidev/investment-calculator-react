import Header from "./components/Header";
import Userinput from "./components/Userinput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
import headerimg from "../public/investment-calculator-logo.png";
import { useState } from "react";

function App() {

  const [initialInvestment, setinitialInvestment] = useState(null);
  const [annualInvestment, setannualInvestment] = useState(null);
  const [expectedReturn, setexpectedReturn] = useState(null);
  const [duration, setduration] = useState(null);

  let results = calculateInvestmentResults({initialInvestment , annualInvestment , expectedReturn , duration})
  return (
    <>
 {/* <h1>React Investment Calculator</h1> */}
    <Header headerimg={headerimg} />

    <Userinput 
    initialInvestment={initialInvestment}
    setInitialInvestment={setinitialInvestment}
    annualInvestment={annualInvestment}
    setAnnualInvestment={setannualInvestment}
    expectedReturn={expectedReturn}
    setExpectedReturn={setexpectedReturn}
    duration={duration}
    setDuration={setduration}
    />

    <Result results={results} initialInvestment={initialInvestment} annualInvestment={annualInvestment}/> 
    
    {console.log(results.map((i)=>(
      i.annualInvestment
    )))}
    </>
  )
}

export default App
