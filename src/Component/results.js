import './style.css';

const Results=(props)=>{
    console.log(props);
    const { repos }=props;

    const listRepos= repos.length !==0 ? 
        repos.data.map((item)=><li className="repostyle" key={item.id} ><a href={item.html_url}>{item.name} :  
              {item.description} </a></li>)
        :<li>no repos found</li>;

        

    return(
        <div>
            
            <ul>
                {listRepos}
            </ul>

        </div>


        

        )
}

export default Results;