import mongoose from 'mongoose';
import Book from './models/bookModel';

function SeedBooks() {
	const Book = mongoose.model('Book');

	Book.collection.drop();

	Book.create([{
				title: 'War and Peace',
				genre: 'Historical Fiction',
				author: 'Lev Nikolayevich Tolstoy',
				read: false
			},
			{
				title: 'Les Misérables',
				genre: 'Historical Fiction',
				author: 'Victor Hugo',
				read: false
			},
			{
				title: 'The Time Machine',
				genre: 'Science Fiction',
				author: 'H. G. Wells',
				read: false
			},
			{
				title: 'A Journey into the Center of the Earth',
				genre: 'Science Fiction',
				author: 'Jules Verne',
				read: false
			},
			{
				title: 'The Dark World',
				genre: 'Fantasy',
				author: 'Henry Kuttner',
				read: false
			},
			{
				title: 'The Wind in the Willows',
				genre: 'Fantasy',
				author: 'Kenneth Grahame',
				read: false
			},
			{
				title: 'Life On The Mississippi',
				genre: 'History',
				author: 'Mark Twain',
				read: false
			},
			{
				title: 'Childhood',
				genre: 'Biography',
				author: 'Lev Nikolayevich Tolstoy',
				read: false
			}

		])
		.then(book => {
			console.log(`${book.length} books created`);
		})
		.catch((err) => {
			console.log(err);
		})
		.finally(() => {
			mongoose.connection.close();
		});
}

export {SeedBooks};