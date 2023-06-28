'use client'

import {Card, AreaChart, Title} from '@tremor/react';

type Props = {
    result : Root;
}

function HumChart({result} : Props) {

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
                    "Humidity (%)" :result.hourly.relativehumidity_2m[i],
                }));

                const dataFormatter = (number: number) => `${number}%`;

                return (
                    <Card className='card-color lg:-ml-5 mt-5'>
                        <Title>Humidity Levels</Title>
                        <AreaChart
                            className="mt-6"
                            data={data}
                            showLegend
                            index="time"
                            categories={["Humidity (%)"]}
                            colors={["teal"]}
                            minValue={0}
                            maxValue={100}
                            valueFormatter={dataFormatter}
                            yAxisWidth={40}
                        />
                    </Card>
        );

}

export default HumChart