import { Fragment, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Article } from '../api/dto';
import { store } from '../store';
import { createArticle } from '../store/actions';

export const CreateArticleModal: React.FC<any> = ({ showModal, handleClose }) => {

    
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');


    const handleCreation = () => {
        const newArticle: Article = {
            id: new Date().getTime().toString(),
            title: title,
            category: category
        }
        store.dispatch(createArticle(newArticle));
        handleClose();
    }


    const handleTitleChange = (e: any) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e: any) => {
        setCategory(e.target.value);
    };
    

    return (
        <Fragment>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Creating article dialog {title} after</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label>
                            Title:
                            <input type="text" onChange={handleTitleChange}/>
                        </label>

                        <label>
                            Category:
                            <input type="text" onChange={handleCategoryChange}/>
                        </label>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCreation}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}