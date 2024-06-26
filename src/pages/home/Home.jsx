import { useState, useEffect } from "react";
import { Card } from "../../components/card/Card";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { getAllNews, getTopPost } from "../../services/postsService";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [ loading, setLoading ] = useState(true)  

  async function findtNews() {

    try{
      const newsResponse = await getAllNews();
      if(newsResponse.data && newsResponse.data.results){
        setNews(newsResponse.data.results);
        setLoading(false)
      }

      const topNewsResponse = await getTopPost();
      if(topNewsResponse.data && topNewsResponse.data.news){
        setTopNews(topNewsResponse.data.news);
        setLoading(false)
      }
    }catch(err){
      console.log(err)
      setNews([])
      setTopNews([])
    }
  }

  useEffect(() => {
    const buscarNoticias = async () => {
        await findtNews()
    }    
    buscarNoticias();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>carregando...</p>
      </div>
    );
  }

  return (
    <section>
      <HomeHeader>
        {topNews && (
          <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          id={topNews.id}
          comments={topNews.comments}
          />
        )}
      </HomeHeader>

      <HomeBody>
        {Array.isArray(news) && news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              id={item.id}
              comments={item.comments}
            />
          );
        })}
      </HomeBody>
    </section>
  );
}
