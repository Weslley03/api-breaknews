import { useState, useEffect } from "react";
import { Card } from "../../components/card/Card";
import { HomeBody, HomeHeader, PaginButton } from "./HomeStyled";
import { getAllNews, getTopPost } from "../../services/postsService";

export default function Home() {
  const [news, setNews] = useState([]);
  const [ topNews, setTopNews] = useState({});
  const [ loading, setLoading ] = useState(true)  
  const [ limit, setLimit ] = useState(6)
  const [ offset, setOffset ] = useState(0)
  const [ total, setTotal ] = useState(0)
  const [ nextUrl, setNextUrl ] = useState('')
  const [ previousUrl, setPreviousUrl ] = useState('')

  async function findtNews(offset = 1, limit = 6) {
    setLoading(true)
    try{
      const newsResponse = await getAllNews(offset, limit)
      if(newsResponse.data && newsResponse.data.results){
        setNews(newsResponse.data.results)
        setNextUrl(newsResponse.data.nextUrl)
        setPreviousUrl(newsResponse.data.previousUrl)
        setTotal(newsResponse.data.total) 
      }

      const topNewsResponse = await getTopPost();
      if(topNewsResponse.data && topNewsResponse.data.news){
        setTopNews(topNewsResponse.data.news);
      }
      setLoading(false);
    }catch(err){
      console.log(err)
      setNews([])
      setTopNews({})
      setLoading(false)
    }
  }

  useEffect(() => {
    findtNews(offset, limit)
  }, [offset, limit])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>carregando...</p>
      </div>
    );
  } 

  const handleNext = () => {
    if (nextUrl) {
      const params = new URLSearchParams(nextUrl.split('?')[1])
      setOffset(Number(params.get('offset')))
      setLimit(Number(params.get('limit')))
    }
  }

  const handlePrevious = () => {
    if (previousUrl) {
      const params = new URLSearchParams(previousUrl.split('?')[1]);
      setOffset(Number(params.get('offset')))
      setLimit(Number(params.get('limit')))
    }
  }

  return (
    <section>
      <HomeHeader>
        {topNews && (
          <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner.startsWith('data:') ? topNews.banner : `data:image/*;base64,${topNews.banner}`}
          likes={topNews.likes}
          id={topNews.id}
          comments={topNews.comments}
          actions={false}
          textLimit={200}
          />
        )}
      </HomeHeader>

      <HomeBody>
        {Array.isArray(news) && news.map((item) => {
          const bannerSrc = item.banner.startsWith('data:') ? item.banner : `data:image/*;base64,${item.banner}`
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={bannerSrc}
              likes={item.likes}
              id={item.id}
              comments={item.comments}
              textLimit={150}
            />
          );
        })}
      </HomeBody>

      <PaginButton>
        <button onClick={handlePrevious} disabled={!previousUrl}>anterior</button>
        <button onClick={handleNext} disabled={!nextUrl}>próximo</button>
      </PaginButton>

    </section>
  );
}
