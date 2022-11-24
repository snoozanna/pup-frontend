import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/articles/articles";
import GameNav from "../../components/GameNav";

const ArticlesList = () => {
  return (
    <div>
      <GameNav />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>List of games</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles.data} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
