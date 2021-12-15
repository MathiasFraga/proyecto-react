import Item from '../item/item.js';
import { useEffect, useState } from 'react';
import { getFirestore } from "../../firebase/index";
import Loader from '../Loader/loader.js';
import './itemList.css';
import { Link } from 'react-router-dom';

function ItemList({ curso }) {

	const [cursos, setCursos] = useState([]);

	const db = getFirestore()
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (db) {
					resolve(db);
				} else {
					reject('No se encontró nada');
				}
			}, 2000);
		});

	useEffect(() => {
    const db = getFirestore()
    .then((res) =>
				curso.category
					? setCursos(
							res.filter(
								(db) => {
                  return db.curso.category === curso.category;
                }
							)
					  )
					: setCursos(db)
			)
			.catch((err) => console.log(err));
	}, [curso.category]);
	console.log(cursos.length);

	return (
		<section className='itemListContainer'>
			<h1 className='title'>{curso.title}</h1>
			<nav>
				<Link key='all' to={`/`}>
					<span className='ms-2 me-2 text-uppercase pointer'>
						Todos los cursos
					</span>
				</Link>
				<Link key='tech' to={`/category/tech`}>
					<span className='ms-2 me-2 text-uppercase pointer'>
						Cursos
					</span>
				</Link>
				<Link key='home' to={`/category/house`}>
					<span className='ms-2 me-2 text-uppercase pointer'>
						Home
					</span>
				</Link>
			</nav>

			<div className='itemListContainer-container'>
				{curso.length ? (
					curso.map((cursos) => (
						<Item
							key={cursos.title}
							category={cursos.categoria}
							id={cursos.id}
							img={cursos.imagen}
							name={cursos.name}
							price={cursos.price}
							stock={cursos.stock}
						/>	
            ))
            ) : (
              <Loader />
            )}
          </div>
        </section>
      );
    }
 export default ItemList;