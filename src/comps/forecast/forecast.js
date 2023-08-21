import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';

const labels = ["in 3 hours", "in 6 hours","in 9 hours","in 12 hours","in 24 hours"];

const Forecast = ({data}) => {

    return (
    <>
    {/* <label className="title">Daily</label> */}
    <Accordion allowZeroExpanded>
        {data.list.slice(0,4).concat(data.list[7]).map((item,idx) => (
            <AccordionItem key = {idx} className="overall">
            <AccordionItemHeading>
                <AccordionItemButton>
                    <div className = "daily-item">
                        <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                        <label className = "futuretime">{labels[idx]}</label>
                        <label className = "description">{item.weather[0].description}</label>
                        <label className = "temps">{Math.round(item.main.temp)} °F</label>
                    </div>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="griditem">
                        <label>feels like</label>
                        <label>{item.main.feels_like} °F</label>
                    </div>
                    <div className="griditem">
                        <label>wind</label>
                        <label>{item.wind.speed} mph</label>
                    </div>
                    <div className="griditem">
                        <label>humidity</label>
                        <label>{item.main.humidity} %</label>
                    </div>
                    <div className="griditem">
                        <label>pressure</label>
                        <label>{item.main.pressure} hPa</label>
                    </div>
                </div>
            </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    </>
    )
}

export default Forecast;