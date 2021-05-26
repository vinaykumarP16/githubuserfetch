import React,{ useState , useEffect } from 'react';
import './style.css';
import axios from 'axios';
import Results from './results.js';

const Searchbar=()=>{

    const[searchInput,setSearchInput]=useState('');
    const[basicInfo,setBasicInfo]=useState([]);
    const[repos,setRepos]=useState([]); 
    const[avatar,setAvatar]=useState('');
    const[name,setName]=useState('');
    const[login,setLogin]=useState('');
    const[pubrepo,setPubrepo]=useState('');
   
/*    const[name,setName]=useState('');
    const[avatar,setAvatar]=useState(''); 
    const[pubrepo,setPubrepo]=useState('');
    const[home,setHome]=useState('');
*/
/*    useEffect(()=>{
        fetch(`https://api.github.com/users/example`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    })*/

    const handleChange=(e)=>{
        setSearchInput(e.target.value);
    }

    const handleClick= async (e)=>{
        console.log(searchInput);
        try{
            const basicInfo=await 
            axios(`https://api.github.com/users/${searchInput}`);
            setBasicInfo(basicInfo);
            setAvatar(basicInfo.data.avatar_url);
            setName(basicInfo.data.name);
            setLogin(basicInfo.data.login);
            setPubrepo(basicInfo.data.public_repos)
            const result= await axios(`https://api.github.com/users/${searchInput}/repos`);
            setRepos(result); 

        }catch(error){
            console.log('error');
        }


    }
   

    console.log(repos);
    console.log(basicInfo);
    console.log(avatar);


    return(
        <>
            <div className="searchbar">
                <input type="text" placeholder="github name"  value={searchInput} onChange={handleChange}/>
                <button onClick={handleClick}><i class="fas fa-search"></i></button>
            </div>
            <div className="userdata">
            <img src={avatar == 0 ? "https://avatars.githubusercontent.com/u/57936?v=4" : avatar} alt="avatar"/>
            <h1>{name ==0 ? "name" : name}</h1>
            <h1>{login ==0 ? "username" : login}</h1>
            <h3>{pubrepo ==0 ? "total repos" : pubrepo}</h3>
            </div>
            <Results repos={repos}/>
            
        </>

        );
}

export default Searchbar;