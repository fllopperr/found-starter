export interface IRoute {
	path: string
	element: React.ReactNode
	name?: string
	children?: IRoute[]
}
