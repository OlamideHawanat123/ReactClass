import styles from './booklist.module.css';
import { useState } from 'react';


const BookList = () => {

	const bookList = [
	"Name of the Wind",
	"The Wise Man's Fear",
	"Kafka on the Shore",
	"The Master and the Margarita"
	]

	const [books, setBooks] = useState(bookList);
	const [newBook, setNewBook] = useState("")

	const handleDelete = (clickedIndex) => {
		const filteredBooks = books.filter((_, index) => index !== clickedIndex);
		setBooks(filteredBooks)
	}

	const addNewBookHandler = (event)=>{
		const book = event.target.value.trim()
		setNewBook(book)	
	}

	const submitNewBook = (event) =>{
		event.preventDefault()
		if(newBook !== ""){
			setBooks((prev)=>([...prev, newBook]))
		}
		setNewBook("")
	}

    return (
       
		<div className={styles.wrapper}>
			<header>
				<div className={styles.pageBanner}>
					<h1 className={styles.title}> Book Collections</h1>
					<p>Books</p>
					<form className={styles.searchBooks}>
						<input type="text" placeholder="Search books..." />
					</form>
				</div>
			</header>
			<div className={styles.bookList}>
				<h2 classNameName={styles.subtitle}>Books to Read</h2>
				{
					books.map((book, index)=>(
					<ul>
						<li>
							<span className={styles.name}>{book}</span>
							<span onClick={() => handleDelete(index)} className={styles.delete}>delete</span>
						</li>
					</ul>
					))
				}


				{/* <ul>
					<li>
						<span className={styles.name}>Name of the Wind</span>
						<span className={styles.delete}>delete</span>
					</li>
					<li>
						<span className={styles.name}>The Wise Man's Fear</span>
						<span className={styles.delete}>delete</span>
					</li>
					<li>
						<span className={styles.name}>Kafka on the Shore</span>
						<span className={styles.delete}>delete</span>
					</li>
					<li>
						<span className={styles.name}>The Master and the Margarita</span>
						<span className={styles.delete}>delete</span>
					</li>
				</ul> */}
			</div>
			<form onSubmit={submitNewBook} className={styles.addBook}>
				<input onChange={addNewBookHandler} value={newBook} type="text" placeholder="Add a book..." />
				<button>Add</button>
			</form>
		</div> 
    )      
}

export default BookList;