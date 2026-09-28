export default function Userinput ({
    initialInvestment, 
  setInitialInvestment,
  annualInvestment,
  setAnnualInvestment,
  expectedReturn,
  setExpectedReturn,
  duration,
  setDuration
}){
    return (
        <form action="" id="user-input">
            <div className="input-group">
                <div>
                <label htmlFor="">initial Investment</label>
                <input type="number" name="" id="" onChange={(event) => setInitialInvestment(+event.target.value)} value={initialInvestment}/>
                </div>
                <div>
                <label htmlFor="">annual Investment</label>
                <input type="number" name="" id="" onChange={(event) => setAnnualInvestment(+event.target.value)} value={annualInvestment}/>
                </div>
            </div>
            <div className="input-group">
                <div>
                <label htmlFor="">expected Return</label>
                <input type="number" name="" id="" onChange={(event) => setExpectedReturn(+event.target.value)} value={expectedReturn}/>
                </div>
                <div>
                <label htmlFor="">duration</label>
                <input type="number" name="" id="" onChange={(event) => setDuration(+event.target.value)} value={duration} />
                </div>
            </div>
        </form>
    )
}