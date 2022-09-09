import { Fragment, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { store } from '../store';
import { fetchArticles } from '../store/actions';
import { AppState } from '../store/state';
import { ArticlesGrid } from './ArticlesGrid';
import { CreateArticleModal } from './CreateArticle';

export const SampleRedux: React.FC<any> = () => {

    const [show, setShow] = useState(false);
    const [remove, setRemove] = useState(false);

    const entity = useSelector((state: AppState) => {
        return Object.values(state?.articlesState?.articles);
    });

    useEffect(() => {
        store.dispatch(fetchArticles());
    }, []);

    const handleCreation = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }
    
    const handleDeleteSelected = () => {
        setRemove(true);
    }

    return (
        <Fragment>
            <Button onClick={handleCreation}> CREATE </Button>
            <Button onClick={handleDeleteSelected} style={{marginLeft: "6px"}}> DELETE SELECTED </Button>
            <CreateArticleModal showModal={show} handleClose={handleClose}/>
            <ArticlesGrid rowData={entity} remove={remove}/>
        </Fragment>
    )
}