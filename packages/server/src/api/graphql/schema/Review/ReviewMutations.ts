import { Container } from 'typedi'

import ReviewService from '../../../../services/Review'
import { MutationResolvers } from '../../generated/types'

export const createReview: MutationResolvers['createReview'] = async (
	parent,
	{ book, content, rating },
	{ user, loaders: { bookByIds } },
) => {
	const reviewServiceInstance = Container.get(ReviewService)
	const result = await reviewServiceInstance.createReview({
		book,
		author: user.id,
		content,
		rating,
	})
	bookByIds.clear(String(result.book))

	return result
}

export const updateReview: MutationResolvers['updateReview'] = async (
	parent,
	{ id, content, rating },
	{ user, loaders: { bookByIds } },
) => {
	const reviewServiceInstance = Container.get(ReviewService)
	const result = await reviewServiceInstance.updateReview({
		id,
		userId: user.id,
		content,
		rating,
	})
	bookByIds.clear(String(result.book))

	return result
}

export const deleteReview: MutationResolvers['deleteReview'] = async (
	parent,
	{ id },
	{ user, loaders: { bookByIds } },
) => {
	const reviewServiceInstance = Container.get(ReviewService)
	const result = await reviewServiceInstance.deleteReview({
		id,
		userId: user.id,
	})
	bookByIds.clear(String(result.book))

	return result
}
