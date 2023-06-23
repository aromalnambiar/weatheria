'use client';

import {Card , Metric , Text, Color} from  "@tremor/react"
import { global } from "styled-jsx/css";

type Props = {
    title : string;
    metric : string;
    color? : Color;
}

function StatCard({title, metric, color} : Props) {
  return (
        <Card className="card-color " decorationColor={color} decoration="top" >
            <Text>{title}</Text>
            <Metric>{metric}</Metric>
        </Card>
  )
}

export default StatCard