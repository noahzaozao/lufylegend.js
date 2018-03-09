/** @language chinese
 * <p>在响应用户通过键盘输入的内容时将调度的 LKeyboardEvent 对象 ID。有两种类型的键盘事件：LKeyboardEvent.KEY_DOWN 和 LKeyboardEvent.KEY_UP</p>
 * <p>加载键盘事件必须使用LGlobal.stage.addEventListener或者LEvent.addEventListener。</p>
 * @class LKeyboardEvent
 * @constructor
 * @since 1.0.0
 * @example
 * 	LInit(50, "legend", 800, 80, main);
 * 	function main () {
 * 		LGlobal.setDebug(true);
 * 		var title = new LTextField();
 * 		addChild(title);
 * 		title.text = "Click the keyboard, please!";
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN,keydown);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_UP,keyup);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_PRESS,keypress);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_PRESS,keypress);
 * 	}
 * 	function keydown (e) {
 * 		trace("keydown e.keyCode = " + e.keyCode);
 * 	}
 * 	function keyup (e) {
 * 		trace("keyup e.keyCode = " + e.keyCode);
 * 	}
 * 	function keypress (e) {
 * 		trace("keypress e.keyCode = " + e.keyCode);
 * 	}
 * @examplelink <p><a href="../../../api/LKeyboardEvent/index.html" target="_blank">测试链接</a></p>
 * @public
 */
/** @language english
 * <p>A LMouseEvent object is dispatched into the event flow whenever mouse events occur. A mouse event is usually generated by a user input device, such as a mouse or a trackball, that uses a pointer.</p>
 * <p>In a mobile browser, MOUSE_DOWN, MOUSE_UP, MOUSE_MOVE are automatically converted to TOUCH_DOWN, TOUCH_UP, TOUCH_MOVE.</p>
 * @class LKeyboardEvent
 * @constructor
 * @since 1.0.0
 * @example
 * 	LInit(50, "legend", 800, 80, main);
 * 	function main () {
 * 		LGlobal.setDebug(true);
 * 		var title = new LTextField();
 * 		addChild(title);
 * 		title.text = "Click the keyboard, please!";
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN,keydown);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_UP,keyup);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_PRESS,keypress);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_PRESS,keypress);
 * 	}
 * 	function keydown (e) {
 * 		trace("keydown e.keyCode = " + e.keyCode);
 * 	}
 * 	function keyup (e) {
 * 		trace("keyup e.keyCode = " + e.keyCode);
 * 	}
 * 	function keypress (e) {
 * 		trace("keypress e.keyCode = " + e.keyCode);
 * 	}
 * @examplelink <p><a href="../../../api/LKeyboardEvent/index.html" target="_blank">Try it »</a></p>
 * @public
 */
/** @language japanese
 * <p>LMouseEvent オブジェクトは、マウスイベントが発生するたびにイベントフローに送出されます。 通常、マウスイベントは、マウスやトラックボールなど、ポインターを使用したユーザー入力デバイスによって生成されます。</p>
 * <p>モバイルブラウザの場合、MOUSE_DOWN,MOUSE_UP,MOUSE_MOVEは自動的にTOUCH_DOWN,TOUCH_UP,TOUCH_MOVEに変更することができます、開発者は特別な処理などをやらなくてもいいです。</p>
 * @class LKeyboardEvent
 * @constructor
 * @since 1.0.0
 * @example
 * 	LInit(50, "legend", 800, 80, main);
 * 	function main () {
 * 		LGlobal.setDebug(true);
 * 		var title = new LTextField();
 * 		addChild(title);
 * 		title.text = "Click the keyboard, please!";
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_DOWN,keydown);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_UP,keyup);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_DOWN,keydown);
 * 		LGlobal.stage.addEventListener(LKeyboardEvent.KEY_PRESS,keypress);
 * 		//LEvent.addEventListener(window,LKeyboardEvent.KEY_PRESS,keypress);
 * 	}
 * 	function keydown (e) {
 * 		trace("keydown e.keyCode = " + e.keyCode);
 * 	}
 * 	function keyup (e) {
 * 		trace("keyup e.keyCode = " + e.keyCode);
 * 	}
 * 	function keypress (e) {
 * 		trace("keypress e.keyCode = " + e.keyCode);
 * 	}
 * @examplelink <p><a href="../../../api/LKeyboardEvent/index.html" target="_blank">実際のサンプルを見る</a></p>
 * @public
 */
