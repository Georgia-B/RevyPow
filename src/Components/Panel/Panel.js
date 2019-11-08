import React from 'react';
import Temperature from '../TemperatureSection/Temperature';
import SnowSection from '../SnowSection/SnowSection';
import Loading from '../Loading/Loading';
import ContentSection from '../ContentSection/ContentSection';

const Panel = (props) => {
    const { data } = props;
    if (!data) {
        return <Loading />
    }
    return (
        <section className="panel">
            <div>
                <h1 className="panel__title">RevyPow</h1>
            </div>
            <ContentSection className="snow-container">
                <SnowSection data={data.newSnow} />
                <SnowSection data={data.base} />
            </ContentSection>
            <ContentSection>
                {data.temperatures.map(temp => {
                    return <Temperature
                        key={temp.title}
                        title={temp.title}
                        subtitle={temp.subtitle}
                        value={temp.value} />
                })}
            </ContentSection>
            <div>
                <div>Last updated</div><div>{data.dateUpdated.value}</div>
            </div>
        </section>
    );
}

export default Panel;
