import * as m from 'mithril';
import App from './components/App';
import {createStore } from 'redux';
import { addTodo } from './actions'
import reducers from './reducers';
import Provider from './mithril-redux';

const todos = reducers;
const store = createStore(todos)

store.dispatch(addTodo('Hello World!'))
console.log(store.getState()) 

const root = document.getElementById('app');

function render(){
  m.render(root, m(Provider,{ store }, m(App)));
}
render();
store.subscribe(render);
// m.mount(root, {view: ()=>m(Provider,{ store }, m(App))});
// store.subscribe(m.redraw)