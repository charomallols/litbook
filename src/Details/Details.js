import react, { Component} from 'react'
import { Link, Redirect } from 'react-router-dom';
import getBooks from '../books-get';
import './Details.css';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            book: {}
        };
    }

    componentDidMount() {
        let bookId = this.props.match.params.bookId;
        let book = getBooks()
            .find((book) => book.id === bookId);
        this.setState({ book });
    }

    render() {
        if (this.state.book === undefined) {
            return <Redirect to='/not-found' />;
        } else {
            return (
                <div className='Details'>
                    <h1>{this.state.book.name}</h1>
                    <div className='container'>
                        <div>{this.state.book.details}</div>
                    <img
                        src={this.state.book.logo}
                        alt={this.state.book.name} />
                </div>
                    <Link to='/'>Back to home page</Link>
                </div>
            );
        }
    }
}
