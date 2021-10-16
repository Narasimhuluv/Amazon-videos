import React from 'react';
import { API_KEY ,baseURL} from '../utils/index';
import { NavLink } from 'react-router-dom';

 class TopRated extends React.Component {
     constructor(){
         super();
         this.state={
             isLoading : true,
             weekTrending : []
         }
     }
     componentDidMount(){
        this.FetchDiscover();
     }
     FetchDiscover(){
         fetch(baseURL+`/movie/top_rated?api_key=${API_KEY}&language=en-US`)
         .then((res) => res.json())
         .then((data) => {
             this.setState({
                 isLoading : false,
                 weekTrending : data.results
             })
            //  console.log(this.state.weekTrending)
         })

     }
    render() {
        var WeekTrending = this.state.weekTrending
        if(this.state.isLoading){
            return(
                <div className="m-auto">
 <h2 className="block w-3/12 text-center text-white text-xl m-auto"> loading . . .</h2>                </div>
            )
        }

        return (
            <section className="-mt-20">
                <div className="scrollContainer p-12">
                <h2 className="text-2xl mx-2 text-white">Top Rated </h2>
                    {
                        WeekTrending.map((each) => (
                            <EachArticle each={each}/>
                        
                        ))
                    }
                </div>
            </section>
        )
    }
}

function EachArticle(props){
    var {each} = props
    return(
        <>
        <NavLink to={`/top/${each.id}`}>
            <article className="w-2/12 m-1 hover:shadow-md">
                <img className="w-full  front_image" src={`http://image.tmdb.org/t/p/w500${each.poster_path}`} alt="" />
                <img  className="w-full back_image" src={`http://image.tmdb.org/t/p/w500${each.backdrop_path}`} alt="" />
                <div className="article_data text-white px-2 mt-2">
                    <h3 className="font-extrabold">{each.original_name} || {each.original_title}</h3>
                    <p className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Overview : </span>{(each.overview).slice(0,20)} . . . .</p>
                    <h4 className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Popularity : </span>{each.popularity}</h4>
                    <h5 className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Voting : </span>{each.vote_average}</h5>
                </div>
            </article>
        </NavLink>
        </>
    )
}

export default TopRated;
