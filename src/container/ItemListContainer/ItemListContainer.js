import './ItemListContainer.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemList";
/* import ProgramaCursos from '../../components/data/programa.json' */
import { collection, getDocs, query} from "firebase/firestore";
import { getFirestore } from "../../firebase/index";


const ListContainer= (props) => {  

    const [grilla, setGrilla] = useState([]);
    const{ categoryID } = useParams();


	useEffect(() => {
		const db = getFirestore();
		async function getItems(db) {
			const itemsCol = categoryID
				? query(
						collection(db, 'items'),
				  )
				: collection(db, 'items');
			const snapshot = await getDocs(itemsCol);
      const itemsList = snapshot.docs.map((doc) => doc.data())
       tipoHOME ? setGrilla(itemsList.filter((curso) => curso.tipo === tipoHOME)) : setGrilla(itemsList) ||
        tipoID ? setGrilla(itemsList.filter((curso) => curso.tipo === tipoID)) : setGrilla(itemsList)
		}
		getItems(db);
  }, [tipoID, tipoHOME]);
	
  return (
    <div>
        <div className ="hcupos contenedorCursos">{props.greeting}</div>
        <div className="itemList">
               <ItemList cursos={grilla}/>  
          </div>
    </div>
  );
}  
export default ListContainer;
  