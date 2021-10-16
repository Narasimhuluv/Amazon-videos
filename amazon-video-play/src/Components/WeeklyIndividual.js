import React from 'react'
import { API_KEY ,baseURL} from '../utils/index';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

 class WeeklyIndividual extends React.Component {
     constructor(){
         super();
         this.state={
             isLoading : true,
             weekTrending : []
         }
     }
     componentDidMount(){
        this.FetchWeekTrending();
     }
     FetchWeekTrending(){
         fetch(baseURL+`/trending/all/week?api_key=${API_KEY}&language=en-US`)
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
        var id = this.props.match.params.id
        var trending = []
         WeekTrending.map((each) => {
            if(id == each.id){
                console.log(each)
                return trending.push(each)
            }
        })
    // var trending= week[0]
    console.log(trending)


        if(this.state.isLoading){
            return(
                <div className="m-auto">
 <h2 className="block w-3/12 text-center text-white text-xl m-auto"> loading . . .</h2>                </div>
            )
        }

        return (
            <section className="h-screen">
               {
                   trending.map((each)=> (
                    <div className="flex items-center relative ml-20 leading-10 opacity-80">
                        <div className="text-white uppercase w-3/12">
                            <h3 className="font-extralight flex text-3xl ">Movie Name : <h3 className="font-extrabold ml-3">{each.original_name} || {each.original_title}</h3></h3> 
                            <h4 className="font-extralight text-xl flex mt-2">MediaType : <h4 className="font-extrabold ml-3">{each.media_type}</h4></h4>
                            {/* <h4 className="flex"><p className="font-extralight">Origin Country : </p> <h4 className="ml-3">{each.origin_country[0]} </h4></h4> */}
                            {/* <h4 className="flex"><p className="font-extralight">Genere_id : </p><h4 className="ml-3 flex">{each.genre_ids.map((ids) => <p className="ml-1 mr-1">{(ids)}, </p>)}</h4> </h4> */}
                            <p className="capitalize flex absolute mt-28"><p className="mr-4 font-extralight">Overview : </p>{each.overview}</p>
                            <h4 className="flex "><p className="font-extralight mr-3">Populartiy :</p> {each.popularity}</h4>
                            <h5 className="flex "><p className="font-extralight mr-3">Vote_average :</p>{each.vote_average}</h5>
                            <h5 className="flex "><p className="font-extralight mr-3">vote_count :</p>{each.vote_count}</h5>
                        </div>
                        <figure className="w-9/12">
                        <img  className="w-full home_img" src={`http://image.tmdb.org/t/p/w500${each.backdrop_path}`} alt="" />
                        </figure>
                </div>
                   ))
               }
            </section>
        )
    }
}

// function EachArticle(props){
//     var {each} = props
//     return(
//         <>
//         <NavLink to={`/${each.id}`}>
//             <article className="w-2/12 m-1 hover:shadow-md">
//                 <img className="w-full  front_image" src={`http://image.tmdb.org/t/p/w500${each.poster_path}`} alt="" />
//                 <img  className="w-full back_image" src={`http://image.tmdb.org/t/p/w500${each.backdrop_path}`} alt="" />
//                 <div className="article_data text-white px-2 mt-2">
//                     <h3 className="font-extrabold">{each.original_name} || {each.original_title}</h3>
//                     <p className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Overview : </span>{(each.overview).slice(0,20)} . . . .</p>
//                     <h4 className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Popularity :</span>{each.popularity}</h4>
//                     <h5 className="font-extralight"><span className="text-sm font-bold inline-block mr-3">Voting :</span>{each.vote_average}</h5>
//                 </div>
//             </article>
//         </NavLink>
//         </>
//     )
// }

export default withRouter(WeeklyIndividual);
