'use client'

import {Card, AreaChart, Title} from '@tremor/react';

type Props = {
    result : Root;
}

function TempChart({result} : Props) {

   

        const hourly = result?.hourly.time
                    .map((time) =>
                        new Date(time).toLocaleString("en-IN", {
                            hour: "numeric",
                            hour12: false,
                        })
                    )
                    .slice(1, 25);

                const data = hourly.map((hour, i) => ({
                    time: Number(hour),
                    "UV Index": result.hourly.uv_index[i],
                    "Temperature (°F)": result.hourly.temperature_2m[i],
                }));

                const dataFormatter = (number: number) => `${number}°F`;

                return (
                    <Card className='card-color lg:-ml-5'>
                        <Title>Temperature & UV Index</Title>
                        <AreaChart
                            className="mt-6"
                            data={data}
                            showLegend
                            index="time"
                            categories={["Temperature (°F)", "UV Index"]}
                            colors={["yellow", "rose"]}
                            minValue={0}
                            valueFormatter={dataFormatter}
                            yAxisWidth={40}
                        />
                    </Card>
        );

}

export default TempChart