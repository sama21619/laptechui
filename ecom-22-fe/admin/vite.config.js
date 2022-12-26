import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'
const getConfig = ({ command, mode }) => ({
    plugins: [react(), legacy()],
	resolve:{
		alias:{
		  '~' : path.resolve(__dirname, './src')
		},
	},
	vite: {
		esbuild: {
		  loader: {
			'.js': 'jsx',
		  }
		}
	}
})

export default getConfig
