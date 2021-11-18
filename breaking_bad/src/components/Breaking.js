import React, {useState, useEffect} from "react";
import './style.css';
import axios from "axios";
function Breaking(){
    const [items, setItems] = useState([]);    
    useEffect(() => {

        const fetchItems = async () => {
            
            const result = await axios('https://www.breakingbadapi.com/api/characters');

            setItems(result.data);
        }

        fetchItems();

    }, []);
    return(
        <div className="container">
            {
            items.map((item) => {
                const {name, birthday, occupation, img, status, nickname, appearance} = item;
                return(
                    <div className = "cards">

                    <div className = "avatar">
                        <img src = {img} />
                    </div>
                    
                    <div className = "pading">
                    <div className = "nickname">
                        <h1>{nickname}</h1>
                    </div>
            
                    <div className = "realname">
                        <h3>Real Name : </h3>
                        <p>{name}</p>
                    </div>
            
                    <div className = "birthday">
                        <h3>Birthday : </h3>
                        <p>{birthday}</p>
                    </div>
            
                    <div className = "occupation">
                        <h3>occupation : </h3>
                        <p>{occupation[0]}</p>
                    </div>
            
                    <div className = "appearance">
                        <h3>appearance : </h3>
                        <p className="episods">{appearance}</p>
                    </div>
            
                    <div className = "status">
                        {status === "Alive" ? <h2 className = "alive">{status}</h2> : <h2 className = "dead">{status}</h2>}
                    </div>
                    </div>
                   </div>
                );
            })
        }


            
       </div>
    );
}
export default Breaking;