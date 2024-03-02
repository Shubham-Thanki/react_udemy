import logo from "../assets/investment-calculator-logo.png";
import "./InvestmentHeader.css";

export default function InvestmentHeader() {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1>Investment Calculator</h1>
        </header>
    );
}
