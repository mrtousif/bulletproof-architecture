import { Request } from 'express'
import { AUTH_KEY } from '../config'
import { decodeToken } from './token'
import { IUser } from '../models/Users'
import loaders, { ILoaders } from './dataloaders'

// Users
const getUser = async (req: Request) => {
	const token = req.cookies[AUTH_KEY] || req.headers[AUTH_KEY]
	if (!token) return null

	try {
		const decoded = await decodeToken(token)
		const user = await loaders.userByIds.load(decoded.id)
		return user
	} catch (err) {
		return null
	}
}

// Context
export interface MyContext {
	user: IUser
	loaders: ILoaders
}

const context = async ({ req }: { req: Request }) => {
	const user = await getUser(req)
	return { user, loaders }
}

export default context
