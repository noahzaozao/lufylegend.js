import PrefabContainer from '../core/prefabs/PrefabContainer';
import BaseController from '../core/controllers/BaseController';
class LogoController extends BaseController {
    onLoad() {
        super.onLoad();
        console.error('LogoController onLoad');
        this.graphics.drawRect(2, '#ff0000', [10, 10, 50, 50], true, '#ff0000');
        this.dispatcher.username = '测试';
        this.dispatcher.avatar = 'stone';
        this.dispatcher.cards = [{ name: '老虎', icon: 'dog' }, { name: '狮子', icon: 'dragon' }, { name: '狮子', icon: 'dragon' }, { name: '狮子', icon: 'dragon' }];
    }
}
PrefabContainer.set('LogoController', LogoController);
export default LogoController;