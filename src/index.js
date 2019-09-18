import './index.css';
import * as serviceWorker from './serviceWorker';

import rerender from "./rerender";

rerender();

/*ReactDOM.render(<App state={ state } addPost={addPost}/>, document.getElementById('root'));*/

serviceWorker.unregister();
