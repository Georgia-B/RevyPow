import React from 'react';
import Temperature from '../TemperatureSection/Temperature';
import SnowSection from '../SnowSection/SnowSection';
import Loading from '../Loading/Loading';
import ContentSection from '../ContentSection/ContentSection';
import WindSection from '../WindSection/WindSection';
import snowflake from '../../res/snowflake.png';
import thermometer from '../../res/thermometer.png';
import wind from '../../res/wind-swirls.png';

const Panel = (props) => {
    const { data } = props;
    if (!data) {
        return <Loading />
    }
    return (
        <section className="panel-container">
            <div className="panel">
                <ContentSection image={snowflake} alt="snowflake">
                    <SnowSection data={data.daySnow} noUnit={true} />
                    <SnowSection data={data.newSnow} className="snowsection--large" />
                    <SnowSection data={data.base} />
                </ContentSection>
                <ContentSection image={wind} alt="wind" className="weather-container">
                    <WindSection wind={data.wind.value} windDirection={data.wind.direction} />
                </ContentSection>
                <ContentSection image={thermometer} alt="temperature" className="temperature-container">
                    {data.temperatures.map(temp => {
                        return <Temperature
                            key={temp.title}
                            title={temp.title}
                            subtitle={temp.subtitle}
                            value={temp.value} />
                    })}
                </ContentSection>
                {data.dateUpdated &&
                    <div className="panel__date">
                        <div>Last updated</div>
                        <div>{data.dateUpdated.value}</div>
                    </div>
                }
            </div>
        </section>
    );
}

export default Panel;
