import { Observable, of } from "rxjs";
import { Article } from "./dto";

export class ArticlesService {

    articleDetails: Article[];

    constructor() {
        this.articleDetails = [
            {id: '1', title: 'Core Java Tutorial', category: 'Java'},
            {id: '2', title: 'Angular Tutorial', category: 'Angular'},
            {id: '3', title: 'Hibernate Tutorial', category: 'Hibernate'}
          ];
    }

    getArticles(): Observable<Article[]> {
        return of(this.articleDetails);
    }

    createArticle(article: Article): Observable<Article> {
        this.articleDetails.push(article);
        return of(article);
    }

    getArticleById(id: string): Observable<Article[]> {
        return of(this.articleDetails.filter((each) => {
            return each.id === id;
        }));
    }

}

export const API = new ArticlesService();