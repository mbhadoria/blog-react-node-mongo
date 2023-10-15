import { Link } from "react-router-dom";
import articles from "./article-content";

const ArticlesListPage = () => {

    return(
        <>
        <h1>Articles List</h1>
   
            {articles.map((article, i) => (
                <>
                <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}><h3>{article.title}</h3></Link>
                <p key={i}>{article.content[0].substring(0, 150)}...</p>
                </>
            ))}
 
        </>

    );
}

export default ArticlesListPage;