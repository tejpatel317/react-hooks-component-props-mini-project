import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const mappedArticles = posts.map((article) => {
        return(<Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>)
})
    console.log(mappedArticles)
    return (
        <main>
            {mappedArticles}
        </main>
    )
}

export default ArticleList;