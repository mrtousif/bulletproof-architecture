import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
  Time: any;
  Upload: any;
};


export type AuthData = {
  __typename?: 'AuthData';
  user: User;
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  joined: Scalars['DateTime'];
  avatar: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<Book>;
  createReview?: Maybe<Review>;
  deleteBook?: Maybe<Scalars['ID']>;
  deleteReview?: Maybe<Review>;
  signin?: Maybe<AuthData>;
  signup?: Maybe<User>;
  updateBook?: Maybe<Book>;
  updateMe: User;
  updateReview?: Maybe<Review>;
};


export type MutationCreateBookArgs = {
  title: Scalars['String'];
  summary: Scalars['String'];
  content: Scalars['String'];
};


export type MutationCreateReviewArgs = {
  book: Scalars['ID'];
  content: Scalars['String'];
  rating: Scalars['Int'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['ID'];
};


export type MutationSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  summary: Scalars['String'];
  content: Scalars['String'];
};


export type MutationUpdateMeArgs = {
  file?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  content: Scalars['String'];
  rating: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books: BookConnection;
  me?: Maybe<User>;
  review?: Maybe<Review>;
  reviews: ReviewConnection;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryBooksArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryReviewsArgs = {
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ReviewsWhereInput>;
  orderBy?: Maybe<ReviewOrder>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['ID'];
  title: Scalars['String'];
  author: User;
  summary: Scalars['String'];
  content: Scalars['String'];
  ratingsAverage: Scalars['Float'];
  ratingsQuantity: Scalars['Int'];
  created: Scalars['DateTime'];
  lastChanged: Scalars['DateTime'];
};

export type BookConnection = {
  __typename?: 'BookConnection';
  edges: Array<BookEdge>;
  nodes: Array<Book>;
  pageInfo: PageInfo;
};

export type BookEdge = {
  __typename?: 'BookEdge';
  node: Book;
  cursor: Scalars['String'];
};

export type BooksWhereInput = {
  _id?: Maybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['ID'];
  book: Book;
  author: User;
  content: Scalars['String'];
  rating: Scalars['Int'];
  created: Scalars['DateTime'];
};

export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  edges: Array<ReviewEdge>;
  nodes: Array<Review>;
  pageInfo: PageInfo;
};

export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  node: Review;
  cursor: Scalars['String'];
};

export type ReviewOrder =
  | 'created_ASC'
  | 'created_DESC'
  | 'rating_ASC'
  | 'rating_DESC';

export type ReviewsWhereInput = {
  book?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};





export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  path: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type CreateReviewMutationVariables = Exact<{
  book: Scalars['ID'];
  content: Scalars['String'];
  rating: Scalars['Int'];
}>;


export type CreateReviewMutation = (
  { __typename?: 'Mutation' }
  & { createReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'content' | 'rating' | 'created'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ), book: (
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'ratingsAverage' | 'ratingsQuantity'>
    ) }
  )> }
);

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  summary: Scalars['String'];
  content: Scalars['String'];
}>;


export type UpdateBookMutation = (
  { __typename?: 'Mutation' }
  & { updateBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'created' | 'lastChanged' | 'summary' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'email'>
    ) }
  )> }
);

export type UpdateMeMutationVariables = Exact<{
  file?: Maybe<Scalars['Upload']>;
  name: Scalars['String'];
}>;


export type UpdateMeMutation = (
  { __typename?: 'Mutation' }
  & { updateMe: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'avatar' | 'name'>
  ) }
);

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteReviewMutation = (
  { __typename?: 'Mutation' }
  & { deleteReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id'>
    & { book: (
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'ratingsAverage' | 'ratingsQuantity'>
    ) }
  )> }
);

export type UpdateReviewMutationVariables = Exact<{
  id: Scalars['ID'];
  content: Scalars['String'];
  rating: Scalars['Int'];
}>;


export type UpdateReviewMutation = (
  { __typename?: 'Mutation' }
  & { updateReview?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'content' | 'rating' | 'created'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ), book: (
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'ratingsAverage' | 'ratingsQuantity'>
    ) }
  )> }
);

export type ReviewsQueryVariables = Exact<{
  first: Scalars['Int'];
  after?: Maybe<Scalars['String']>;
  where?: Maybe<ReviewsWhereInput>;
  orderBy?: Maybe<ReviewOrder>;
}>;


export type ReviewsQuery = (
  { __typename?: 'Query' }
  & { reviews: (
    { __typename?: 'ReviewConnection' }
    & { nodes: Array<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'content' | 'rating' | 'created'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  ) }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'summary' | 'content' | 'ratingsAverage' | 'ratingsQuantity' | 'created' | 'lastChanged'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  )> }
);

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBookMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteBook'>
);

