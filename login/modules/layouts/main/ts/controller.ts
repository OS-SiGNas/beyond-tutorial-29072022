import {ReactWidgetController} from '@beyond-js/react-widgets/controllers';
import {Layout} from './views';

export /*bundle*/
class Controller extends ReactWidgetController {
    get Widget() {
        return Layout;
    }
}