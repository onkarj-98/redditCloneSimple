import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 articles : Article[];

 constructor(){
   this.articles=[];
 }

 

 sortedArticles(): Article[] {
   return this.articles.sort((a: Article, b:Article)=> b.votes-a.votes)
 }

 addArticles(title:HTMLInputElement, link: HTMLInputElement): boolean {
   console.log(`Adding new article title: ${title.value}and link: ${link.value}`);
   this.articles.push(new Article(title.value,link.value,0));

   title.value = ''; // this will clear the input field value
   link.value ='';

   return false;
 }
}
