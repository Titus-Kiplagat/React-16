import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = ({ dataPoints }) => {
	const arrayOfValues = dataPoints.map(dataPoint => dataPoint.value);
	const totalMaxValue = Math.max(...arrayOfValues);
	
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
			<ChartBar
					key={dataPoint.label}
					dataPoint={dataPoint}
					maxValue={totalMaxValue}
			/>	
			))}
		</div>
	)
}

export default Chart