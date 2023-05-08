const  { ChartJSNodeCanvas, ChartCallback } =require('chartjs-node-canvas');
const { ChartConfiguration } =require('chart.js');
const { promises  } =require('fs') ;

const createPie=async()=>{
    const width = 400;
	const height = 400;
	const configuration = {
		type: 'pie',
		data: {
			labels:[
				'Red',
				'Blue',
				'Yellow'
			],
			datasets:[
				{
					label:'first dataset',
					data:[300,50,100],
					backgroundColor:[
						'rgb(255,99,132)',
						'rgb(54,162,235)',
						'rgb(255,205,86)'
					]
				}
			]
		},
		options: {
		},
		plugins: [{
			id: 'background-colour',
			beforeDraw: (chart) => {
				const ctx = chart.ctx;
				ctx.save();
				ctx.fillStyle = 'white';
				ctx.fillRect(0, 0, width, height);
				ctx.restore();
			}
		}]
	};
    const chartCallback = (ChartJS) => {
		ChartJS.defaults.responsive = true;
		ChartJS.defaults.maintainAspectRatio = false;
	};
	const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });
	const buffer = await chartJSNodeCanvas.renderToBuffer(configuration);
	await promises.writeFile('./example2.png', buffer, 'base64');
}

module.exports={
    createPie
}