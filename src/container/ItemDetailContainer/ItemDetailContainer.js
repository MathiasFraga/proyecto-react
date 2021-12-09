import ItemDetails from '../../components/ItemDetail/itemDetail';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";


function ItemDetailContainer() {
	const [cursos, setCursos] = useState([]);
	const{ itemID } = useParams();


	useEffect(() => {
		const db = getFirestore();
		const theItem = doc(db, 'items', itemID);
		getDoc(theItem).then((snapshot) => {
			if (snapshot.exists()) {
				setCursos(snapshot.data());
			}
		});
	}, [itemID]);
	
	
		return (
			<div className="container d-flex justify-content-center align-items-center h-100">
			  <div className="row">
				{cursos ? cursos.map((curso) => (
				  <div className="col-md-4" key={curso.id}>
					<ItemDetails  curso ={cursos} />
				  </div>
				))
				: "Cargando los cursos disponibles..."}
			  </div>
			</div>
		  );
		}

export default ItemDetailContainer;
