import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { store } from '../store';
import { fetchArticles } from '../store/actions';
import { AppState } from '../store/state';
import { Article } from './api/dto';

export const SampleRedux: React.FC<any> = () => {

    const entity = useSelector((state: AppState) => {
        return state?.articlesState;
    });

    useEffect(() => {
        store.dispatch(fetchArticles());
    })

    

    return (
        <ul>
            {
                entity && Object.entries(entity?.articles).map(([key, value]: [string, Article]) => {
                    return (<li>{value.title}</li>);
                })
            }
        </ul>

    )
}