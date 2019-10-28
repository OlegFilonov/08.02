import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/> , document.getElementById('root'));

// Предыдущая строчка отвечает за отрисовку элемента App в div-элементе с id #root
// App.js содержит компоненты нашего одностраничного приложения. В нём также обеспечены переходы между пунктами
// меню без перезагрузки страницы. Эта функция реализована благодаря библиотеке 'react-router-dom'

// Компонент Home содержит h1 и h2, которые просто отрисовывают текст и компонент-TodoList, в котором происходит работа JS
// В свою очередь, в TodoList рендерится два компонента ListView и ListForm. Также в файле прописаны функции, которые
// отвечают за работу приложения: добавление, удаление пунктов списка, обновление значения input

// Компонент ListView принимает от родительского TodoList значения пунктов списка. Кнопка в компоненте обращается к
// функции из родителя для удаления пункта списка, к которому она привязана, как дочерний элемент.

// Компонент ListForm обращается к функциям, расположенным в родителе за функциями добавления и обновления списка пунктов.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
