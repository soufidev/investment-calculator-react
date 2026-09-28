import { formatter } from "../util/investment";
export default function Result ({results ,initialInvestment , annualInvestment}){
let totalInterestSoFar = 0
return(
    
    <table id="result">
  <thead>
    <tr>
      <th>Year</th>
      <th>Investment Value</th>
      <th>Interest (Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  </thead>
  <tbody>
        {results.map((i) => {
  totalInterestSoFar += i.interest;
  return (
    <tr key={i.year}>
      <td>{i.year}</td>
      <td>{formatter.format(i.valueEndOfYear)}</td>
      <td>{formatter.format(i.interest)}</td>
      <td>{formatter.format(totalInterestSoFar)}</td>
      <td>{formatter.format(initialInvestment + (annualInvestment * i.year))}</td>
    </tr>
  );
})}
  </tbody>
</table>
    )

}