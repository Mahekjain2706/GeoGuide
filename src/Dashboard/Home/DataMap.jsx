/* eslint-disable no-undef */
import * as React from "react";
import WorldMap from "react-svg-worldmap";
import "./DataMap.css";

const DataMap = () => {
  const data = [
    { country: "cn", value: '17%' }, // china
    { country: "in", value: '17%' }, // india
    { country: "us", value: '25%' }, // united states
    { country: "id", value: '15%' }, // indonesia
    { country: "pk", value: '13%' }, // pakistan
    { country: "br", value: '16%' }, // brazil
    { country: "ph", value: '15%' }, // philippines
    { country: "tr", value: '8%' }, // Turkey
    { country: "it", value: '7%' }, // Italy
    { country: "cd", value: '8%' }, // DR Congo
  ];

  const getHref = [
    {countryName: 'CN' ,href: `https://www.gfdrr.org/en/feature-story/natural-disaster-challenges-china-key-trends-and-insights`,
    target: "_blank"},
    {countryName: 'IN' ,href: `https://www.thehindu.com/news/national/natural-disasters-caused-25-million-internal-displacements-in-india-in-2022-report-says/article66865269.ece#:~:text=India%20recorded%202%2C227%20human%20casualties,2021%20and%201%2C338%20in%202020.`,
    target: "_blank"},
    {countryName: 'US' ,href: `https://en.wikipedia.org/wiki/List_of_natural_disasters_in_the_United_States`,
    target: "_blank"},
    {countryName: 'ID' ,href: `https://en.wikipedia.org/wiki/List_of_natural_disasters_in_Indonesia#:~:text=Almost%20all%20of%20the%20disasters,deaths%20estimated%20at%20343%20people.`,
    target: "_blank"},
    {countryName: 'PK' ,href: `https://www.unicef.org/emergencies/devastating-floods-pakistan-2022`,
    target: "_blank"},
    {countryName: 'BR' ,href: `https://brazilian.report/liveblog/politics-insider/2024/01/23/brazil-had-record-number-of-natural-disasters-in-2023/`,
    target: "_blank"},
    {countryName: 'PH' ,href: `https://reliefweb.int/report/philippines/philippines-2023-significant-natural-hazards-and-conflicts-snapshot-12-january-2024`,
    target: "_blank"},
    {countryName: 'TR' ,href: `https://disasterphilanthropy.org/disasters/2023-turkey-syria-earthquake/#:~:text=with%20lasting%20trauma.-,On%20Feb.,killing%20at%20least%20one%20person.`,
    target: "_blank"},
    {countryName: 'IT' ,href: `https://www.statista.com/topics/12126/natural-disasters-in-italy/#topicOverview`,
    target: "_blank"},
    {countryName: 'CD' ,href: `https://www.unicef.org/drcongo/en/topics/natural-disasters#:~:text=Nyiragongo%20volcano%20eruption%3A%20the%20aftermath,of%20the%20Congo%20(DRC).`,
    target: "_blank"},
  ];


  const getHref2 = ({ countryCode }) => {
    const ret = ( {
      href: `https://www.gfdrr.org/en/feature-story/natural-disaster-challenges-china-key-trends-and-insights`,
      target: "_blank"  
    }
    )

    console.log("->" + countryCode);
    getHref.forEach( (x) => {
      // console.log(x.countryName ,countryCode);
        if(x.countryName == countryCode) ret.href = x.href;
    })
    return ret
  };

  return (
    <div>
      <h2 style={{ display: 'flex', alignItem: 'center', justifyContent: 'center' }}><b>Countries with the most Natural Disasters in 2023</b></h2>
      <div className="Data" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <WorldMap
          color="#39cac4"
          value-suffix="percentage"
          size= 'responsive'
          tooltipBgColor='grey'
          data={data}
          backgroundColor=""
          hrefFunction={getHref2}
          frameColor="black"
          frame 
        />
        </div>
    </div>
  );
}
export default DataMap;


