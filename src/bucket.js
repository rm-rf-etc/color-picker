import data from './data'

export default data.bucket('GLOBAL.COLOR', {
	state: {
		color1: '0,0,0',
	},
	methods: ({ put }) => ({
		setColor1: ({ rgb: {r,g,b} }) => put('color1', `${r},${g},${b}`),
	}),
});
