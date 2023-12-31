import Article from 'src/components/Article'
export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ articles }) => {
  return articles.map((article) => (
    <Article key={Article.id} article={article} />
  ))
}
