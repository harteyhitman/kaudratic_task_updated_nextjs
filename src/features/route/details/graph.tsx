"use client"

import React, { useState, useCallback } from "react";
import GraphFooter from './graphFooter'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


const data = [
  {
    name: "June 01",
    uv: 1000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "June 02",
    uv: 5000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "June 03",
    uv: 3000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "June 04",
    uv: 2000,
    pv: 3908,
    amt: 2000
  },
  {
    name: "June 05",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },

];

export default function Graph() {
  const [opacity, setOpacity] = useState({
    uv: 1,
    pv: 1
  });

  const handleMouseEnter = useCallback(
    (o: any) => {
      const { dataKey } = o;

      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity, setOpacity]
  );

  const handleMouseLeave = useCallback(
    (o: any) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity, setOpacity]
  );

  return (
    <div>
      <div className='flex flex-col  item-center gap-4 mt-10 bg-primary rounded-lg p-4 justify-center '> 
        <div className="graph_state flex gap-3 justify-end mr-5">
          <select className="bg-[#F4F4F4] font-[600] text-[#44566C] px-3 py-2 rounded-lg outline-none text-[16px] font-Inter" title="status" name="status" id="status"><option value="status" >Status</option></select>
          <select className="bg-[#F4F4F4] font-[600] text-[#44566C] px-3 py-2 rounded-lg outline-none text-[16px] font-Inter" title="type" name="type" id="type"><option value="type" >Type</option></select>
        </div>
        <div className="mt-4">
          <LineChart
            width={640}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <Line
              type="monotone"
              dataKey="pv"
              strokeOpacity={opacity.pv}
              stroke="#FF6B55"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              strokeOpacity={opacity.uv}
              stroke="#068428"
              className="font-[18px]"
            />
          </LineChart>
        </div>
      </div>
      <GraphFooter />
    </div>

  )
}
