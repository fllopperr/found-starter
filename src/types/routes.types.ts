export interface IRoute {
	path?: string
	index?: boolean
	element: React.ReactNode
	name?: string
	children?: IRoute[]
}