export type CreateBookMutationVariables = Exact<{
  title: Scalars['String'];
  summary: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'created' | 'lastChanged' | 'summary' | 'content'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name' | 'avatar'>
    ) }
  )> }
);

export type BooksQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  search?: Maybe<Scalars['String']>;
}>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookConnection' }
    & { nodes: Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'title' | 'created' | 'lastChanged' | 'summary' | 'ratingsAverage' | 'ratingsQuantity'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name' | 'avatar'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'endCursor' | 'hasNextPage'>
    ) }
  ) }
);

export type SearchQueryVariables = Exact<{
  first: Scalars['Int'];
  search: Scalars['String'];
  after?: Maybe<Scalars['String']>;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookConnection' }
    & { nodes: Array<(
      { __typename?: 'Book' }
      & Pick<Book, 'id' | 'title' | 'created' | 'summary'>
      & { author: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);


export const CreateReviewDocument = gql`
    mutation CreateReview($book: ID!, $content: String!, $rating: Int!) {
  createReview(book: $book, content: $content, rating: $rating) {
    id
    author {
      id
      name
    }
    book {
      id
      ratingsAverage
      ratingsQuantity
    }
    content
    rating
    created
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      book: // value for 'book'
 *      content: // value for 'content'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const UpdateBookDocument = gql`
    mutation UpdateBook($id: ID!, $title: String!, $summary: String!, $content: String!) {
  updateBook(id: $id, title: $title, summary: $summary, content: $content) {
    id
    title
    created
    lastChanged
    summary
    content
    author {
      id
      name
      email
    }
  }
}
    `;
export type UpdateBookMutationFn = Apollo.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
        return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, baseOptions);
      }
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
export const UpdateMeDocument = gql`
    mutation UpdateMe($file: Upload, $name: String!) {
  updateMe(file: $file, name: $name) {
    id
    avatar
    name
  }
}
    `;
export type UpdateMeMutationFn = Apollo.MutationFunction<UpdateMeMutation, UpdateMeMutationVariables>;

/**
 * __useUpdateMeMutation__
 *
 * To run a mutation, you first call `useUpdateMeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMeMutation, { data, loading, error }] = useUpdateMeMutation({
 *   variables: {
 *      file: // value for 'file'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateMeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMeMutation, UpdateMeMutationVariables>) {
        return Apollo.useMutation<UpdateMeMutation, UpdateMeMutationVariables>(UpdateMeDocument, baseOptions);
      }
export type UpdateMeMutationHookResult = ReturnType<typeof useUpdateMeMutation>;
export type UpdateMeMutationResult = Apollo.MutationResult<UpdateMeMutation>;
export type UpdateMeMutationOptions = Apollo.BaseMutationOptions<UpdateMeMutation, UpdateMeMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: ID!) {
  deleteReview(id: $id) {
    id
    book {
      id
      ratingsAverage
      ratingsQuantity
    }
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, baseOptions);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($id: ID!, $content: String!, $rating: Int!) {
  updateReview(id: $id, content: $content, rating: $rating) {
    id
    author {
      id
      name
    }
    book {
      id
      ratingsAverage
      ratingsQuantity
    }
    content
    rating
    created
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, baseOptions);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const ReviewsDocument = gql`
    query Reviews($first: Int!, $after: String, $where: ReviewsWhereInput, $orderBy: ReviewOrder) {
  reviews(first: $first, after: $after, where: $where, orderBy: $orderBy) {
    nodes {
      id
      author {
        id
        name
      }
      content
      rating
      created
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, baseOptions);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, baseOptions);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    id
    title
    summary
    content
    ratingsAverage
    ratingsQuantity
    author {
      id
      name
    }
    created
    lastChanged
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const DeleteBookDocument = gql`
    mutation DeleteBook($id: ID!) {
  deleteBook(id: $id)
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, baseOptions);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const CreateBookDocument = gql`
    mutation CreateBook($title: String!, $summary: String!, $content: String!) {
  createBook(title: $title, summary: $summary, content: $content) {
    id
    title
    created
    lastChanged
    summary
    content
    author {
      id
      name
      avatar
    }
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      summary: // value for 'summary'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const BooksDocument = gql`
    query Books($first: Int, $after: String, $last: Int, $before: String, $search: String) {
  books(
    first: $first
    after: $after
    last: $last
    before: $before
    search: $search
  ) {
    nodes {
      id
      title
      created
      lastChanged
      summary
      ratingsAverage
      ratingsQuantity
      author {
        id
        name
        avatar
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *      search: // value for 'search'
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const SearchDocument = gql`
    query Search($first: Int!, $search: String!, $after: String) {
  books(first: $first, search: $search, after: $after) {
    nodes {
      id
      title
      created
      summary
      author {
        id
        name
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      first: // value for 'first'
 *      search: // value for 'search'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;