var LKeyboardEvent = function () {throw "LKeyboardEvent cannot be instantiated";};
/** @language chinese
 * <p>[静态] 定义 keydown 事件对象的 type 属性值。</p>
 * <p>此事件具有以下属性：</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>返回当前 Event 对象表示的事件的名称。</td></tr>
 * <tr><td>keyCode</td><td>对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup 事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。</td></tr>
 * <tr><td>ctrlKey</td><td>返回当事件被触发时，"CTRL" 键是否被按下。</td></tr>
 * <tr><td>shiftKey</td><td>返回当事件被触发时，"SHIFT" 键是否被按下。</td></tr>
 * <tr><td>altKey</td><td>返回当事件被触发时，"ALT" 是否被按下。</td></tr>
 * <tr><td>metaKey</td><td>返回当事件被触发时，"meta" 键是否被按下。</td></tr>
 * </table>
 * @property KEY_DOWN
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language english
 * <p>[static] Defines the value of the type property of a keydown event object.</p>
 * <p>This event has the following properties:</p>
 * <table>
 * <tr><th>Property</th><th>Value</th></tr>
 * <tr><td>type</td><td>Returns the name of the event</td></tr>
 * <tr><td>keyCode</td><td>Returns the Unicode value of a non-character key in the keyboard event.</td></tr>
 * <tr><td>ctrlKey</td><td>Returns whether or not the "CTRL" key was pressed when an event was triggered</td></tr>
 * <tr><td>shiftKey</td><td>Returns whether or not the "SHIFT" key was pressed when an event was triggered</td></tr>
 * <tr><td>altKey</td><td>Returns whether or not the "ALT" key was pressed when an event was triggered</td></tr>
 * <tr><td>metaKey</td><td>Returns whether or not the "meta" key was pressed when an event was triggered</td></tr>
 * </table>
 * @property KEY_DOWN
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language japanese
 * <p>[静的] type プロパティ（keydown イベントオブジェクト）の値を定義します。</p>
 * <p>このイベントには、次のプロパティがあります。</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>イベントオブジェクトとスクリプトオブジェクトに対して、それぞれイベント名とスクリプト言語を文字列で返す。</td></tr>
 * <tr><td>keyCode</td><td>イベントを引き起こしたキーのUnicodeを指定する。</td></tr>
 * <tr><td>ctrlKey</td><td>CTRLキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>SHIFTキーの状態を論理値で返す。</td></tr>
 * <tr><td>altKey</td><td>ALTキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>metaキーの状態を論理値で返す。</td></tr>
 * </table>
 * @property KEY_DOWN
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
LKeyboardEvent.KEY_DOWN = "keydown";
/** @language chinese
 * <p>[静态] 定义 keyup 事件对象的 type 属性值。</p>
 * <p>此事件具有以下属性：</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>返回当前 Event 对象表示的事件的名称。</td></tr>
 * <tr><td>keyCode</td><td>对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup 事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。</td></tr>
 * <tr><td>ctrlKey</td><td>返回当事件被触发时，"CTRL" 键是否被按下。</td></tr>
 * <tr><td>shiftKey</td><td>返回当事件被触发时，"SHIFT" 键是否被按下。</td></tr>
 * <tr><td>altKey</td><td>返回当事件被触发时，"ALT" 是否被按下。</td></tr>
 * <tr><td>metaKey</td><td>返回当事件被触发时，"meta" 键是否被按下。</td></tr>
 * </table>
 * @property KEY_UP
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language english
 * <p>[static] Defines the value of the type property of a keyup event object.</p>
 * <p>This event has the following properties:</p>
 * <table>
 * <tr><th>Property</th><th>Value</th></tr>
 * <tr><td>type</td><td>Returns the name of the event</td></tr>
 * <tr><td>keyCode</td><td>Returns the Unicode value of a non-character key in the keyboard event.</td></tr>
 * <tr><td>ctrlKey</td><td>Returns whether or not the "CTRL" key was pressed when an event was triggered</td></tr>
 * <tr><td>shiftKey</td><td>Returns whether or not the "SHIFT" key was pressed when an event was triggered</td></tr>
 * <tr><td>altKey</td><td>Returns whether or not the "ALT" key was pressed when an event was triggered</td></tr>
 * <tr><td>metaKey</td><td>Returns whether or not the "meta" key was pressed when an event was triggered</td></tr>
 * </table>
 * @property KEY_UP
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language japanese
 * <p>[静的] type プロパティ（keyup イベントオブジェクト）の値を定義します。</p>
 * <p>このイベントには、次のプロパティがあります。</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>イベントオブジェクトとスクリプトオブジェクトに対して、それぞれイベント名とスクリプト言語を文字列で返す。</td></tr>
 * <tr><td>keyCode</td><td>イベントを引き起こしたキーのUnicodeを指定する。</td></tr>
 * <tr><td>ctrlKey</td><td>CTRLキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>SHIFTキーの状態を論理値で返す。</td></tr>
 * <tr><td>altKey</td><td>ALTキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>metaキーの状態を論理値で返す。</td></tr>
 * </table>
 * @property KEY_UP
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
LKeyboardEvent.KEY_UP = "keyup";
/** @language chinese
 * <p>[静态] 定义 keypress 事件对象的 type 属性值。</p>
 * <p>此事件具有以下属性：</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>返回当前 Event 对象表示的事件的名称。</td></tr>
 * <tr><td>keyCode</td><td>对于 keypress 事件，该属性声明了被敲击的键生成的 Unicode 字符码。对于 keydown 和 keyup 事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。</td></tr>
 * <tr><td>ctrlKey</td><td>返回当事件被触发时，"CTRL" 键是否被按下。</td></tr>
 * <tr><td>shiftKey</td><td>返回当事件被触发时，"SHIFT" 键是否被按下。</td></tr>
 * <tr><td>altKey</td><td>返回当事件被触发时，"ALT" 是否被按下。</td></tr>
 * <tr><td>metaKey</td><td>返回当事件被触发时，"meta" 键是否被按下。</td></tr>
 * </table>
 * @property KEY_PRESS
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language english
 * <p>[static] Defines the value of the type property of a keypress event object.</p>
 * <p>This event has the following properties:</p>
 * <table>
 * <tr><th>Property</th><th>Value</th></tr>
 * <tr><td>type</td><td>Returns the name of the event</td></tr>
 * <tr><td>keyCode</td><td>Returns the Unicode value of a non-character key in the keyboard event.</td></tr>
 * <tr><td>ctrlKey</td><td>Returns whether or not the "CTRL" key was pressed when an event was triggered</td></tr>
 * <tr><td>shiftKey</td><td>Returns whether or not the "SHIFT" key was pressed when an event was triggered</td></tr>
 * <tr><td>altKey</td><td>Returns whether or not the "ALT" key was pressed when an event was triggered</td></tr>
 * <tr><td>metaKey</td><td>Returns whether or not the "meta" key was pressed when an event was triggered</td></tr>
 * </table>
 * @property KEY_PRESS
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
/** @language japanese
 * <p>[静的] type プロパティ（keypress イベントオブジェクト）の値を定義します。</p>
 * <p>このイベントには、次のプロパティがあります。</p>
 * <table>
 * <tr><th>属性</th><th>值</th></tr>
 * <tr><td>type</td><td>イベントオブジェクトとスクリプトオブジェクトに対して、それぞれイベント名とスクリプト言語を文字列で返す。</td></tr>
 * <tr><td>keyCode</td><td>イベントを引き起こしたキーのUnicodeを指定する。</td></tr>
 * <tr><td>ctrlKey</td><td>CTRLキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>SHIFTキーの状態を論理値で返す。</td></tr>
 * <tr><td>altKey</td><td>ALTキーの状態を論理値で返す。</td></tr>
 * <tr><td>shiftKey</td><td>metaキーの状態を論理値で返す。</td></tr>
 * </table>
 * @property KEY_PRESS
 * @type String
 * @static
 * @since 1.0.0
 * @public
 */
LKeyboardEvent.KEY_PRESS = "keypress";
export default LKeyboardEvent;